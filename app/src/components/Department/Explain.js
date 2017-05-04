import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Navigation from '../Navigation'
import departments from '../../data/departments.js'

class Explain extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault()
    const serviceId = this.props.match.params.service_id
    const departmentId = this.props.match.params.id
    const department = departments[Number(departmentId) - 1]

    this.props.onSubmit(departmentId, this.state.value)
    this.props.history.push(`/service/${serviceId}/department/${departmentId}`)
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  render() {

    return (
      <div style={{height: '100%'}}>
        <Navigation {...this.props} showClose="true" centerText="Explain Your Spending" />

        <div className="Explain">
          <form onSubmit={this.handleSubmit}>
            <div className="Explain__body">
              <h1 className="Explain__title">Write a little something about your budget spending</h1>
              <textarea type="textarea" className="Explain__textarea"
                onChange={this.handleChange}
                placeholder="Why did you increase or decrease this deparment's budget?"/>
            </div>
            <button type="submit" className="Explain__close-button">
              Close
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default Explain
