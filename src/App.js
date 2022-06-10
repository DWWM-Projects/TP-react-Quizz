import React from "react";
import Tableau from "./Tableau";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      quizzs: [
        {id: 0, step: 1, question: "todo q1", ansA: "todo a1", ansB: "todo b1", ansC: "todo c1", ansD: "todo d1", answer: "todo rep1"},
        {id: 1, step: 2, question: "todo q2", ansA: "todo a2", ansB: "todo b2", ansC: "todo c2", ansD: "todo d2", answer: "todo rep2"},
        {id: 2, step: 3, question: "todo q3", ansA: "todo a3", ansB: "todo b3 a2", ansC: "todo c3", ansD: "todo d3 c2", answer: "todo rep3"},
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
