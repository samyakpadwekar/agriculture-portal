import { Link } from 'react-router-dom'
import Header from '../components/Header'
import '../styles/signup.css';
import '../styles/App.css'

const SignupScreen = () => {
  return (
    <div className="container">
      <Header title="Signup" />
      <div className="form">
        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input className="form-control"></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input className="form-control"></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Phone number</label>
          <input
            type="Phone"
            className="form-control"
            placeholder="Phone"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="test@test.com"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="*****"></input>
        </div>
        <div className="mb-3">
          <button className="btn btn-success">
            Signup
          </button>
          <div className="float-end">
            Existing user? <Link to="/signin">Signin here</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupScreen
