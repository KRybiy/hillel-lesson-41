import { useEffect, useState } from "react";
import { UserInterface } from "./types/User.Interface";
import { fetchUser } from "./utils/fetchUser";
import useStyles from "./assets/styles/useStyles";
import Posts from "./components/Posts";

function App() {
  const classes = useStyles();
  const [users, setUsers] = useState<UserInterface[]>([]);
  const [count, setCount] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getUser = async () => {
      if (count !== null && count > 0 && count <= 10) {
        setLoading(true);
        setError(null);
        try {
          const user = await fetchUser(count);
          setUsers([user]);
        } catch (err) {
          setError("Error fetching user data");
        } finally {
          setLoading(false);
        }
      } else {
        setUsers([]);
      }
    };

    getUser();
  }, [count]);

  return (
    <div className={classes.container}>
      <h2 className={classes.h2}>Render of User</h2>
      <input
        type="number"
        min="1"
        max="10"
        onChange={(e) => setCount(+e.target.value)}
        placeholder="Enter user ID (1-10)"
        className={classes.input}
      />
      {loading && <p className={classes.message}>Loading data...</p>}
      {error && <p className={classes.message}>{error}</p>}
      {users.length > 0 ? (
        <ul className={classes.ul}>
          {users.map((user) => (
            <li key={user.id} className={classes.li}>
              <strong className={classes.strong}>Name:</strong> {user.name}
              <br />
              <strong className={classes.strong}>Username:</strong>{" "}
              {user.username}
              <br />
              <strong className={classes.strong}>Email:</strong> {user.email}
              <br />
              <strong className={classes.strong}>Address:</strong>{" "}
              {user.address.street}, {user.address.suite}, {user.address.city},{" "}
              {user.address.zipcode}
              <br />
              <strong className={classes.strong}>Phone:</strong> {user.phone}
              <br />
              <strong className={classes.strong}>Website:</strong>{" "}
              {user.website}
              <br />
              <strong className={classes.strong}>Company:</strong>{" "}
              {user.company.name}
            </li>
          ))}
        </ul>
      ) : (
        !loading && (
          <p className={classes.message}>
            No user found. Please enter a number between 1 and 10.
          </p>
        )
      )}
      <h2 className={classes.h2}>Posts using Axios</h2>
      <Posts />
      
      {/* First Button */}
      <h2 className={classes.h2}>Themed Button</h2>
      <button className={`${classes.dynamicButton} ${classes.primaryButton}`}>
        Themed Button (Primary)
      </button>

      {/* Second Button */}
      <h2 className={classes.h2}>Themed Button</h2>
      <button className={`${classes.dynamicButton} ${classes.secondaryButton}`}>
        Themed Button (Secondary)
      </button>
    </div>
  );
}

export default App;
