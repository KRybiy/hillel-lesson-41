import { FormEvent, useState } from "react";

const LoginFormControlled = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    console.log('username', username);
    console.log('password', password);
  };

  return (
    <form className="col-6" onSubmit={handleFormSubmit}>
      <div className="mb-3">
        <label htmlFor="username3" className="form-label">Username</label>
        <input 
        id="username3" 
        type="text" 
        className="form-control" 
        placeholder="Username" 
        onChange={(event) => setUsername(event.target.value)}/>
      </div>
      <div className="mb-3">
        <label htmlFor="password3" className="form-label">Password</label>
        <input 
        id="password3" 
        type="password" 
        className="form-control" 
        placeholder="Password" 
        onChange={(event) => setPassword(event.target.value)}/>
      </div>
      <div className="mb-3">
        <input type="submit" className="btn btn-primary" value="Login" />
      </div>
    </form>
  );
};

export default LoginFormControlled;
