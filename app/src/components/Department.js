import React from 'react'
import { Link } from 'react-router-dom'

import Navigation from './Navigation'
import PartyLevelHeader from './PartyLevelHeader'
import DepartmentChangeByPercentButtons from './Department/ChangeByPercentButtons'
import ProgressBar from './ProgressBar'

import comment from '../images/comment.svg'
import backArrow from '../images/back_arrow.svg'
import forwardArrow from '../images/forward_arrow.svg'

const Department = (props) => {
  const { services, departments } = props;
  const { service_id, id } = props.match.params;
  const service = services[Number(service_id)];
  const department = departments[Number(id) - 1];
  const departmentIndex = service.departments.indexOf(Number(id)) + 1
  const serviceDepartments = service.departments
  const nextLink = departmentIndex < serviceDepartments.length
    ? `/service/${service.index}/department/${Number(id) + 1}`
    : `/service/${service.index}`

  const handleNextClick = (dept, service, serviceDepts, departments, e) => {
    // e.preventDefault()
    props.onClickNext(dept, service, serviceDepts, departments)
  }

  return (
    <div>
      <Navigation service={service} showBack showTotalFunds showServiceFunds />

      <div className="Department">
        <PartyLevelHeader {...props}
          service={service}
          department={department}
        />

        <div className="Department__body">
          <h1 className="Department__title">{department.name}</h1>
          <p className="Department__desc">
            {department.description}
          </p>
          <Link to={`/service/${service_id}/department/${id}/learn-more`}
            className="Department__link"
          >
            Learn More
          </Link>

          <DepartmentChangeByPercentButtons deptId={id} />

          <Link to={`/service/${service_id}/department/${id}/explain`}
            className="Department__link"
          >
            <img src={comment} alt="Comment bubble icon"/> Explain your spending
          </Link>

          <div className="Department__review-buttons">
            <Link to={departmentIndex > 1 ? `/service/${service.index}/department/${id - 1}` : `/service/${service.index}`}
              className="Department__edit-button">
              <div className="flexconatiner">
                <img src={backArrow} alt="Back Arrow" className="left" style={{padding: "6px 0 0 10px"}}/>
                <span className="right" style={{paddingRight: "20px"}}>Prev</span>
              </div>

            </Link>
            <Link to={nextLink} onClick={handleNextClick.bind(this, department, service, service.departments, departments)}
              className="Department__done-button">
              <span className="left" style={{paddingLeft: "20px"}}>Next</span>
              <img src={forwardArrow} alt="Back Arrow" className="right" style={{padding: "6px 10px 0 0"}} />
            </Link>
          </div>

          <ProgressBar x={departmentIndex} y={serviceDepartments.length} />
        </div>

      </div>
    </div>
  )
}

export default Department
