import styled from "styled-components";

export default styled.aside`
    position: fixed;
    background-color: #c2b226;
    // border: 1px solid grey
    // border-radius: 10px
    width: 25vw;
    height: 48vh;
    top: 17vh;
    right: 0;
    padding: 1%;
    overflow-y: scroll;
    h2{
        text-align: center;
    }

    ul{
        display: flex;
        flex-direction: column;
    }

    ul >li{
        margin-left: -13%;
        padding: 0.6rem;
        border-radius: 10px;
        list-style: none;
        border: 1px solid #ccc;
        margin-bottom: 4.5%;
    }
`