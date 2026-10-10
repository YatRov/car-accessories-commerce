const express = require("express");
const bcrypt = require("bcrypt");
const pool = require("../config/db");

const router = express.Router();

function publicUser(user) {
  return {
    id: user.id,
    username: user.username,
    email: user.email,
  };
}

router.post("/check-identifier", async (req, res, next) => {
  try {
    const { identifier } = req.body;

    if (typeof identifier !== "string" || !identifier.trim()) {
      return res.status(400).json({
        message: "Podaj login lub adres e-mail.",
      });
    }

    const value = identifier.trim();
    const isEmail = value.includes("@");

    const [rows] = await pool.execute(
      `SELECT id FROM users WHERE ${isEmail ? "email" : "username"} = ? LIMIT 1`,
      [isEmail ? value.toLowerCase() : value]
    );

    return res.json({
      exists: rows.length > 0,
    });
  } catch (error) {
    next(error);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { identifier, password } = req.body;

    if (
      typeof identifier !== "string" ||
      typeof password !== "string" ||
      !identifier.trim() ||
      !password ||
      Buffer.byteLength(password, "utf8") > 72
    ) {
      return res.status(400).json({
        message: "Podaj login lub e-mail oraz hasło.",
      });
    }

    const value = identifier.trim();
    const isEmail = value.includes("@");

    const [rows] = await pool.execute(
      `SELECT id, username, email, password_hash
       FROM users
       WHERE ${isEmail ? "email" : "username"} = ?
       LIMIT 1`,
      [isEmail ? value.toLowerCase() : value]
    );

    const user = rows[0];

    // Jednolity komunikat nie ujawnia, czy konto istnieje.
    if (
      !user ||
      !(await bcrypt.compare(password, user.password_hash))
    ) {
      return res.status(401).json({
        message: "Nieprawidłowy login lub hasło.",
      });
    }

    // Zmień identyfikator sesji po uwierzytelnieniu.
    req.session.regenerate((err) => {
      if (err) return next(err);

      req.session.userId = String(user.id);

      req.session.save((saveError) => {
        if (saveError) return next(saveError);

        return res.json({
          message: "Zalogowano pomyślnie.",
          user: publicUser(user),
        });
      });
    });
  } catch (error) {
    next(error);
  }
});

router.get("/me", async (req, res, next) => {
  try {
    if (!req.session.userId) {
      return res.status(401).json({
        message: "Nie jesteś zalogowany.",
      });
    }

    const [rows] = await pool.execute(
      `SELECT id, username, email
       FROM users
       WHERE id = ?
       LIMIT 1`,
      [req.session.userId]
    );

    if (!rows[0]) {
      return req.session.destroy(() =>
        res.status(401).json({
          message: "Sesja jest nieprawidłowa.",
        })
      );
    }

    return res.json({ user: publicUser(rows[0]) });
  } catch (error) {
    next(error);
  }
});

router.post("/logout", (req, res, next) => {
  req.session.destroy((err) => {
    if (err) return next(err);

    res.clearCookie("car.sid", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
    });

    return res.json({ message: "Wylogowano pomyślnie." });
  });
});

module.exports = router;