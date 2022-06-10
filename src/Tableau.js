import React from "react";

class Tableau extends React.Component {
    render() {
        return (
            <div className="col-12 d-flex flex-column">
                <div className="panelQuestion d-flex flex-column align-items-center">
                <h1 id="title">My Quizz</h1>
                <h2 id="question">{this.props.quizz[0].question}</h2>
                </div>
    
                <div className="panelAnswer d-flex flex-column">
                    {this.props.quizz[0].guesses.map(guess =>
                        <button className="btn btn-lg btn-primary text-light rounded my-1">{guess}</button>
                    )}
                {/* <button className="btn btn-lg btn-primary text-light rounded my-1">{this.props.quizz[0].guess[1]}</button>
                <button className="btn btn-lg btn-primary text-light rounded my-1">{this.props.quizz[0].guess[2]}</button>
                <button className="btn btn-lg btn-primary text-light rounded my-1">{this.props.quizz[0].guess[3]}</button> */}
                </div>
            </div>

        )
    }
}

export default Tableau;