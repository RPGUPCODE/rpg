import styled from "styled-components";

export default styled.header`
    position: fixed;
    background-color: lightblue;
    border: 1px solid darkgrey;
    width: 100vw;
    height: 16vh;
    top: 0vh;
    display: flex;
    align-items: center;
    padding-left: 3%;

    ul{
        display: flex;
        flex-direction: row;
        list-style: none;
    }

    ul > li{
        word-wrap: normal;
        margin-right: 2%;
    }
`;