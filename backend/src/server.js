
require("dotenv").config();

const express = require("express");
const session = require("express-session");
const MySQLStore = require("express-mysql-session")(session);
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const pool = require("./config/db");

const app = express();
const isProduction = process.env.NODE_ENV === "production";
const frontendOrigin =
  process.env.FRONTEND_ORIGIN || "http://localhost:5173";

if (!process.env.SESSION_SECRET) {
  throw new Error("Brak SESSION_SECRET w pliku .env");
}

app.disable("x-powered-by");

if (isProduction) {
  // Ustaw zgodnie z konfiguracją zaufanego reverse proxy.
  app.set("trust proxy", 1);
}

app.use(helmet());

app.use(cors({
  origin: frontendOrigin,
  credentials: true,
}));

app.use(express.json({ limit: "10kb" }));

const sessionStore = new MySQLStore({}, pool);

app.use(session({
  name: "car.sid",
  secret: process.env.SESSION_SECRET,
  store: sessionStore,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: isProduction,
    sameSite: "lax",
    maxAge: 1000 * 60 * 60 * 24,
  },
}));

app.use(
  "/api/auth/login",
  rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 10,
    standardHeaders: true,
    legacyHeaders: false,
  })
);

app.use(
  "/api/auth",
  require("./routes/auth")
);

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use((err, _req, res, _next) => {
  console.error("Błąd serwera:", err.message);

  res.status(500).json({
    message: "Wystąpił błąd serwera.",
  });
});

const port = Number(process.env.PORT || 3001);

app.listen(port, () => {
  console.log(`Backend działa na porcie ${port}`);
});