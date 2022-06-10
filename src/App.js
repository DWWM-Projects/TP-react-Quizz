import React from "react";
import Tableau from "./Tableau";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      quizzs: [
        {id: 0, step: 1, question: "todo q1", guesses: [1, 2, 3, 4], answer: "todo rep1"},
        {id: 1, step: 2, question: "todo q2", guesses: [1, 2, 3, 4], answer: "todo rep2"},
        {id: 2, step: 3, question: "todo q3", guesses: [1, 2, 3, 4], answer: "todo rep3"},
      ]
    }
  }

  render() {
    return (
      <div>
        <div id="panel">
          <span id="step">{this.state.quizzs[0].step}</span>
        </div>
        <div className="container d-flex justify-content-center align-content-center">
  
          <Tableau quizz={this.state.quizzs} />
  
        </div>
      </div>

    );
  }
}

export default App;
