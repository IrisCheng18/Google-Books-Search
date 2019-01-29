import React from "react";
// import "./style.css"

function Form({ children }) {
    return (
        <form className="uk-form-stacked">

            <div className="uk-margin">
                {children}
            </div>

        </form>
    );
}

export default Form;
