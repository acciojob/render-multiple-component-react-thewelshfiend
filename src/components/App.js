import React, { Component, useState } from "react";
import '../styles/App.css';
import Project from "./Project";

const data = [
    {
        name: 'Bankist',
        description: 'A simple banking application'
    },
    {
        name: 'Forkify',
        description: 'A recipe finder application'
    },
    {
        name: 'Natours',
        description: 'A travel booking application'
    },
    {
        name: 'Trillo',
        description: 'An event management application'
    },
    {
        name: 'Nexter',
        description: 'A real estate website'
    },
    {
        name: 'Piggy Bank',
        description: 'A budgeting application'
    },
];

const App = () => {
    return (
        <div id="main">
            <div className="ns-wrapper">
                {
                    data.map((project, index) => (
                        <Project key={index} name={project.name} description={project.description} />
                    ))
                }
            </div>
        </div>
    )
}

export default App;