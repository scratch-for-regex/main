import React from 'react';
import { connect } from 'react-redux';

import regexArray from "../../data/regexArray"
import SideBarRow from "./SideBarRow"
import { setRegexes } from '../actions';
class SideBar extends React.Component {
  static propTypes = {
    setRegexes: PropTypes.func.isRequired
  }
  render() {
    this.props.setRegexes(regexArray.map((d) => (d.regex, d.summary, d.description, false)))
    return (
      <div>
        <ul>
        {regexArray.map((d) => (
          <li key={d.regex}>
            <SideBarRow
              regex = {d.regex}
              summary = {d.summary}
              description = {d.description}
              editable = {false}
            />
          </li>
        ))}
        </ul>
      </div>
    )
  }
}

export default connect(
  dispatch => ({
    setRegexes: () => dispatch(setRegexes),
  }),
)(SideBar);
