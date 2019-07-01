import React from "react";

const TextAreaEdit = props => {

    const toggleForm =() => {

    }


    return (
        <div>
            <button className="toggle-form" onClick={toggleForm}>Edit Text</button>
            <form onSubmit={props.submit}>
                <textarea
                    type="text"
                    name="text"
                    value={props.value}
                    onChange={e => props.handleChanges(e)}
                    rows="12"
                    cols="120"
                />
                <button type="submit">Add changes</button>
            </form>
        </div>
    );
}

export default TextAreaEdit;