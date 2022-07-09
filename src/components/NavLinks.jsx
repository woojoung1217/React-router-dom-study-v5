import { NavLink } from "react-router-dom";


const activeStyle ={color : 'green'}

export default function NavLinks() {
  return (
    <ul>
      <li>
        <NavLink to="/" exact activeStyle={activeStyle}>HOME</NavLink>
      </li>
      <li>
        <NavLink to="/profile">Profile</NavLink>
      </li>
      <li>
        <NavLink to="/profile/1">profile/1</NavLink>
      </li>
      <li>
        <NavLink to="/about" activeStyle={activeStyle} isActive={(match, location)=>{
          return location.search === "";

        }}>어바웃</NavLink>
      </li>
      <li>
        <NavLink to="/about?name=mark" activeStyle={activeStyle} isActive={(match,location)=>{
          return location.search ==="";
        }}>about?name= mark</NavLink>
      </li>
    </ul>
  );
}
