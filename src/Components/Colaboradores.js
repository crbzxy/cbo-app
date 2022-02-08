import React from "react";
import "../scss/index.scss";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Slider from "react-slick";



function Colaboradores() {
  const data = [{
    id: 1,
    img: "https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/partners%2Fabbott.png?alt=media&token=d67247cf-4411-4507-bcf1-c411d8f86006",
    name: "Abbott"
  },
  {
    id: 2,
    img: "https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/partners%2FABBVIE-LOGO.png?alt=media&token=d9821bfe-b80f-4e5c-98f4-0f1b2937172f",
    name: "Abbie"
  },
  {
    id: 3,
    img: "https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/partners%2FAga.png?alt=media&token=69c3a960-36e2-4db8-ad53-90c940b34a05",
    name: "Aga"
  },
  {
    id: 4,
    img: "https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/partners%2FAllergan.png?alt=media&token=4f99769b-1013-4610-8705-2d919391aa63",
    name: "Allergan"
  },
  {
    id: 5,
    img: "https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/partners%2Fasofarma-seeklogo.com.png?alt=media&token=1f7520b7-b8b4-4e7d-88c7-809c40e25493",
    name: "Asofarma"
  },
  {
    id: 6,
    img: "https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/partners%2Fastra_zeneca_logo.png?alt=media&token=b1be33ad-dceb-4759-a5f8-4ac2a4bcb29d",
    name: "Aztra"
  },
  {
    id: 7,
    img: "https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/partners%2FLOGO_BAXTER.png?alt=media&token=3d75a734-9077-4e01-8f72-4109f6abd9af",
    name: "Baxter"
  },
  {
    id: 8,
    img: "https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/partners%2FBiogen-Logo.png?alt=media&token=1a714229-1bd1-4b97-b3ce-e80e681665f0",
    name: "Biogen"
  },
  {
    id: 9,
    img: "https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/partners%2Flogo_new_biomarin.png?alt=media&token=66548550-c227-4fac-8034-10688b2691e2",
    name: "Biomarin"
  },
  {
    id: 10,
    img: "https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/partners%2Fbio-products-laboratory-bpl.png?alt=media&token=2f33b60f-3b03-4b30-befd-84d471f7d7db",
    name: "Bpl"
  },
  {
    id: 11,
    img: "https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/partners%2FLogo_Chiesi.png?alt=media&token=aa106f7d-17df-4ab7-9f94-57e3b8c44ddb",
    name: "Chiesi"
  },
  {
    id: 12,
    img: "https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/partners%2FCoiner.png?alt=media&token=2053bacd-985c-471a-9715-4573d6164e9d",
    name: "Coiner"
  },
  {
    id: 13,
    img: "https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/partners%2FEisai_logo.png?alt=media&token=ff3a711f-2eeb-4dac-9a62-3784637e0286",
    name: "Eisai"
  },
  {
    id: 14,
    img: "https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/partners%2FGrupoVal.png?alt=media&token=031e305a-750b-42c7-8583-8c90967a15d6",
    name: "Grupo Val"
  },
  {
    id: 15,
    img: "https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/partners%2FLogo-with-claim-blue.png?alt=media&token=28feaab9-2a2a-41d1-9661-a53ed2f08e49",
    name: "Igenomix"
  },
  {
    id: 16,
    img: "https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/partners%2Fjanssen.png?alt=media&token=b94f7df7-d2aa-4c95-9d5e-02426f51a1bd",
    name: "Janssen"
  },
  {
    id: 17,
    img: "https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/partners%2FNovartis.png?alt=media&token=15b974ec-5fe1-4e1a-b842-3b228db575fc",
    name: "Novartis"
  },
  {
    id: 18,
    img: "https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/partners%2FOmer.png?alt=media&token=ccbed7f3-b183-4d90-b209-74d3a08d12c3",
    name: "Omer"
  },
  {
    id: 19,
    img: "https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/partners%2FROCHE_LOGO.png?alt=media&token=931d2ec8-1d7b-4ca7-a454-ce75d74de904",
    name: "Roche"
  },
  {
    id: 20,
    img: "https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/partners%2Fsanofi.png?alt=media&token=3bf13a0d-69bf-4988-9b5d-fe118fa88dcb",
    name: "Sanofi"
  },
  {
    id: 21,
    img: "https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/partners%2FLogotipo-SEER_AZUL_GO_PHARMA.png?alt=media&token=e924a284-e43b-411a-abbc-76b1476e34d9",
    name: "Seer"
  },
  {
    id: 22,
    img: "https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/partners%2FSKINDER_LOGOR.png?alt=media&token=2162dc1c-4c61-4ef4-906a-7762cef4e7fa",
    name: "Skinder"
  },
  {
    id: 23,
    img: "https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/partners%2FLogoSparks.png?alt=media&token=0d3648a5-f310-4a9d-894d-ddb033894c62",
    name: "Sparks"
  },
  {
    id: 24,
    img: "https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/partners%2FTakeda.png?alt=media&token=39f1dada-193d-4865-bf52-1ecbf50f36ef",
    name: "Takeda"
  },
  {
    id: 25,
    img: "https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/partners%2FLogoTeva_RGB.png?alt=media&token=ba247ea3-69c2-4582-90f6-d24923845bf2",
    name: "Teva"
  },
  {
    id: 26,
    img: "https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/partners%2FUltraMedic.png?alt=media&token=0142c9a0-e53d-42cc-9469-990291ba046f",
    name: "Ultra Medic"
  },
  {
    id: 27,
    img: "https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/partners%2FultragenyxPH-.png?alt=media&token=247be36e-c771-444e-a31b-3aaa67c78eed",
    name: "Ultragenyx"
  }];
  const settings = {

    ClassName: "row",

    rows: 3,
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    pauseOnHover: false,
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
          slidesPerRow: 4,
        }
      }

    ]
  };
  return (

    <>



      <div className=" sociost " data-aos="fade-up" >
        <h4 data-aos="fade-up" className="pt-5"> Colaboraciones y Clientes</h4>
        <br />
        <Slider className="mt-5 pb-4" {...settings} >
          {data.map((user) => (
            <div className="col-sm socio " data-aos="fade-up" key={user.id} >
              <img src={user.img} alt="socio-gopharma" />
              <br />
            </div>
          ))}
        </Slider>


      </div>



    </>
  );
}

export default Colaboradores;