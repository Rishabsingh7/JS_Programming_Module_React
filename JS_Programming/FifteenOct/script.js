import { user } from "./data.js";
import React from "react";
import {createRoot} from "react-dom/client";
import "./style.css";

console.log(user.username);
console.log("Hello Programmer!!");

//const h2= <h2>Create React Element!!</h2>

function Card(key)
{
    console.log(key)
        return <div className="card" key={key} >
    <img src="https://img.freepik.com/free-photo/fuji-mountain-with-milky-way-night_335224-104.jpg?semt=ais_hybrid&w=740&q=80" />
   
    <div className="cardinfo">
    <h4>The AI Engineer Course 2026: Complete AI Engineer Bootcamp</h4>
    <p>School Of AI</p>
    <p><b>₹.500</b></p>
    </div>
</div>
}

const container=[Card(1),Card(2),Card(3),Card(4),Card(5),Card(6)];

const root=createRoot(document.querySelector('#root'))
root.render(<div className="container">{container}</div>)