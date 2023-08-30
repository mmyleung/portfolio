import { NavLink } from "react-router-dom"

function NavBar() {

    return (
      <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <ul className="navbar-nav">
              <li className="nav-item"><NavLink to="/" className="nav-link active">Home</NavLink></li>
              <li className="nav-item dropdown">
                <NavLink to ="/techswitch-projects" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  TechSwitch Projects
                </NavLink>
                <ul className="dropdown-menu">
                  <li><NavLink to="/techswitch-projects" className="dropdown-item">See All Projects</NavLink></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><NavLink to="/techswitch-projects/bookish"className="dropdown-item">Bookish</NavLink></li>
                  <li><NavLink to="/techswitch-projects/busboard"className="dropdown-item">BusBoard</NavLink></li>
                  <li><NavLink to="/techswitch-projects/chessington"className="dropdown-item">Chessington</NavLink></li>
                  <li><NavLink to="/techswitch-projects/emailextraction"className="dropdown-item">EmailExtraction</NavLink></li>
                  <li><NavLink to="/techswitch-projects/fizzbuzzjs"className="dropdown-item">FizzBuzzJS</NavLink></li>
                  <li><NavLink to="/techswitch-projects/fizzbuzzcs"className="dropdown-item">FizzBuzzCS</NavLink></li>
                  <li><NavLink to="/techswitch-projects/gildedrose"className="dropdown-item">GildedRose</NavLink></li>
                  <li><NavLink to="/techswitch-projects/marsmission"className="dropdown-item">MarsMission</NavLink></li>
                  <li><NavLink to="/techswitch-projects/myfaceaccounts"className="dropdown-item">MyFaceAccounts</NavLink></li>
                  <li><NavLink to="/techswitch-projects/myfacemvp"className="dropdown-item">MyFaceMVP</NavLink></li>
                  <li><NavLink to="/techswitch-projects/myfacereact"className="dropdown-item">MyFaceReact</NavLink></li>
                  <li><NavLink to="/techswitch-projects/photoviewer"className="dropdown-item">PhotoViewer</NavLink></li>
                  <li><NavLink to="/techswitch-projects/shipit"className="dropdown-item">ShipIt</NavLink></li>
                  <li><NavLink to="/techswitch-projects/supportbank"className="dropdown-item">SupportBank</NavLink></li>

                </ul>
              </li>
              <li className="nav-item"><NavLink to ="/other-projects" className="nav-link">Other Projects</NavLink></li>
            </ul>
        </nav>
      </>
    )
  }
  
  export default NavBar
  