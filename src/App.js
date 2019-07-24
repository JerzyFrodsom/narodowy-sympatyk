import React from "react";
import logo from "./img/narodowy_sympatyk_logo.png";
import sympatyk from "./img/sympatyk.png";
import button from "./img/google-play.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <section className="page">
        <header className="header">
          <h1 className="header__text">Narodowy Sympatyk</h1>
        </header>
        <div className="main">
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
              class="main__img"
            />
          </div>
        </div>
      </section>
      <section className="page">
        <div className="main">
          <div className="main__photo"><img src={sympatyk} alt="narodowy_sympatyk_widok_mobilny" class="main__img"/></div>
          <div className="main__box">
            <h4 className="main__paragraph">Narodowy Sympatyk to platforma informacyjna zbudowana wokół szlachetnego świata patriotycznego zaangażowania.</h4>
            <p className="main__paragraph--small">Powstał, by udostępniać informacje o działalności narodowej, promować nowe inicjatywy i zachęcać do pogłębiania swojej wiedzy. Narodowy Sympatyk to krok do własnego zaangażowania, powzięcia sprawy w swoje ręce, to także ideowy przekaz dla wszystkich zainteresowanych radykalną zmianą swojego życia. Aplikacja jest mobilną sumą wydarzeń, artykułów, literatury i muzyki o tematyce patriotycznej. </p>
            <div className="main__download">Pobierz</div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;
