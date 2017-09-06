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
      name: (props.user && props.user.displayName) || '',
      email: (props.user && props.user.email) || '',
      student: 'false',
      schoolName: '',
      zipcode: '',
      councilDistrict: '',
      comments: '',
    }
  }

  handleSubmit = (userId, data) => {
    this.props.onSubmit(userId, data)
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  renderDistrictOptions = () => {
    const options = []
    options.push(<option value="0" key={0}>Select your Council District</option>)
    for (let i = 1; i < 11; i += 1) {
      options.push(<option value={i} key={i}>{`District ${i}`}</option>)
    }
    return options
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
      student: this.state.student,
      schoolName: this.state.schoolName,
      zipcode: this.state.zipcode,
      councilDistrict: this.state.councilDistrict,
      userBudget: departmentsArray,
      totalBudget: funds.sumOfServiceSpending || 0,
    }

    const showSchoolNameField = this.state.student === 'true'

    return (
      <div className="Submit__save-body">
        <h3 className="Submit__title">Save & Submit</h3>

        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" placeholder="Name"
          onChange={this.handleChange} value={this.state.name}
        />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" placeholder="Email"
          onChange={this.handleChange} value={this.state.email}
        />

        <label htmlFor="student">Are you a student?</label>
        <select name="student" id="student" onChange={this.handleChange}
          value={this.state.student}
        >
          <option value="false">No</option>
          <option value="true">Yes</option>
        </select>

        { showSchoolNameField &&
          <div>
            <label htmlFor="schoolName">
              What is the name of your school?
            </label>
            <input name="schoolName" id="schoolName" type="text" placeholder="School Name"
              onChange={this.handleChange} value={this.state.schoolName}
            />
          </div>
        }

        <label htmlFor="zipcode">Zipcode</label>
        <input type="text" name="zipcode" id="zipcode" placeholder="Zipcode" pattern="[0-9]{5}"
          onChange={this.handleChange} value={this.state.zipcode}
        />

        <label htmlFor="councilDistrict">Council District</label>
        <small>
          Not sure what district you live in? &nbsp;
          <a href="http://www.austintexas.gov/GIS/CouncilDistrictMap/">Check this map.</a>
        </small>
        <select name="councilDistrict" id="councilDistrict"
          onChange={this.handleChange} value={this.state.councilDistrict}
        >
          {this.renderDistrictOptions()}
        </select>

        <label htmlFor="comments">Comments</label>
        <textarea type="textarea" name="comments" id="comments" placeholder="Comments"
          onChange={this.handleChange} value={this.state.comments}
        />

        <div className="Submit__review-buttons">
          <Link to="/submit/review" className="Service__edit-button">
            Revise
          </Link>
          <Link to="/done" className="Service__done-button"
            onClick={this.handleSubmit.bind(this, user.uid, userData)}
          >
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
