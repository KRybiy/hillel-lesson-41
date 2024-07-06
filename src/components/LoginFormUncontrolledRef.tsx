import { FormEvent, useRef } from "react";

const LoginFormUncontrolledRef = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    console.log('username', usernameRef.current?.value);
    console.log('password', passwordRef.current?.value);
  };

  return (
    <form className="col-6" onSubmit={handleFormSubmit}>
      <div className="mb-3">
        <label htmlFor="username2" className="form-label">Username</label>
        <input ref={usernameRef} id="username2" type="text" className="form-control" placeholder="Username" />
      </div>
      <div className="mb-3">
        <label htmlFor="password2" className="form-label">Password</label>
        <input ref={passwordRef} id="password2" type="password" className="form-control" placeholder="Password" />
      </div>
      <div className="mb-3">
        <input type="submit" className="btn btn-primary" value="Login" />
      </div>
    </form>
  );
};

export default LoginFormUncontrolledRef;
