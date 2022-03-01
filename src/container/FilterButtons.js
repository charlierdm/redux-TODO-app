import {connect} from 'react-redux'
import {setTodosFilter} from '../actions'
import FooterButtons from '../components/FooterButtons'

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setTodosFilter(ownProps.filter))
})

export default connect(
  null,
  mapDispatchToProps
)(FooterButtons)