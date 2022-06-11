import React from "react";
import Tableau from "./Tableau";
import axios from "axios";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      quizzs: []
    }
  }

  componentDidMount() {
    axios.get("http://localhost:3001/quizzs").then(response => this.setState({ quizzs: response.data }));
  }

  render() {
    return (
      <div className="card">

        <div className="container d-flex justify-content-center align-content-center">
  
          {this.state.quizzs.map(quizz => <Tableau quizz={quizz} key={quizz.id}/>)}
  
        </div>
      </div>

    );
  }
}

export default App;
