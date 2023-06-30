import { styled } from "styled-components";
import {device} from './responsive'
const Container = styled.div`
width: 100%;
height: 100vh;

`;
const Nav = styled.div`
display: flex;
align-items: center;
position: absolute;
z-index: 1;
width: 100%;
height: 50px;
background: #fff;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
@media ${device.tablet}{
  display: none;
  }
`;
const NavItem = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  height: 100%;
  flex: 1;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .3s ease-in-out;
  &:hover{
    background: rgb(68, 68, 68);
    color: #fff;
  }
  @media ${device.tablet}{
  flex: auto;
  margin-bottom: 15px;
  }
`;
const Iframe = styled.iframe`
  width: 99.98%;
  height: 105vh;
  position: fixed;
  top: auto;
  @media ${device.tablet}{
    width: 100%;
    height: 107vh;
  }
`;
const Footer = styled.div`
  width: 100%;
  height: 65px;
  background: #fff;
  position: absolute;
  bottom: 0;
  z-index: 1;
  display: none;
  @media ${device.tablet}{
  display: block;
  }
`;
const Logo = styled.p`
  font-size: 2rem;
  position: absolute;
  z-index: 1;
  top: 60px;
  left: 10px;
  color: #fff;
  font-weight: 600;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-shadow: 1px 1px 1px gray;
  @media ${device.tablet}{
  top: 20px;
  }
`;

const Brand = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  bottom: -50px;
  color: #fff;
  font-size: 2rem;
  background: #1C1E20;
  width: 200px;
  height: 100px;
  display: flex;
  border-radius: 10px;
  justify-content: center;
  @media ${device.tablet}{
  height: 75px;
  }
`;
export {Container, Nav, NavItem, Iframe, Footer, Logo, Brand}