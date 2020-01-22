import { Link } from "gatsby"
import React from "react"
import banner from '../images/banner.jpg'
import logo from '../images/logo.png'



const Header = () => (
  <header>
  <section className="setMaxWidth">
    <div className="logoSection">
    <img src={logo}  alt="Assassin's Creed Brotherhood available now." id="logo"/>
    <img src={banner}  alt="Assassin's Creed Brotherhood available now." id="banner"/>
    </div>
    <nav className="linkSection d-flex">
    <a className="navItem" href="">game info</a>
    <p className="spacer">|</p>
    <a className="navItem" href="">assassins creed universe</a>
    <p className="spacer">|</p>
    <a className="navItem" href="">uplay</a>
    <p className="spacer">|</p>
    <a className="navItem" href="">forums</a>
    <p className="spacer">|</p>
    <a className="navItem" href="">register for updates</a>
    <p className="spacer">|</p>
    <a className="navItem" href="">preorder</a>
    </nav>
  </section>
  </header>
)

export default Header
