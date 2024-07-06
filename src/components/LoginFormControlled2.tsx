import { FormEvent, useState } from "react";

interface IFormData {
  username: string;
  password: string;
}

const initialFormData: IFormData = {
  username: '',
  password: ''
}

const LoginFormControlled2 = () => {
  const [formData, setFormData] = useState<IFormData>(initialFormData);


  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    console.log(formData);
  };

  const handleInputChange = (fieldName: string, fieldValue: string) => {
    setFormData({
      ...formData,
      [fieldName]: fieldValue 
    })
  }

  return (
    <form className="col-6" onSubmit={handleFormSubmit}>
      <div className="mb-3">
        <label htmlFor="username1" className="form-label">Username</label>
        <input 
        id="username1" 
        type="text" 
        className="form-control" 
        placeholder="Username" 
        onChange={(event) => handleInputChange("username", event.target.value)}/>
      </div>
      <div className="mb-3">
        <label htmlFor="password1" className="form-label">Password</label>
        <input 
        id="password1" 
        type="password" 
        className="form-control" 
        placeholder="Password" 
        onChange={(event) => handleInputChange("password", event.target.value)}/>
      </div>
      <div className="mb-3">
        <input type="submit" className="btn btn-primary" value="Login" />
      </div>
    </form>
  );
};

export default LoginFormControlled2;
