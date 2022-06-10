

function App() {
  return (
    <div>
      <div className="container">

        <div className="d-flex flex-column">
          <div className="panelQuestion d-flex flex-column align-items-center">
            <h1 id="title">My Quizz</h1>
            <h2 id="question">Question X</h2>
          </div>

          <div className="panelAnswer d-flex flex-column">
            <button className="btn btn-lg btn-primary text-light rounded my-1">Answer x</button>
            <button className="btn btn-lg btn-primary text-light rounded my-1">Answer x</button>
            <button className="btn btn-lg btn-primary text-light rounded my-1">Answer x</button>
            <button className="btn btn-lg btn-primary text-light rounded my-1">Answer x</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
