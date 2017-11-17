import firebase from '../../components/FirebaseConfig'
import store from '../store/users'

export const sign_up = ({email = '', password = ''} = {}) => {

  let result = {
    type: 'sign_up'
  }

  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {

    let errorCode = error.code
    let errorMessage = error.message

    const objError = {errorCode: errorCode, errorMessage: errorMessage}
    result = {...result, ...objError}

  }).then(() => store.dispatch(result))

}