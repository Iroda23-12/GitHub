
import { LuBookMarked } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa";
import { RiErrorWarningLine } from "react-icons/ri";
import { FaHandshakeSimple } from "react-icons/fa6";
import { FaLaptop } from "react-icons/fa";
import { Ri24HoursLine } from "react-icons/ri";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { IoChatbubblesOutline } from "react-icons/io5";
import { FaMapMarkedAlt } from "react-icons/fa";
import { RiMapPinRangeFill } from "react-icons/ri";
import { IoShieldOutline } from "react-icons/io5";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import './aloqa.css'



const Aloqa = () => {
  return (

    <>
           <header>
        
        <div className="im">
          <img src="./img.png" alt="" />
          <div>
            <ul>
              <li>Katalog</li>
              <li>Aksiyalar</li>
              <li>Sodiqlik kartasi</li>
              <li>Yangiliklar</li>
              <li>Do'konlar</li>
              <li>Aloqa</li>
              <li>Makroda ishlash</li>
            </ul>
          </div>
          <select style={{ marginRight: '100px', border: '1px solid white', backgroundColor: "rgb(67, 176, 42)", padding: '3px ', color: "white", borderRadius: "5px" }}>
            <option >Uz</option>
            <option>Ru</option>
          </select>
        </div>
      </header>

      <main>
        <div className="orq">
          <h1 style={{ fontFamily: "sans-serif" }}><LuBookMarked style={{ color: "rgb(67, 176, 42)" }} />Aloqa</h1>
          <h2>orqaga <FaArrowRight />
          </h2>
        </div>
        <div className="payme">
          <div className="hi">

            <h1> <RiErrorWarningLine style={{fontSize:"40px", marginRight:"5px"}} /> Ta'mintochilar uchun ma'lumot</h1>
            <h1> <FaHandshakeSimple style={{fontSize:"40px", marginRight:"5px"}}  /> Ulgurji mijozlar uchun pul o‘tkazish bo‘yicha ma’lumot</h1>
            <h1><FaLaptop style={{fontSize:"40px", marginRight:"5px"}}  /> Siz savdo uskunalari ta'minotchisimisiz? Bizga makro.tender@msmarket.uz manziliga yozing</h1>
            <h1><Ri24HoursLine style={{fontSize:"40px", marginRight:"5px"}}  /> Qaynoq liniya telefon raqami: +99871 205 1 205 (24/7)</h1>
            <h1> <MdOutlineMarkEmailUnread style={{fontSize:"40px", marginRight:"5px"}}  />E-mail: info@msmarket.uz</h1>
            <h1><IoChatbubblesOutline style={{fontSize:"40px", marginRight:"5px"}}  />Telegram’da murojaat qiling: @Makrosupermarket ( 9:00 dan 18:00 gacha) </h1>
            <h1><FaMapMarkedAlt style={{fontSize:"40px", marginRight:"5px"}}  />Bosh ofis manzili: Toshkent sh., Yashnobod tumani, koʻch. Magtimguli 134</h1>
            <h1><RiMapPinRangeFill style={{fontSize:"40px", marginRight:"5px"}}  />  Do'kon manzillari</h1>
            <h1><IoShieldOutline style={{fontSize:"40px", marginRight:"5px"}}  />Iste’molchilar uchun oziq-ovqat mahsulotlari xavfsizligi qoidalari</h1>
          </div>
          <div  >
            <img src="https://makromarket.uz/banner.jpg" alt="" />
          </div>
        </div>
          <h1 className="tarma">Bizning ijtimoiy tarmoqlarimiz:</h1>
        <div className="biz">
          <h1><FaTelegram   style={{fontSize:"30px"}}/>Telegram</h1>
          <h1> <FaInstagram style={{fontSize:"30px"}} /> Instagram</h1>
          <h1><FaFacebook style={{fontSize:"30px"}} /> Facebook</h1>
        </div>
      </main>


      <footer>
        <div>
          <img src="https://makromarket.uz/green%20logo.svg" alt="" />
        </div>
        <div className="last">
          <div style={{textAlign:"center"}}>Ilovamizni yuklab oling</div>
          <div style={{display:"flex"}}>
          <img src="https://makromarket.uz/ads%20appstore.svg" alt="" />
          <img src="https://makromarket.uz/ads%20googleplay.svg" alt="" />
          </div>
          <div style={{textAlign:"center"}}>Design & Dev by  AbexLab</div>
        </div>
        <div className="icon">
        <FaYoutube style={{marginRight:"10px"}} />
        <FaInstagram style={{marginRight:"10px"}}  /> 
        <FaTelegram style={{marginRight:"10px"}}  />
        <FaFacebook style={{marginRight:"10px"}}  /> 

        </div>
      </footer>
    
    </>
  )
}

export default Aloqa