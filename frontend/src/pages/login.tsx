import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState<"identifier" | "password">("identifier");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleIdentifierSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    if (!identifier.trim()) {
      setError("Podaj login lub adres e-mail.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:3001/api/auth/check-identifier",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ identifier: identifier.trim() }),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.exists) {
        setError(
          data.message ||
            "Nie znaleziono konta. Zarejestruj się lub podaj poprawny login."
        );
        return;
      }

      setPassword("");
      setStep("password");
    } catch {
      setError("Nie udało się połączyć z serwerem.");
    } finally {
      setLoading(false);
    }
  }

  async function handlePasswordSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    if (!password) {
      setError("Podaj hasło.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:3001/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          identifier: identifier.trim(),
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Nieprawidłowe hasło.");
        return;
      }

      navigate("/");
    } catch {
      setError("Nie udało się połączyć z serwerem.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="container-fluid vh-100 p-0">
      <div className="row h-100 m-0">
        {/* left */}
        <div className="col-md-4 d-flex justify-content-center align-items-center bg-light">
          <div className="w-75">
            <p className="text-welcome">The Fourth Ring</p>

            <h1 className="welcome-title">
              {step === "password" ? (
                <>Witamy {identifier}</>
              ) : (
                "Witamy"
              )}
            </h1>

            {step === "identifier" ? (
              <form className="form-custom" onSubmit={handleIdentifierSubmit}>
                <label htmlFor="identifier">Adres e-mail lub login</label>

                <input
                  id="identifier"
                  type="text"
                  className="form-control_2"
                  value={identifier}
                  onChange={(e) => {
                    setIdentifier(e.target.value);
                    setError("");
                  }}
                  autoComplete="username"
                  required
                />

                {error && <p role="alert">{error}</p>}

                <button
                  type="submit"
                  className="btn btn-dark"
                  disabled={loading}
                >
                  {loading ? "Sprawdzanie..." : "Dalej"}
                </button>

                <button
                  type="button"
                  className="btn btn-outline-dark"
                  onClick={() => navigate("/registration")}
                >
                  Zarejestruj się
                </button>
              </form>
            ) : (
              <form className="form-custom" onSubmit={handlePasswordSubmit}>
                <label htmlFor="password">Hasło</label>

                <input
                  id="password"
                  type="password"
                  className="form-control_2"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError("");
                  }}
                  autoComplete="current-password"
                  autoFocus
                  required
                />

                {error && <p role="alert">{error}</p>}

                <button
                  type="submit"
                  className="btn btn-dark"
                  disabled={loading}
                >
                  {loading ? "Logowanie..." : "Zaloguj się"}
                </button>

                <button
                  type="button"
                  className="btn btn-outline-dark"
                  disabled={loading}
                  onClick={() => {
                    setStep("identifier");
                    setPassword("");
                    setError("");
                  }}
                >
                  Wstecz
                </button>
              </form>
            )}
          </div>
        </div>

        {/* right */}
        <div className="col-md-8 d-none d-md-block p-0">
          <img
            src="https://images.unsplash.com/photo-1710011115876-301113e1bb61?q=80&w=1170&auto=format&fit=crop"
            alt="car"
            className="img-fluid vh-100 w-100 object-fit-cover"
          />
        </div>
      </div>
    </section>
  );
}