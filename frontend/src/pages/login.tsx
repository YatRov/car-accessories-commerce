import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css"

export default function Login(){

  return(
    <section className="login-page">
      {/*left*/}
      <div className="login-left">
        <div className="login-container">
          <p className="text-welcome">The Fourth Ring</p>
          <h1 className="welcome-title">Witamy</h1>
          
          <form className="form-custom">
            <label>Adres e-mail</label>
            <input type="email" className="form-control"/>
            <button type="submit" className="btn-login">Dalej</button>
            <button type="button" className="btn-register">Zarejestruj się</button>
            </form>
        </div>
    </div>

  {/*right*/}
  <div className="login-right">
    <img
      src="https://images.unsplash.com/photo-1710011115876-301113e1bb61?q=80&w=1170&auto=format&fit=crop"
      alt="car"
    />
  </div>
  </section>
    );
}
