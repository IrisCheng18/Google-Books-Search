import React from "react";
// import "./style.css"

function Card(props) {
    return (
        <div className="uk-card uk-card-secondary uk-margin">
            <div className="uk-card uk-card-secondary uk-card-body">
                <h3 className="uk-card-title">
                    {props.title}
                    <button className="uk-button uk-button-default uk-button-small uk-float-right">Small button</button>
                    <button className="uk-button uk-button-default uk-button-small uk-float-right">Small button</button>
                </h3>


                <p>Written by {props.author}</p>
            </div>
        </div>
    );
}

export default Card;