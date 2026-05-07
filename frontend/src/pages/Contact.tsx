import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";

const contactItems = [
  {
    label: "Phone",
    value: "+48 500 600 700",
    href: "tel:+48500600700",
  },
  {
    label: "E-mail",
    value: "office@the-fourth-ring.pl",
    href: "mailto:office@the-fourth-ring.pl",
  },
  {
    label: "Adres",
    value: "ul. Motoryzacyjna 12\n00-001 Berlin, Germany",
    href: "https://maps.google.com/?q=Berlin",
  },
];

const socials = [
  { icon: "bi-instagram", url: "https://www.instagram.com/" },
  { icon: "bi-facebook", url: "https://www.facebook.com/" },
];

export default function Contact(){
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="wrapper-contact">
      <div className="container">
        <h1 className="contact-title">Kontakt</h1>

        <div className="row">
          {/*form*/}
          <div className="col-12 col-md-6">
            <form className="form-custom" onSubmit={handleSubmit}>
              <input type="text" className="form-control" placeholder="Name" />
              <input type="email" className="form-control" placeholder="Email" />
              <textarea className="form-control" rows={5} placeholder="Message" />

              <button type="submit" className="btn-send">
                Send
              </button>
            </form>
          </div>

          {/*info*/}
          <div className="col-12 col-md-5 offset-md-1">
            <div className="contact-info-container">
              {contactItems.map((item) => (
                <div className="mb-4" key={item.label}>
                  <p className="info-label">{item.label}</p>

                  <a
                    href={item.href}
                    className="info-value link"
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                  >
                    {item.value}
                  </a>
                </div>
              ))}

              <div className="mt-4 small text-secondary">
                Pon - Pt: 9:00 - 18:00
              </div>

              <div className="socials mt-4">
                {socials.map((s) => (
                  <a key={s.icon} href={s.url} target="_blank" rel="noreferrer">
                    <i className={`bi ${s.icon}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}