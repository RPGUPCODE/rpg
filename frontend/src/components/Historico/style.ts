import styled from "styled-components";

export default styled.aside`
    position: fixed;
    // border: 1px solid grey
    // border-radius: 10px
    width: 25vw;
    height: 75vh;
    top: 17vh;
    padding: 1%;
    overflow-y: scroll;

    h2{
        text-align: center;
    }

    ul{
        display: flex;
        flex-direction: column-reverse;
    }

    ul > li{
        margin-left: -13%;
        padding: 0.6rem;
        border-radius: 10px;
        list-style: none;
        border: 1px solid #ccc;
        margin-bottom: 4.5%;
    }

    .historicoFimJogo{
        background-color: #cc4444;
        color: white;
    }

    .historicoInicioJogo{
        background-color: #44cc44;
        color: white;
    }
`