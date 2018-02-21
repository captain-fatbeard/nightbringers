import React, { Component } from 'react';
import logo from './../images/logo.svg';

class Masthead extends Component {
  render() {
    return (
        <section id="masthead">
            <img className="center" src={logo} alt="nightbringers" />
        </section>
    );
  }
}
//                 <p>Fuck the Alliance,<br />fucking die you emo cocksuckers... test</p>
export default Masthead;