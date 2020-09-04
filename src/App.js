import React from "react";
import "./styles.css";

export default class App extends React.Component {
  state = {
    clients: [
      { id: 1, nom: "Edvens" },
      { id: 2, nom: "Andy" },
      { id: 3, nom: "Rolin" }
    ]
  };

  render() {
    const title = "liste des clients";
    const elements = this.state.clients.map( client => (
      <li>{client.nom} <button>X</button></li>
    ));
    return (
      <div>
        <h1> {title} </h1>
        <ul>{elements}</ul>
        <form>
          <input type="text" placeholder="Ajouter un client" />
          <button>Confirmer</button>
        </form>
      </div>
    );
  }
}
