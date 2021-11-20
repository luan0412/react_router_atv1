import React from 'react';
import { Estilo } from '../Style';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';


function Cidade() {
  return (
      <Estilo>
        <section className="home">
          <h1> Cidade </h1>
        </section>
        <section className="center">
          <article className="boasVindas">
            <h2>Boas-vindas !</h2>
            <p> Aqui esta as cidades que eu gostaria de conhecer, em especial, Seul. A cidade que eu gostaria de morar.
            </p>
            <h4> Veja abaixo.</h4>

            <article>
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="imagens"
                      src="https://ak.picdn.net/shutterstock/videos/20359792/thumb/1.jpg"
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3>Seoul, Coreia do Sul.</h3>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="imagens"
                      src="https://www.10wallpaper.com/wallpaper/1366x768/1605/London_Big_Ben_Westminster_Abbey_Bus-Cities_Photo_HD_Wallpaper_1366x768.jpg"
                      alt="Second slide"
                    />

                    <Carousel.Caption>
                      <h3>Londres, Inglaterra.</h3>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="imagens"
                      src="https://p4.wallpaperbetter.com/wallpaper/606/494/324/cityscapes-toronto-wallpaper-preview.jpg"
                      alt="Third slide"
                    />
                    <Carousel.Caption>
                      <h3>Toronto, Canada.</h3>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>  
            
            
            </article> 


          </article>
        </section>
        <footer>
          &copy; 2021, Camila DEV.
        </footer>
      </Estilo>
    );
      
}

export default Cidade;