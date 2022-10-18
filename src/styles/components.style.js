//== import
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'
// pictures
import bckgrndImg from "../assets/15ba93cf2e4b62908f3bdfc2192b6b89.png";
import cursorImg2 from "../assets/icons8-cursor-54.svg";
import cursorImg from "../assets/326-3266876_kawaii-kitty-cat-caticorn-unicorn-please-vote-for-ConvertImage3.png";


// =================================
// ============ Global =============
// =================================

export const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    flex-direction: column;
    background-image: linear-gradient(to bottom, rgba(253, 143, 172, 0.3) 20%, rgba(255, 255, 255, 0.2) 70%), url(${bckgrndImg});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    height: 100vh;
    min-height: 100%;
    width: 100vw;
    margin: 0;
    padding: 0;

    cursor: url(${cursorImg}), auto;    
  }
`


// =================================
// ========= Modal style ===========
// =================================

export const Modal = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 2;
  top: 0;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #FFFFFF;
  margin-left: 40%;
  margin-right: 40%;
  border: 1px solid #E8EAE9;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`

export const ModalTitle = styled.label`
  margin-bottom: 0.6em;
  margin-top: 0.6em;
  font-size: 1.9em;
  color: #FFFFFF;
  text-shadow: -2px 1px 1px #fc3468, 1px -1px #ff93ac;
`

export const ModalInput = styled.input`
  margin: 0.6em 1.3em;
  height: 1.8em;
  width: 19em;
  border: solid 1px #d7ddda;
  border-radius: 6px;
  background: #E6FFEF;
  font-size: 1.1em; 
  color: #5b5b5b;

  &:focus {
      outline: none;
      border: solid 2px pink;
  }
`

export const ModalButton = styled.button`
  border: none;
  background-color: #FFFFFF;
  color: #FFFFFF;
  text-shadow: -1px 1px #9d94d6, 2px -1px #fc6da1;
  margin-top: 0.4em;
  margin-bottom: 0.9em;
  font-size: 1.3em;

  &:hover{
    text-shadow: -1px 2px #fc74b1, 1px -1px 1px #ebce15;
    cursor: url(${cursorImg2}), auto; 
  }
`


// =================================
// ========= Header style ==========
// =================================

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: flex-end;
  height: 4em;
  width: 100%;
  position: fixed;
  top: 0;
`

export const ToggleModalButton = styled.button`
  height: 1.5em;
  width: 4em; 
  background-color: #fe3d6f;
  color: #FFFFFF;
  text-shadow: -1.5px 2px #8837d5, 2px -1px #ffafd4;
  margin: 0.3em 0.5em;
  font-size: 1.5em;
  border: solid 1px #ffafd4;
  border-radius: 5px;

  &:hover{
    background-color: rgba(253, 143, 172, 0.5);
    border: solid 1px #fff000;
    text-shadow: -1.5px 1.5px #fc3468, 2px -1px #fff000;
    cursor: url(${cursorImg2}), auto; 
  }
`


// =================================
// ======= Messages style ==========
// =================================

export const MessagesContainer = styled.section`
  margin: 1em;
  margin-bottom: 10rem;
  display: block;
`

export const MessageBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  ${({ isMine }) => isMine && `
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  `}
`

export const Author = styled.div`
  text-transform:uppercase;
  font-size: 1.1em;
  color: #FFFFFF;
  text-shadow: -1px 1px #fc3468, 1px -0.5px 1px #ff93ac;
  margin-left: 0.5em;
  padding-top: 0.6em;
`

export const MessageBubble = styled.div`
  background-color: #FFFFFF;
  padding: 0.5em 1em;
  margin: 0.1em 0em;
  color: #5b5b5b;
  font-size: 1em;
  border: solid 2px #E8EAE9;
  border-radius: 8px;
  font-family: arial;
  `


// =================================
// ======== Msg form style =========
// =================================

export const Footer = styled.footer`
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    height: 8%;
    background: #E6FFEF;
    border: solid 2px #E8EAE9;
    border-radius: 12px;
    margin: 0.9em 0.8em;
    padding: 1em;       
`

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`

export const Button = styled.button`
    background: #E8EAE9;
    border: solid 1px pink;
    width: 5em;
    height: 1.8em;
    color: #FFFFFF;
    font-size: 1.3em;
    text-shadow: -1px 1px #CC9F9F, 1px -1px #ff93ac;
    border-radius: 3px;
    margin-left: 1em;
    padding: 0 0em;

    &:hover {
        color: #ff93ac;
        text-shadow: -1px 1px #FFFFFF, 1px -0.5px #CC9F9F;
        cursor: url(${cursorImg2}), auto; 
    }
`

export const FormInput = styled.textarea`
    width: 100%;
    height: 2.5em;
    border: solid 1px #E8EAE9;
    border-radius: 6px;
    background: #FFFFFF;
    margin: 0.1em;
    font-size: 1.2em; 
    color: #e794b7;
    padding: 0.4em;
    font-family: arial;

    &:focus {
        outline: none;
        border: solid 1px pink;
    }
`

