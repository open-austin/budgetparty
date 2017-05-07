import { connect } from 'react-redux'
import Explain from '../components/Department/Explain'

import { updateExplainResponse } from '../actions/departments'

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: (deptId, text) => {
      dispatch(updateExplainResponse(deptId, text))
      console.log(`updateExplainResponse for ${deptId}: ${text}`)
    }
  }
}

const ExplainContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Explain)

export default ExplainContainer
