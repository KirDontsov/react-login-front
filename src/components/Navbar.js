import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class Navbar extends Component {
  logOut(e) {
    e.preventDefault();
    localStorage.removeItem("usertoken");
    this.props.history.push(`/`);
  }
  // eslint-disable-next-line react/require-render-return
  render() {
    const loginRegLink = (
      <ul className="navbar nav">
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Войти
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Регистрация
          </Link>
        </li>
      </ul>
    );

    const userLink = (
      <ul className="navbar nav">
        <li className="nav-item">
          <Link to="/profile" className="nav-link">
            Профиль
          </Link>
        </li>
        <li className="nav-item">
          <a href="/" onClick={this.logOut.bind(this)} className="nav-link">
            Выйти
          </a>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark raunded">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar1"
          aria-controls="navbar1"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          id="navbar1"
          className="collapse navbar-collapse justify-content-md-center"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Главная
              </Link>
            </li>
          </ul>
          {localStorage.usertoken ? userLink : loginRegLink}
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
