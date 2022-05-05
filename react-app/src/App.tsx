import React from "react";
import "./assets/App.scss";
import logo from "./assets/logo.svg";
import Nav from "./components/Nav";

const App = () => {
    return (
        <div className="App">
            <Nav />
            <div className="container">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </div>
        </div>
    );
};

export default App;
