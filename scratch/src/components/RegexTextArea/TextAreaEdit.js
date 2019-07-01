import React from "react"

class TextAreaEdit extends React.Component {
    state = {
        formOpen: false
    }

    toggleForm = () => {
        this.setState({ formOpen: !this.state.formOpen })
    }

    render() {
        return (
            <div
                className={
                    this.state.formOpen ? "textarea-edit on" : "textarea-edit"
                }
            >
                <button className="toggle-form" onClick={this.toggleForm}>
                    Edit Text
                </button>
                <form onSubmit={this.props.submit}>
                    <textarea
                        type="text"
                        name="text"
                        value={this.props.value}
                        onChange={e => this.props.handleChanges(e)}
                        rows="12"
                        cols="80"
                    />
                    <button type="submit">Add changes</button>
                </form>
            </div>
        )
    }
}

export default TextAreaEdit
