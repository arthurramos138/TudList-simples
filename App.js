import React, { Component } from "react";
import TodaLista from "./component/TodaLista";

class App extends Component{
  render(){
    return(
      <div>
        <h1>Lista de tarefas</h1>
          <TodaLista/>

      </div>


    )
  }
}

export default App
