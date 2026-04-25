import "bootstrap/dist/css/bootstrap.min.css";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <div className="about">
      <img src="/AboutUsWallpaper.png" alt="bg" className="bg" />

      <div className="container content">
        <div className="row h-100 align-items-center">
          <div className="col-12 col-md-5 text-white">
            <h1 className="title">O NAS</h1>

            <p className="text">
              The Fourth Ring to autorski koncept lifestyle’owego sklepu z akcesoriami
              dla fanów niemieckiej motoryzacji premium. Tworzymy przestrzeń, w której
              estetyka, technologia i codzienna funkcjonalność spotykają się w jednym stylu.
              
              <br /><br />
              Skupiamy się na detalach — od wnętrza samochodu po akcesoria, które podkreślają
              charakter kierowcy. Każdy produkt jest selekcjonowany tak, aby łączył fabryczną
              jakość z nowoczesnym designem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}