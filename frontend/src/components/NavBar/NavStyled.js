import styled from 'styled-components';

const NavStyled = styled.nav`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  margin-bottom:5em;

 .nav_title {
  padding-top: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: #FF385C
 }
 .nav_ul {
   display: flex;
   padding-top: 0.5rem;
 }
 .selected {
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

 .nav_button {
   display: flex
 }

`;


export default NavStyled;
