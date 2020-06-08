import styled from 'styled-components';
import 'src/styles/_vars.scss';

const NavStyled = styled.nav`
  width: 100%;
  margin: 0 auto;
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  margin-bottom:5em;
  @media (max-width: 768px) {
    width: 100%
    display: flex;
    flex-direction: column;
  }
 .nav_title {
  padding-top: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: #FF385C;
  height:50px;
 }
 .nav_ul {
    display: flex;
    font-size: large;
    font-weight: 500;
    margin-right: 1em;
   @media (max-width: 315px) {
    display: flex;
    flex-direction: column;
  }
 }
 .selected-link {
  border-bottom: 1px solid #FF385C;
 }
 .nav_ul li {
  padding : 1rem
 }
 .nav_ul li:hover {
   background-color: #f7f7f7;
   border-radius: 10px;
   
 }
 .nav_content {
   display: flex
  }
  .nav_logo{
    position: relative;
    width:60%;
    top: -90px;
    left: -120px;
  }
 }
 .nav_button {
   display: flex
 }
`;


export default NavStyled;
