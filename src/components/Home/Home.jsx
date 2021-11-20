import React from 'react';
import { Container } from './Style';

function Home() {
  return (
      <Container>
          <section className="home">
            <h1> Home</h1>
          </section>
          <section className="center">
            <article className="boasVindas">
              <h2>Boas-vindas !</h2>
              <p> Me chamo Camila e aqui vou te apresentar o que vai ter nessa aplicacao.
                  Ao navegar pelo cabecalho do site eu vou te apresentar 
                  um pouco de mim, com minhas variadas musicas preferidas 
                  e as cidades que eu gostaria de visitar e/ou morar.
              </p>
              <h4> Ate mais!</h4>
            </article>
          </section>
          <footer>
            &copy; 2021, Camila DEV.
          </footer>
      </Container>
  );
}

export default Home;