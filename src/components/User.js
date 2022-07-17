import React from "react"
import "./User.css"
import HomeIcon from "@material-ui/icons/Home"
import PhoneIcon from "@material-ui/icons/Phone"
import MailIcon from "@material-ui/icons/Mail"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"


function User() {
  return (
    <div className="user">
      <img src="./images/avatar.jpg"className="user__avatar" alt="Floribert" />
      <h1 className="user__name">N.Floribert</h1>
      <p className="user__profession">Développeur Web</p>
      <div className="user__infos">
        <p className="user__info">
          <HomeIcon /> 72 rue du Marechal Leclerc 94410 Saint Maurice
        </p>
        <p className="user__info">
          <PhoneIcon /> <a href="tel:+33787654731">0787654731</a>
        </p>
        <p className="user__info">
          <MailIcon /> <a href="mailto:floribertnt@gmail.com">floribertnt@gmail.com</a>
        </p>
        <p className="user__info">
        <GitHubIcon /> <a href="https://github.com/NTIRANYUHURA?tab=repositories">GitHub</a>
        </p>
        <p className="user__info">
        <LinkedInIcon /> <a href="https://www.linkedin.com/in/floribert-ntiranyuhura-b80543146/">LinkedIn</a>
        </p>
      </div>
    </div>
  )
}

export default User