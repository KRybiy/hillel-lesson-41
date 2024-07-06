import { FormEvent } from "react";

const LoginFormUncontrolled = () => {

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      username: { value: string };
      password: { value: string };
    };

    console.log(target.username.value, target.password.value);
  };

  return (
    <form className="col-6" onSubmit={handleFormSubmit}>
      <div className="mb-3">
        <input type="text" className="form-control" placeholder="Username" />
      </div>
      <div className="mb-3">
        <input type="password" className="form-control" placeholder="Password" />
      </div>
      <div className="mb-3">
        <input type="submit" className="btn btn-primary" value="Login" />
      </div>
    </form>
  );
};

export default LoginFormUncontrolled;
