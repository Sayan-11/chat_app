import { connect } from 'react-redux'
import Users from '../components/Users'

const Users_ = connect(state => ({
  users: state.users
}), {})(Users)

export default Users_