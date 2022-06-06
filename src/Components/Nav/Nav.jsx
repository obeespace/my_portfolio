import React from 'react'
import "./nav.css"
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {AiOutlineBook} from "react-icons/ai"
import {RiCustomerService2Line} from "react-icons/ri"
import {TiContacts} from "react-icons/ti"

const Nav = () => {
  var [changeactive, setChangeactive] = React.useState("#")
  return (
    <nav>
      <a href='' className={changeactive === "#"? "active": ""}><AiOutlineHome /></a>
      <a href='#about' onClick={function(){setChangeactive("#about")}} className={changeactive === "#about"? "active": ""}><AiOutlineUser /></a>
      <a href='#experience' onClick={function(){setChangeactive("#experience")}} className={changeactive === "#experience"? "active": ""}><AiOutlineBook /></a>
      <a href='#services' onClick={function(){setChangeactive("#services")}} className={changeactive === "#"? "services": ""}><RiCustomerService2Line /></a>
      <a href='#contact' onClick={function(){setChangeactive("#contact")}} className={changeactive === "#"? "contact": ""}><TiContacts /></a>
    </nav>
  )
}

export default Nav