import React, { useState, useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import Navbar from "../Components/NavBar";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";



function Contacto() {
  const [sent, setSent] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = async (e) => {
    e.preventDefault();
    setSent(true);
    try {
      //https://contact.carlosboyzo.com/send_mail
      //http://localhost:4000/send_mail
      await axios.post("https://contact.carlosboyzo.com/send_mail", {
        name,
        email,
        subject,
        phone,
        message,
      });
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    AOS.init({
      offset: 120,
      delay: 20,
      duration: 500,
      easing: "ease-in-out",
      debounceDelay: 50,
      throttleDelay: 99,
      mirror: false,
      anchorPlacement: "bottom-top",
    });
  }, []);
  return (
    <>
      <Helmet>
        <title>CBO - Contacto</title>
        <link rel="canonical" href="https://carlosboyzo.com/contacto" />
      </Helmet>
      <Navbar />

      <div className="section" data-aos="fade-in">
        <div className="contenedor contacto">

          <div className="col-img">
            <h1>Contáctame</h1>
            <img className="img-fluid" src="https://firebasestorage.googleapis.com/v0/b/react-auth-cbo-app.appspot.com/o/hola.png?alt=media&token=77ca5bc1-4f67-49c6-bef6-ac7d40d3cab9" alt="hola" />
          </div>
          <div className="col-form">
            {!sent ? (
              <form className="contact-form" onSubmit={handleSend}>
                <input
                  type="text"
                  placeholder="Nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="correo@ltd"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <input
                  type="text"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />

                <br />
                <input
                  type="text"
                  placeholder="Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />

                <textarea
                  name="textarea"
                  rows="5"
                  cols="40"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                >
                  Escribe algo aquí
                </textarea>

                <button className="btn-primario" type="submit">
                  Enviar mensaje
                </button>
              </form>
            ) : (
              <section>
                <div className="contenedor">
                  <h1> ✨ Gracias por tu mensaje, respondere lo más pronto posible</h1>
                  <Link className="btn-primario" to="/">
                    {" "}
                    Regresar al inicio
                  </Link>
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacto;
