import React from 'react';

import regexArray from "../../data/regexArray"
import SideBarRow from "./SideBarRow"

export default class SideBar extends React.Component {
  render() {
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
