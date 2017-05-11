import React from 'react'
import PropTypes from 'prop-types';

export default function Tabs(props) {
  let baseClass = "auth-tab";
  const { tabList, activeTab, changeTab } = props

  return (
    <ul className="auth-tabs">
      {tabList.map((tab) => {
        return (
          <li key={tab.id}
            className={tab.id === activeTab ? baseClass : `${baseClass} inactive-tab` }
            onClick={changeTab.bind(this, tab)}
          > {tab.text}
          </li>
        )
      })}
    </ul>
  )
}

Tabs.propTypes = {
  tabList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
    }),
  ).isRequired,
  activeTab: PropTypes.number.isRequired,
  changeTab: PropTypes.func.isRequired,
};
