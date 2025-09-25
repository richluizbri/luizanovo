import { useState } from 'react'
import './App.css'
import tenis1 from './assets/tenis-1.webp'
import tenis2 from './assets/tenis-2.webp'
import tenis3 from './assets/tenis-3.webp'
import logovans from './assets/logovans.png.webp'
import LogoInsta from './assets/instagram.svg'
import LogoDiscord from './assets/discord.svg'
import LogoWhats from './assets/whatsapp.svg'
import Slider1 from './assets/slider1.jpg'
import Slider2 from './assets/slider2.jpg'
import Slider3 from './assets/slider3.jpg'
import Slider4 from './assets/slider4.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'
import 'swiper/css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <header>
          {/* Aqui fica o SLIDER */}  
          <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={Slider1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slider2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slider3} alt="" />
            </SwiperSlide>
            <SwiperSlide> 
              <img src={Slider4} alt="" />
            </SwiperSlide>
          </Swiper>
        </header>
        <section className="produtos">
          
          {/* Card 1 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={tenis1} alt="" className="img-card"/>
              <h2>tênis sk8-low bordeaux</h2>
              <p className="desc">Um clássico do skate certificado. O estilo lendário, redefinido com recursos modernos para o skate atual.</p>
              <p className="classificacao"> <span>★ ★ ★ ★ ☆</span> (999)</p>
              <p className="preco">R$ 999,99</p>
              <p className="off">- 2%</p>
            </div>
          </a>

          {/* Card 2 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={tenis2} alt="" className="img-card"/>
              <h2>tênis hylane black white gum</h2>
              <p className="desc">Referências ao passado coexistem ao lado de detalhes de design elevados, como o Sidestripe em 3D com acabamento brilhante e logotipos bordados.</p>
              <p className="classificacao"> <span>★ ★ ★ ★ ☆</span> (469)</p>
              <p className="preco">R$ 1000,00</p>
              <p className="off">- 5%</p>
            </div>
          </a>

          {/* Card 3 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={tenis3} alt="" className="img-card"/>
              <h2>Tênis Super Lowpro 3-tone Tri Creme Brule</h2>
              <p className="desc">Versatilidade retrô. Inspirado na Coleção Serio dos anos 80 - combinando estilo retrô com um toque moderno. </p>
              <p className="classificacao"> <span>★ ★ ★ ★ ☆</span> (599)</p>
              <p className="preco">R$ 799,99</p>
              <p className="off">- 15%</p>
            </div>
          </a>

        </section>
        <section className="destaque">

          <iframe src="https://www.youtube.com/embed/RhKnkB0KQIo?autoplay=1&mute=1&controls=0&loop=1&playlist=RhKnkB0KQIomodestbranding=1&showinfo=0" frameborder="0" allow="autoplay; fullscreen"></iframe>

        </section>

        <footer>

          <img src={logovans} alt="" className="logo-footer" />

          <div className="social-footer">
            <div className="icon-social">
              <a href="https://www.instagram.com/pumabrasil/" target="_blank">
                <img src={LogoInsta} alt="" className="instagram" />
              </a>
            </div>
            <div className="icon-social">
              <a href="https://discord.com/invite/puma" target="_blank">
                <img src={LogoDiscord} alt="" className="discord" />
              </a>
            </div>
            <div className="icon-social">
              <a href="https://web.whatsapp.com/" target="_blank">
                <img src={LogoWhats} alt="" className="whatsapp" />
              </a>
            </div>
          </div>

          <p className="txt-footer">
            PUMA SPORTS LTDA CNPJ 05.406.034/0023-00 Inscrição Estadual 278.205.224.119 Endereço: Rua Passadena 104 - Parque Industrial, Cotia - SP CEP: 06715864.
          </p>

        </footer>
      </main>
    </>
  )
}

export default App
