import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {

constructor(){
super();

this.state ={

  isNavOpen : false 
}
}
buttonClicked(){

 this.setState({

  isNavOpen: !this.state.isNavOpen
 })

}




 render () {
  return (
    <header>
      <nav className="navbar navbar-expand-lg justify-content-between">
        <a className="navbar-brand" href="#"> egitim budur</a>
 
        <button className="navbar-toggler" type="button" onClick={this.buttonClicked.bind(this)}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse" style={{display: this.state.isNavOpen ? "block": "none"}}>
          <ul className="navbar-nav  mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" activeClassName="active" className="nav-link">ANA SAYFA</Link>
            </li>
            <li className="nav-item">
              <Link to="/" activeClassName="active" className="nav-link">ILETISIM</Link>
            </li>
            <li className="nav-item">
              <Link to="/" activeClassName="active" className="nav-link">HAKKIMIZDA</Link>
            </li>
          </ul>

        </div>
      </nav>
    </header>
  )





 }





}




export default Header;