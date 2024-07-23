import React, { useState } from "react";
import "./App.css";

function App() {
    const ESCAPE_KEY = 27;
    const ENTER_KEY = 13;

    const [value, setValue] = useState("");
    const onChange = (event) => {
        setValue(event.target.value);
    };

    const erase = () => {
        setValue("");
    };

    const onKeyDown = (event) => {
        if (event.which === ENTER_KEY) {
            erase();
        } else if (event.which === ESCAPE_KEY) {
            erase();
        }
    };

    return (
        <section id="app" className="container">
            <header>
                <h1 className="title">Lista de Tarefas</h1>
            </header>
            <section className="main">
                <input
                    className="new-todo"
                    placeholder="O que você precisa fazer?"
                    value={value}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                />
            </section>
        </section>
    );
}

export default App;
