import React, {useState} from 'react';
import './loginForm.css';
import { withRouter } from "react-router-dom";
import { ACCESS_TOKEN_NAME } from '../../constants/constant'

function LoginForm({showError, updateTitle, history}) {
    const [state , setState] = useState({
        email : "",
        password : "",
        successMessage: null
    })
    
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    const validate = (email, password) =>{
        // we are going to store errors for all fields
        // in a signle array
        const errors = [];

        if (email.length < 5) {
          errors.push("Email should be at least 5 charcters long");
        }
        if (email.split("").filter(x => x === "@").length !== 1) {
          errors.push("Email should contain a @");
        }
        if (email.indexOf(".") === -1) {
          errors.push("Email should contain at least one dot");
        }
      
        if (password.length < 6) {
          errors.push("Password should be at least 6 characters long");
        }
      
        return errors;
      }

    const handleSubmitClick = (e) => {
        e.preventDefault();
        const payload = {
            "email":state.email,
            "password":state.password,
        }
        const errors = validate(payload.email, payload.password);
        if (errors.length > 0) {
            showError(errors)
            return;
        }
        localStorage.setItem(ACCESS_TOKEN_NAME,payload);
        redirectToHome();
        showError(null)
    }

    const redirectToHome = () => {
        updateTitle('Home')
        history.push('/home');
    }

    return(
        <div className="card col-12 col-lg-6  hv-center">
            <form class="form-group">
                <div className="form-group text-left">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" 
                       className="form-control" 
                       id="email" 
                       aria-describedby="emailHelp" 
                       placeholder="Enter email" 
                       value={state.email}
                       onChange={handleChange}
                       required
                />
              
                </div>
                <div className="form-group text-left">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" 
                       className="form-control" 
                       id="password" 
                       placeholder="Password"
                       value={state.password}
                       onChange={handleChange} 
                       required
                />
                </div>
                <div className="form-check">
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary"
                    onClick={handleSubmitClick}
                >Submit</button>
            </form>
            <div className="alert alert-success mt-2" style={{display: state.successMessage ? 'block' : 'none' }} role="alert">
                {state.successMessage}
            </div>
        </div>
        
    )
}

export default withRouter(LoginForm);