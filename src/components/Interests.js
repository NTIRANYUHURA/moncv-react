import React from "react"
import "./Interests.css"
import SportsTennisIcon from "@material-ui/icons/SportsTennis"
import CodeIcon from "@material-ui/icons/Code"
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun"
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks"
import DirectionsWalkIcon from "@material-ui/icons/DirectionsWalk"
import SportsEsportsIcon from "@material-ui/icons/SportsEsports"
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary"

function Interests() {
  return (
    <div className="skills">
      <h2 className="h2">Centres d'intérêts</h2>
      <ul>
        <li className = "user__info" >< CodeIcon /> Informatique </li>
        <li className = "user__info" >< DirectionsRunIcon/> Footing</li>
        <li className = "user__info" ><LibraryBooksIcon/>Lecture</li>
      </ul>
      <div className="interests">
        <SportsTennisIcon style={{ fontSize: 40 }} />
        <SportsEsportsIcon style={{ fontSize: 40 }} />
        <CodeIcon style={{ fontSize: 40 }} />
        <DirectionsWalkIcon style={{ fontSize: 40 }} />
        <LocalLibraryIcon style={{ fontSize: 40 }} />
      </div>
    </div>
  )
}

export default Interests