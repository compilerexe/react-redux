import { createStore } from 'redux'
import users from '../reducer/users'

const store = createStore(users)

export default store