import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import { signin } from '../../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'

const LoginScreen = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const userSignin = useSelector((store) => store.userSignin)
  const { loading, error, response } = userSignin

  const dispatch = useDispatch()
  const onSignin = () => {
    dispatch(signin(username, password))
  }

  useEffect(() => {
    if (response && response.data == 'success') {
      console.log('inside useEffect')
      props.history.push('/home')
    } else if (response && response.status == 'error') {
      console.log('failure')
      alert(response.error)
    } else if (error) {
      alert(error)
    }
  }, [loading, error, response])

  return (
    <div>
      <Header title="Signin" />
      <div className="form form-signin">
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            onChange={(e) => {
              setUsername(e.target.value)
            }}
            type="text"
            className="form-control"
            placeholder="username"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            className="form-control"
            placeholder="*****"></input>
        </div>
        <div className="mb-3">
          <button onClick={onSignin} className="btn btn-success">
            Signin
          </button>
          <div className="float-end">
            New User? <Link to="/signup">Signup here</Link>
          </div>
        </div>
      </div>
      {loading && <div>waiting for response</div>}
    </div>
  )
}

export default LoginScreen
