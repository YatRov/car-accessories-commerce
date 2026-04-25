import "bootstrap/dist/css/bootstrap.min.css";

export default function AboutUs(){
    return(
        <div className="wrapper">
              <div className="container">
                <img src="./AboutUsWallpaper.png" alt="AboutUs"></img>
                <h2 className="mt-4">About Us</h2>
                <h2 className="mt-4">THE FOURTH RING</h2>
                <h3 className="mt-4">Lifestyle Store</h3>
              </div>
              <div className="TextAboutUs">
                <p>The Fourth Ring to autorski koncept lifestyle’owego sklepu z akcesoriami, 
                    stworzony dla tych, dla których niemiecka motoryzacja to coś więcej niż 
                    transport. Naszą misją jest dostarczanie rozwiązań, które wypełniają lukę
                     między fabrycznym wyposażeniem a codzienną eksploatacją samochodu przez 
                     entuzjastę.</p>
              </div>
            </div>
    )
}