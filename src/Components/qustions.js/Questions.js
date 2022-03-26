import React from 'react';
import './Questions.css'

const Questions = () => {
    return (
        <div className='questions-container'>
            <h2>
                How React Works?
            </h2>
            <p>React is an open-source javaScript library that is used for building user interfaces specifically for single-page applications. React crates a virtual DOM in memory instead of manipulating the browser's DOM directly.Where it does all the necessary manipulating,before making the changes in the browser DOM.Then changes only what needs to be changed. </p>
            <h2>
                Props vs State?
            </h2>
            <p>props</p>
            <p>1.props are read-only. 2.props can not be modified. 3.prop are one way data bending. 4.we can change in child components. 5.pops make components reusable</p>
            <p>state</p>
            <p>1.state changes can be asynchronous. 2.state can be modified using this set state. 3.we can't change in child components. 4.we can't changed by parent component. 5.state can not make component reusable. </p>
        </div>
    );
};

export default Questions;