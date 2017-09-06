import React, { Component } from 'react';
import Rebase from 're-base';
import { FormattedNumber } from 'react-intl'
import departments from '../../data/departments'
import { firebaseApp } from '../../config/constants'


class Admin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      results: [],
      isLoading: true,
      isError: false,
    }
  }
  componentDidMount() {
    const rebase = Rebase.createClass(firebaseApp.database());
    const thiz = this

    rebase.fetch('userResults', {
      context: this,
      asArray: true,
    }).then((data) => {
      const fetchedResults = []
      data.map((result) => {
        if (result.lastUpdated) fetchedResults.push(result)
      })
      thiz.setState({
        results: fetchedResults,
        isLoading: false,
      })
    }).catch((error) => {
      console.log(error)
      thiz.setState({ isLoading: false, isError: error })
    })
  }

  render() {

    console.log(departments)

    return (
      <div style={{ padding: '20px' }}>
        {this.state.isLoading && <h1>Loading...</h1>}
        {this.state.isError &&
          <div>
            <h2>Error, try reloading this page.</h2>
            <p>Details: {this.state.isError}</p>
          </div>
        }
        {this.state.results.map((result) => {
          const sortedDepts = result.userBudget.sort((a, b) => b.amount - a.amount)
          console.log(result)
          return (
            <table key={result.key} style={{ border: '1px solid gray', margin: '10px 0', width: '100%' }}>
              <tr><td colSpan="3">Name: {result.name}</td></tr>
              <tr><td colSpan="3">Comments: {result.comments}</td></tr>
              <tr><td colSpan="3" style={{ textAlign: 'right' }}>Total: &nbsp;
                <FormattedNumber
                  value={result.totalBudget}
                  style="currency" //eslint-disable-line
                  currency="USD"
                  minimumFractionDigits={0}
                  maximumFractionDigits={0}
                />
              </td></tr>
              <tr style={{ background: 'black', color: 'white' }}>
                <td>Department</td>
                <td>% of GF</td>
                <td>% change</td>
              </tr>
              {sortedDepts.map((dept, i) => {
                const department = departments.find((item) => item.name === dept.item)
                const percentChange = (dept.amount - department.amount2017) / dept.amount

                return (
                  <tr key={i}>
                    <td style={{ borderTop: '1px solid gray', borderRight: '1px solid gray' }}>
                      <b>{dept.item}</b>
                      {dept.explain && <p style={{ fontStyle: 'italic', margin: '5px 3px' }}> Comments: {dept.explain}</p>}
                    </td>
                    <td style={{ textAlign: 'right', borderTop: '1px solid gray', borderRight: '1px solid gray' }}>
                      <FormattedNumber
                        style="percent" //eslint-disable-line
                        value={dept.amount / result.totalBudget}
                        minimumFractionDigits={2}
                        maximumFractionDigits={2}
                      />
                    </td>
                    <td style={{ textAlign: 'right', borderTop: '1px solid gray' }}>
                      <FormattedNumber
                        style="percent" //eslint-disable-line
                        value={percentChange}
                        minimumFractionDigits={1}
                        maximumFractionDigits={1}
                      />
                    </td>
                  </tr>
                )
              })}
            </table>
          )
        })}
      </div>
    );
  }

}

export default Admin;
