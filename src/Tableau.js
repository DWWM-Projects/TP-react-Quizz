import React from "react";

class Tableau extends React.Component {
    render() {
        return (


            <div className="col-12 d-flex flex-column justify-content-center align-items-center">
                <div id="panel">
                    <span id="step">Question {this.props.quizz.step} sur 3</span>
                </div>
                <div className="panelQuestion d-flex flex-column align-items-center">
                <h1 id="title">My Quizz</h1>
                <h2 id="question">{this.props.quizz.question}</h2>
            </div>
    
            <div className="col-6 panelAnswer d-flex flex-column">
                {this.props.quizz.guesses.map(guess => 
                     <button className="btn btn-lg btn-primary text-light rounded my-1 rounded">{guess}</button> 
                )}
                </div>
            </div>

        )
    }
}

export default Tableau;