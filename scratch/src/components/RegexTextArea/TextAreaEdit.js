import React from "react"

class TextAreaEdit extends React.Component {
    state = {
        formOpen: false,
    }

    toggleForm = () => {
        this.setState({ formOpen: !this.state.formOpen, })
    }

    submit = e => {
        e.preventDefault();
        this.props.handleChanges(e);
        this.toggleForm();
    }

    render() {
        return (
            <div
                className={
                    this.state.formOpen ? "textarea-edit on" : "textarea-edit"
                }
            >
                <form onSubmit={this.submit}>
                    <textarea
                        type="text"
                        name="text"
                        value={this.props.value}
                        onChange={e => this.props.handleChanges(e)}
                        rows="12"
                        cols="80"
                    />
                </form>
            </div>
        )
    }
}

export default TextAreaEdit
