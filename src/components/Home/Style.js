import styled from 'styled-components';

export const Container = styled.div`
    background-color: beige;

    h1{
        margin: 0;
        background: -webkit-linear-gradient(red, blue);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        filter: drop-shadow(1px 1px grey);
    }

    .center{
        width: 100vw; height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        display: flex;
        flex-direction: column;
        
        text-align: center;
    }
    .boasVindas{
        width: 50vw;
        flex-wrap: wrap;
    }

    footer{
        text-align: center;
    }
`;
