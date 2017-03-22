import React from 'react'

export default function Tabs(props) {
  let baseClass = "auth-tab";

  return (
    <ul className="auth-tabs">
      {props.tabList.map((tab) => {
        return (
          <li key={tab.id}
            className={tab.id === props.activeTab ? baseClass : `${baseClass} inactive-tab` }
            onClick={props.changeTab.bind(this, tab)}
          > {tab.text}
          </li>
        )
      })}
    </ul>
  )
}
