import React from 'react';
import { Estilo} from '../Style'

function Musica() {
  return (
      <Estilo>
          <section className="home">
            <h1> Musica</h1>
          </section>
          <section className="center">
            <article className="boasVindas">
            <h2>Boas-vindas !</h2>
              <p> Aqui esta as musicas que gosto e que ando ouvindo recentemente.</p>
              <div className="videos">
                <iframe width="300" height="300" src="https://www.youtube.com/embed/_xJUCsyMQes?start=42" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe width="300" height="300" src="https://www.youtube.com/embed/xAM51Ovpr9M?start=30" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe width="300" height="300" src="https://www.youtube.com/embed/FXRfr5-n4bY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe width="300" height="300" src="https://www.youtube.com/embed/H1DEczvTjgE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe width="300" height="300" src="https://www.youtube.com/embed/HhoATZ1Imtw?start=6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe width="300" height="300" src="https://www.youtube.com/embed/AuNzvKvWllo?start=6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
               </div>
            </article>
          </section>
          <footer>
            &copy; 2021, Camila DEV.
          </footer>
      </Estilo>
  );
}

export default Musica;