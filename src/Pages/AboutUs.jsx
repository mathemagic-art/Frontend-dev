import React from 'react';
import Navbar from '../Layouts/Navbar';
import FunctionsMenu from '../Layouts/FunctionsMenu';
import { ReactComponent as Logo1 } from "../Files/svgs/Logo1.svg";
import umar from "../Files/pngs/Umar.png";
import {ReactComponent as Quotemark} from "../Files/svgs/Quotemark.svg";
import professor from "../Files/pngs/Muso.png";

const AboutUs = () => {

  const style = {
    name: "font-bold text-[20px] leading-6 font-DM text-center",
    teams: "text-center font-inter text-bold text-4xl mt-[180px]",
  }


  return (
    <div className='flex flex-col w-full bg-white text-head dark:text-white dark:bg-black'>
        <Navbar />
        <FunctionsMenu />
        <div className="flex flex-col">

          <Logo1 className="m-auto mt-[58px] h-[134px] w-[120px] "/>
          <Quotemark className='place-self-start ml-60 mt-5'/>
          <h2 className="text-center fon-inter ml-96 mr-96 mt-5 italic text-3xl">MatheMagic offers a wealth of smart calculators from various domains of Mathematics. The stated goal of the site is to make scientific content universally accessible by expanding the searchable data space onto scientific notations, equations, and formulas. MatheMagic, makes math simpler by doing magic.</h2>
          <Quotemark className="rotate-180 place-self-end mr-60 self-end justify-self-end ml-auto" />
          <img src={professor} alt="Professor" className="self-end ml-auto mr-32 mt-[85px] w-[300px] h-[300px]"/>

          <h1 className="text-center font-inter text-bold text-6xl mt-[320px]">Meet our TEAM</h1>
          <h2 className={style.teams}>  PRODUCT MANAGERS</h2>
          <div className="flex space-around justify-center mt-[70px] gap-[23px]">
            <figure>
              <img src={umar} alt="Umar" />
                <figcaption className={style.name}>ELNAZAR <br/>ULANBEK ULUU</figcaption>
            </figure>
            <figure>
              <img src={umar} alt="Elnazar" />
                <figcaption className={style.name}>UMAR <br/>NUROV</figcaption>
            </figure>
          </div>  

                {/* UX/UI DESIGN TEAM */}
          <h2 className={style.teams}>UX/UI Design</h2>
          <div className="flex space-around justify-center mt-[70px] gap-[]">
            <figure>
              <img src={umar} alt="Umar" />
                <figcaption className={style.name}>UMIDBEK <br/>ULMASOV</figcaption>
            </figure>
            <figure>
              <img src={umar} alt="Elnazar" />
                <figcaption className={style.name}>BENAZIR <br/>TEMIRALIEVA</figcaption>
            </figure>
            <figure>
              <img src={umar} alt="Elnazar" />
                <figcaption className={style.name}>MUNIS <br/>SAIDRAHMONOV</figcaption>
            </figure>
          </div>


              {/* BACKEND DEVELOPMENT TEAM */}
              <h2 className={style.teams}>Backend Development</h2>
          <div className="flex space-around justify-center mt-[70px] gap-[]">
            <figure>
              <img src={umar} alt="Umar" />
                <figcaption className={style.name}>ELDAR <br/>ULANOV</figcaption>
            </figure>
            <figure>
              <img src={umar} alt="Elnazar" />
                <figcaption className={style.name}>AIZADA <br/>BERDIBEKOVA</figcaption>
            </figure>
            <figure>
              <img src={umar} alt="Elnazar" />
                <figcaption className={style.name}>ABBOSJON <br/>MADIEV</figcaption>
            </figure>
            <figure>
              <img src={umar} alt="Umar" />
                <figcaption className={style.name}>ILKHOMZHON <br/>SIDIKOV</figcaption>
            </figure>
            <figure>
              <img src={umar} alt="Elnazar" />
                <figcaption className={style.name}>ELNAZAR <br/>ULANBEK ULUU</figcaption>
            </figure>
            <figure>
              <img src={umar} alt="Elnazar" />
                <figcaption className={style.name}>JASURBEK <br/>SADIEV</figcaption>
            </figure>
          </div>

              {/* FRONTEND DEVELOPMENT TEAM */}
          <h2 className={style.teams}>Frontend Development</h2>
          <div className="flex space-around justify-center mt-[70px] gap-[]">
            <figure>
              <img src={umar} alt="Umar" />
                <figcaption className={style.name}>UMAR <br/>NUROV</figcaption>
            </figure>
            <figure>
              <img src={umar} alt="Elnazar" />
                <figcaption className={style.name}>UMIDBEK <br/>ULMASOV</figcaption>
            </figure>
            <figure>
              <img src={umar} alt="Elnazar" />
                <figcaption className={style.name}>ABDULLAH<br/>NAZARI</figcaption>
            </figure>
            <figure>
              <img src={umar} alt="Umar" />
                <figcaption className={style.name}>MARZIA<br/>TABAN JAFARI</figcaption>
            </figure>
            <figure>
              <img src={umar} alt="Elnazar" />
                <figcaption className={style.name}>JASURBEK<br/>SADIEV</figcaption>
            </figure>
          </div>
          {/* SCIENTIFIC PYTHON TEAM */}
          <h2 className={style.teams}>Scientific Python & Math</h2>
          <div className="flex space-around justify-center mt-[70px] gap-[] mb-[500px]">
            <figure>
              <img src={umar} alt="Umar" />
                <figcaption className={style.name}>TARIQ <br/>AZIZ</figcaption>
            </figure>
            <figure>
              <img src={umar} alt="Elnazar" />
                <figcaption className={style.name}>AISHA <br/>TOICHIEVA</figcaption>
            </figure>
            <figure>
              <img src={umar} alt="Elnazar" />
                <figcaption className={style.name}>ATTIULLAH <br/>KHAN NIAZI</figcaption>
            </figure>
            <figure>
              <img src={umar} alt="Umar" />
                <figcaption className={style.name}>BENAZIR  <br/>TEMIRALIEVA</figcaption>
            </figure>
            <figure>
              <img src={umar} alt="Elnazar" />
                <figcaption className={style.name}>SHOKHRUKH <br/>DAVLATMAHMADOV</figcaption>
            </figure>
            <figure>
              <img src={umar} alt="Elnazar" />
                <figcaption className={style.name}>ELNAZAR <br/>ULANBEK ULUU</figcaption>
            </figure>
            <figure>
              <img src={umar} alt="Elnazar" />
                <figcaption className={style.name}>MUNIS <br/>SAIDRAHMONOV</figcaption>
            </figure>
            <figure>
              <img src={umar} alt="Elnazar" />
                <figcaption className={style.name}>ZAKIR <br/>HUSSAIN MURADI</figcaption>
            </figure>
          </div>
        </div>
    </div>
  )
}

export default AboutUs;