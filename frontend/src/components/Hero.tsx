import "bootstrap/dist/css/bootstrap.min.css";
import "./Hero.css";

export default function Hero(){
  return (
    <div className="hero-container position-relative w-100 vh-100 overflow-hidden">
      
      <video
        className="hero-video position-absolute top-0 start-0 w-100 h-100"
        autoPlay
        muted
        loop
        disablePictureInPicture
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      <div className="hero-overlay">
        <h1 className="display-5 fw-bold">Audi Fan Shop</h1>
        <p className="lead">Twój styl nie potrzebuje kompromisów</p>
    </div>
    </div>
  );
};
