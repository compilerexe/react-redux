const initialState = {}

export default (state = initialState, action) => {

  switch (action.type) {

    case 'sign_up':

      if (action.errorCode) {
        swal('Oops!', action.errorMessage, 'error')
      } else {
        swal('Success', '', 'success')
      }

      return action.status

    default:
      return state

  }

}