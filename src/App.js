import React from "react";
import logo from "./img/narodowy_sympatyk_logo.png";
import sympatyk from "./img/sympatyk.png";
import button from "./img/google-play.png";
import "./App.css";

class App extends React.Component {
  toggle() {
    let toggledMenu = document.getElementById("navbar"),
      hamburger = document.getElementById("hamburger");
    if (toggledMenu.classList.contains("nav--active")) {
      toggledMenu.classList.remove("nav--active");
      hamburger.classList.remove("hamburger--active");
    } else {
      toggledMenu.classList.add("nav--active");
      hamburger.classList.add("hamburger--active");
    }
  }
  closing() {
    let toggledMenu = document.getElementById("navbar"),
      hamburger = document.getElementById("hamburger");
    toggledMenu.classList.remove("nav--active");
    hamburger.classList.remove("hamburger--active");
  }
  hide() {
    let toggledMenu = document.getElementById("navbar"),
    hamburger = document.getElementById("hamburger");
    if (toggledMenu.classList.contains("nav--active")) {
      toggledMenu.classList.remove("nav--active");
      hamburger.classList.remove("hamburger--active");
    } else {
      return
    }
  }
  measure() {
    let windowHeight = window.innerHeight,
    arrow = document.getElementById("arrow"),
    size = document.querySelector(".page").offsetHeight;
    if (windowHeight >= (size*1.2)) {
      arrow.style.display = "none";
      let stan = "none"
      return stan
    } else {
      arrow.style.display = "block";
      let stan = "block"
      return stan
    }
  }
  positioning () {
    let windowPosition = window.pageYOffset,
    windowHeight = window.innerHeight,
    arrow = document.getElementById("arrow"),
    body = document.body,
    html = document.documentElement,
    height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
    window.onscroll = function () {
      windowPosition = window.pageYOffset;
      return windowPosition
    }
    let hiding = function() {
      if ((windowPosition + windowHeight) > (height - 500)){
        arrow.style.visibility = "hidden";
      } else {
        arrow.style.visibility = "visible";
      }
    }
    window.addEventListener("scroll", hiding);
  }
  dissappear ()  {
    document.getElementById("arrow").style.visiblity = "hidden";
  }
  render() {
    return (
      <div className="App" onLoad={this.measure}>
        <section className="page" onLoad={this.positioning}>
          <header className="header">
            <div className="header__logo">
              <img src={logo} alt="falanga" className="logo" />
              <h1 className="header__text">Narodowy Sympatyk</h1>
            </div>
            <div className="hamburger" id="hamburger" onClick={this.toggle}>
              <div className="hamburger__line" id="l1" />
              <div className="hamburger__line" id="l2" />
              <div className="hamburger__line" id="l3" />
            </div>
            <ul className="nav" id="navbar" onClick={this.hide}>
              <li className="nav__item" onClick={this.closing}>
                <a className="nav__link" href="#blog">
                  Blog
                </a>
              </li>
              <li className="nav__item" onClick={this.closing}>
                <a
                  href="https://www.onr.com.pl/czym-jest-onr/"
                  className="nav__link"
                  target="_blank"
                >
                  O nas
                </a>
              </li>
              <li className="nav__item" onClick={this.closing}>
                <a href="#footer" className="nav__link">
                  Kontakt
                </a>
              </li>
            </ul>
          </header>
          <div className="main main--fixing">
            <div className="main__box--flex">
              <div className="main__describe">
                <p className="main__paragraph">Narodowy. Mobilny. Codzienny</p>
                <div className="main__button">
                  <img
                    src={button}
                    alt="Przycisk_google_play"
                    className="main__button--img"
                  />
                </div>
              </div>
            </div>
            <div className="main__photo">
              <img
                src={sympatyk}
                alt="narodowy_sympatyk_widok_mobilny"
                className="main__img"
              />
            </div>
          </div>
          <div className="arrow" id="arrow">
           <a href="#page2" onClick={this.dissappear}><div className="arrow__img"></div></a>
          </div>
        </section>
        <section className="page">
          <div className="main" id="page2">
            <div className="main__photo">
              <img
                src={sympatyk}
                alt="narodowy_sympatyk_widok_mobilny"
                className="main__img main__img--2"
              />
            </div>
            <div className="main__box">
              <h4 className="main__paragraph">
                Narodowy Sympatyk to platforma informacyjna zbudowana wokół
                szlachetnego świata patriotycznego zaangażowania.
              </h4>
              <p className="main__paragraph--small">
                Powstał, by udostępniać informacje o działalności narodowej,
                promować nowe inicjatywy i zachęcać do pogłębiania swojej
                wiedzy. Narodowy Sympatyk to krok do własnego zaangażowania,
                powzięcia sprawy w swoje ręce, to także ideowy przekaz dla
                wszystkich zainteresowanych radykalną zmianą swojego życia.
                Aplikacja jest mobilną sumą wydarzeń, artykułów, literatury i
                muzyki o tematyce patriotycznej.{" "}
              </p>
              <div className="main__download">Pobierz</div>
            </div>
          </div>
        </section>
        <footer id="footer" className="footer">
          <p className="footer__text">
            Kontakt:{" "}
            <a
              href="mailto:narodowy.sympatyk@onr.com.pl"
              className="footer__link"
            >
              narodowy.sympatyk@onr.com.pl
            </a>
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
