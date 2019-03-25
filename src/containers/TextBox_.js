import {connect} from 'react-redux'
import TextBox from '../components/TextBox'
import { addMessage } from '../actions/actions'

const mapDispatchToProps = dispatch => ({
    dispatch: (message, author) => {
      dispatch(addMessage(message, author))
    }
  })
  
const TextBox_ = connect(() => ({}), mapDispatchToProps)(TextBox)
export default TextBox_