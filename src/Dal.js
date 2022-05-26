import axios from "axios"

export const createAccount = (email) => {

  if(email) {
    axios.post('/save-user-data', {
      email: email
    })
      .then(result => {
        console.log('this is result', result.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

}
