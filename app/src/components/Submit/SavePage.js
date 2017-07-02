import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import ProgressBar from '../ProgressBar'

class SavePage extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      comments: '',
      name: (props.user && props.user.displayName) || '',
      email: (props.user && props.user.email) || '',
    }
  }

  handleSubmit = (userId, data) => {
    this.props.onSubmit(userId, data)
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const { departments, funds, user } = this.props;

    const departmentArray = Object.keys(departments).map(key => departments[key])

    const departmentsArray = departmentArray.map((item) => {
      return {
        item: item.name,
        amount: item.amount,
        explain: item.explainYourSpending,
      }
    });

    const userData = {
      comments: this.state.comments,
      name: this.state.name,
      email: this.state.email,
      userBudget: departmentsArray,
      totalBudget: funds.sumOfServiceSpending,
    }

    return (
      <div className="Submit__save-body">
        <h3 className="Submit__title">Save & Submit</h3>

        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" placeholder="Name" onChange={this.handleChange} value={this.state.name} />

        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" placeholder="Email" onChange={this.handleChange} value={this.state.email} />

        <label htmlFor="comments">Comments</label>
        <textarea type="textarea" name="comments" id="comments" placeholder="Comments" onChange={this.handleChange} value={this.state.comments} />

        <div className="Submit__review-buttons">
          <Link to="/submit/review" className="Service__edit-button">
            Revise
          </Link>
          <Link to="/done" className="Service__done-button" onClick={this.handleSubmit.bind(this, user.uid, userData)}>
            Submit
          </Link>
        </div>

        <ProgressBar x={2} y={2} />
      </div>
    )
  }

}

SavePage.propTypes = {
  funds: PropTypes.shape({
    sumOfServiceSpending: PropTypes.number.isRequired,
    servicesSumPercentChange: PropTypes.number.isRequired,
  }).isRequired,
  departments: PropTypes.arrayOf(PropTypes.object),
  onSubmit: PropTypes.func.isRequired,
  user: PropTypes.shape({
    email: PropTypes.string,
    displayName: PropTypes.string,
  }),
};

export default SavePage;
