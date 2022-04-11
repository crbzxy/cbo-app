import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../logo.svg";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useAuth } from "../context/AuthContext";
import { Helmet } from "react-helmet-async";
function Start() {
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
  const { user, logout, loading } = useAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };
  console.log(user);
  if (loading)
    return (
      <section>
        <div className="contenedor" data-aos="fade-in">
          <h1>Loading</h1>
        </div>
      </section>
    );
  return (
    <>
      <Helmet>
        <title>Carlos Boyzo Oregón</title>
        <link rel="canonical" href="https://www.carlosboyzo.com/" />
      </Helmet>
      <section className="App-header" >
        <div className="contenedor">
          {user && <small>Hola {user.email}</small>}
          <div className="card">
            <img src={logo} className="logo" alt="Carlos Boyzo Oregón" />
            <h1>Carlos Boyzo Oregón</h1>
            <p className="position" >UX-UI DEV ART</p>
            <div className="contenedor-botones">

              <a className="btn-primario" href="https://www.instagram.com/perrodimensional/">Instagram</a>
              <a className="btn-primario" href="https://www.linkedin.com/in/carlosboyzo/">Linkedin</a>
            </div>
            <p className="frase">
              <q>
                La verdadera imaginación es aquella que dinamita, elucida,
                inyecta microbios esmeraldas en otras imaginaciones. En poesía y
                en lo que sea, la entrada en materia tiene que ser ya la entrada
                en aventura.
              </q>
            </p>

            <small>
              Déjenlo todo, nuevamente by <strong>Roberto Bolaño </strong> México D. F. - 1976
            </small>
            <br />

            {user && (
              <button className="btn-primario" onClick={handleLogout}>
                Cerrar sesión
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Start;
