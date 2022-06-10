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
                <button className="btn btn-lg btn-primary text-light rounded my-1">{this.props.quizz[0].ansA}</button>
                <button className="btn btn-lg btn-primary text-light rounded my-1">{this.props.quizz[0].ansB}</button>
                <button className="btn btn-lg btn-primary text-light rounded my-1">{this.props.quizz[0].ansC}</button>
                <button className="btn btn-lg btn-primary text-light rounded my-1">{this.props.quizz[0].ansD}</button>
                </div>
            </div>

        )
    }
}

export default Tableau;