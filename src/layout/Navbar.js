import React from 'react'
import styled from 'styled-components'
import {MdContactPhone, MdHome} from 'react-icons/md'
import {GiShatteredGlass} from 'react-icons/gi'
import {GoCalendar} from 'react-icons/go'
import {Link} from 'gatsby'

const links = [
  {
    id: 1,
    path: "/",
    icon: <MdHome size='50px' />,
    ariaLabel: 'Home Page'
  },
  {
    id: 2,
    path: "/drinks",
    icon: <GiShatteredGlass size='50px' />,
    ariaLabel: 'Go to drinks menu page'
  },
  {
    id: 3,
    path: "/events",
    icon: <GoCalendar size='50px' />,
    ariaLabel: 'Go to events page'
  },
  {
    id: 4,
    path: "/contact",
    icon: <MdContactPhone size='50px' style={{color: '#233740'}} />,
    ariaLabel: 'Go to contact page'
  }
]
const Navbar = () => {
  return (
    <Wrap>
      <div className="btnBox">
        <button className="close"></button>
        <button className="open"></button>
      </div>
      <nav>
        <ul>
          {links.map(item => (
            <li key={item.id}><Link to={item.path} ariaLabel={item.ariaLabel}>{item.icon}</Link></li>
          ))}
        </ul>
      </nav>
    </Wrap>
  )
}

const Wrap = styled.div`
position: fixed;
top: 0;
left: 0;
z-index: 1;
width: 17.5vw;
height: 100vh;
padding: 0px 0px;

nav {
  width: 0%;
  height: 100%;
  background: rgba(0, 0, 0, 1);
}
.btnBox {
  width: 0%;
  height: 50px;
  background: rgba(0, 0, 0, 1);
  margin: 0 auto;
}
ul {
  height: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
li {
  margin-top: -50px;
}
a {
  color: white;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  transition: 0.3s ease border;
}
a:hover {
  color: lightskyblue;
  border-bottom: 2px solid white;
}
button {
  font-size: 2.25rem;
  color: white;
  background: transparent;
  z-index: 4;
  border: none;
  padding: 5px 10px;
}
`

export default Navbar
