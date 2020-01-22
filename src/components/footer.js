import { Link } from "gatsby"
import React from "react"
import ubisoft from '../images/ubisoft.png'
import xbox from '../images/xbox.png'
import ps3 from '../images/ps3.png'
import pc from '../images/pc.png'
import esrb from '../images/esrb.png'
import m from '../images/m.png'


const Header = () => (
  <header>
  <section className="setMaxWidth">
    <div className="footerLogos d-flex">
    <img src={ubisoft}  alt="Ubisoft logo" />
    <img src={xbox}  alt="Xbox logo" className="shortLogo"/>
    <img src={ps3}  alt="Ps3 logo" className="shortLogo"/>
    <img src={pc}  alt="PC logo" />
    </div>
    <div className="footerESRB d-flex">
    <img src={esrb}  alt="ESRB Privacy certified" id="esrb" />
      <div className="d-flex">
      <img src={m}  alt="Rated M for Mature."/><ul><li>Blood</li><li>Language</li><li>Mild sexual themes</li><li>Violence</li></ul>
      </div>
    </div>
    <div className="footerTrademark">
    <p>© 2011 Ubisoft Entertainment. All Rights Reserved. Assassin’s Creed, Ubisoft, and the Ubisoft logo are trademarks of Ubisoft Entertainment in the US and/or other countries. “PlayStation” and the “PS” Family logo are registered trademarks and “PS3” and the PlayStation Network logo are trademarks of Sony Computer Entertainment Inc. KINECT, Xbox, Xbox 360, Xbox LIVE, and the Xbox logos are trademarks of the Microsoft group of companies and are used under license from Microsoft. Software platform logo (TM and ©) EMA 2006.</p>
    </div>
  </section>
  </header>
)

export default Header
