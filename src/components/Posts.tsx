import { useEffect, useState } from "react";
import axios from "axios";
import useStyles from "../assets/styles/useStyles";

interface PostInterface {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Posts = () => {
  const classes = useStyles();
  const [posts, setPosts] = useState<PostInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(response.data);
      } catch (err) {
        setError("Error fetching posts");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <div className={classes.nestedExample}>
        <p>Nested Example</p>
        <div className="nestedElement">Nested Element</div>
      </div>
      
      {posts.map((post) => (
        <div key={post.id} className={classes.post}>
          <h3 className={classes.postH3}>{post.title}</h3>
          <p className={classes.postP}>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
