import {  FormEvent } from "react";
import useInputState from "../hooks/useInputState";

const LoginFormControlled3 = () => {
  const username = useInputState('');
  const password = useInputState('');
  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    console.log({
      username: username.value,
      password: password.value,
    });
  };

  return (
    <form className="col-6" onSubmit={handleFormSubmit}>
      <div className="mb-3">
        <label htmlFor="username4" className="form-label">Username</label>
        <input 
        id="username4" 
        type="text" 
        className="form-control" 
        placeholder="Username" 
        {...username}/>
      </div>
      <div className="mb-3">
        <label htmlFor="password4" className="form-label">Password</label>
        <input 
        id="password4" 
        type="password" 
        className="form-control" 
        placeholder="Password" 
        {...password}/>
      </div>
      <div className="mb-3">
        <input type="submit" className="btn btn-primary" value="Login" />
      </div>
    </form>
  );
};

export default LoginFormControlled3;
