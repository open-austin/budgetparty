import { connect } from 'react-redux'
import Submit from '../components/Submit'

// import any actions

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: () => {
      // dispatch(updateSubmitResponse(deptId, text))
    }
  }
}

const SubmitContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Submit)

export default SubmitContainer
