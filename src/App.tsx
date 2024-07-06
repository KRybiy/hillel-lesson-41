import { useEffect, useState } from 'react';
import ParentComponent from "./components/ParentComponent";
import ChildComponent from "./components/ChildComponent";
import LoginFormUncontrolled from "./components/LoginFormUncontrolled";
import LoginFormUncontrolledRef from "./components/LoginFormUncontrolledRef";
import LoginFormControlled from "./components/LoginFormControlled";
import LoginFormControlled2 from "./components/LoginFormControlled2";
import LoginFormControlled3 from "./components/LoginFormControlled3";
import { UserInterface } from './types/User.Interface';
import { fetchUser } from './utils/fetchUser';
import './assets/styles/app.css';
import Posts from './components/Posts';

function App() {
  const [users, setUsers] = useState<UserInterface[]>([]);
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    if (count !== null && count > 0 && count <= 10) {
      fetchUser(count).then((user) => setUsers([user]));
    } else {
      setUsers([]);
    }
  }, [count]);

  return (
    <div className="container">
      <h2>Children</h2>
      <ParentComponent color="lightblue">
        <h3>Passed as children into parent component</h3>
        <p>This is a paragraph passed as children into parent component</p>
        <ChildComponent color="lightgreen">
          <h3>Passed as children into child component</h3>
          <ul>
            <li>Child component list item 1</li>
            <li>Child component list item 2</li>
            <li>Child component list item 3</li>
          </ul>
        </ChildComponent>
      </ParentComponent>
      <h2>Uncontrolled Inputs App</h2>
      <LoginFormUncontrolled />
      <h2>Controlled Inputs App with useRef</h2>
      <LoginFormUncontrolledRef />
      <h2>Controlled Inputs App</h2>
      <LoginFormControlled />
      <h2>Controlled Inputs App with formData</h2>
      <LoginFormControlled2 />
      <h2>Controlled Inputs App with ChangeEvent</h2>
      <LoginFormControlled3 />
      <h2>Render of User</h2>
      <input
        type="number"
        min="1"
        max="10"
        onChange={(e) => setCount(+e.target.value)}
        placeholder="Enter user ID (1-10)"
      />
      {users.length > 0 ? (
        <ul>
          {users.map(user => (
            <li key={user.id}>
              <strong>Name:</strong> {user.name}<br />
              <strong>Username:</strong> {user.username}<br />
              <strong>Email:</strong> {user.email}<br />
              <strong>Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}<br />
              <strong>Phone:</strong> {user.phone}<br />
              <strong>Website:</strong> {user.website}<br />
              <strong>Company:</strong> {user.company.name}
            </li>
          ))}
        </ul>
      ) : (
        <p className="message">No user found. Please enter a number between 1 and 10.</p>
      )}
      <h2>Posts using Axios</h2>
      <Posts />
    </div>
  );
}

export default App;
