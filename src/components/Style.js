import styled from 'styled-components';

export const Estilo = styled.div`
    background-color: beige;
    width: 100vw; height: 100vh;

    h1{
        margin: 0;
        background-color: beige;
        background: -webkit-linear-gradient(red, blue);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        filter: drop-shadow(1px 1px grey);
    }

    .center{
        width: 100vw; height: 100vh;
        background-color: beige;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .boasVindas{
        width: 50vw;
        flex-wrap: wrap;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .imagens{
        height: 50vh;
    }
    h3{
        text-shadow: 1px 1px 5px black;
    }

    .videos{
        width: 620px; height: 300px;
        overflow: scroll;
        display: grid;
        grid-template-columns: auto auto;
        justify-content: center;
        align-items: center;
    }

    footer{
        text-align: center;
        background: white;
        background-image: linear-gradient(to top, white, beige);
    }
`;
