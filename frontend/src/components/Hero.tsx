import "bootstrap/dist/css/bootstrap.min.css";
import "./Hero.css";

export default function Hero(){
  return (
    <div className="hero-container">
      
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        disablePictureInPicture
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      <div className="hero-overlay">
        <h1 className="display-5">THE FOURTH RING</h1>
        <h1 className="display-5">Lifestyle Store</h1>
        <p className="lead">Twój styl nie potrzebuje kompromisów</p>
    </div>
    </div>
  );
};
