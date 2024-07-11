import { createUseStyles } from 'react-jss';

const theme = {
  primaryColor: '#007bff',
  secondaryColor: '#28a745',
};

const useStyles = createUseStyles({
  container: {
    maxWidth: 800,
    margin: '0 auto',
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  h2: {
    color: '#333',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 20,
    border: '1px solid #ccc',
    borderRadius: 4,
  },
  ul: {
    listStyle: 'none',
    padding: 0,
  },
  li: {
    backgroundColor: '#e9ecef',
    marginBottom: 10,
    padding: 10,
    borderRadius: 4,
  },
  strong: {
    color: '#495057',
  },
  message: {
    padding: 10,
    backgroundColor: '#ffcccc',
    color: '#990000',
    border: '1px solid #ff6666',
    borderRadius: 4,
    textAlign: 'center',
  },
  post: {
    backgroundColor: '#f1f1f1',
    padding: 15,
    marginBottom: 15,
    borderRadius: 8,
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
  },
  postH3: {
    marginTop: 0,
    color: '#333',
  },
  postP: {
    color: '#666',
  },
  nestedExample: {
    padding: 10,

    '&:hover': {
      backgroundColor: '#f0f0f0',
    },

    '& .nestedElement': {
      fontWeight: 'bold',
    },
  },
  dynamicButton: {
    padding: '10px 20px',
    border: 'none',
    borderRadius: 4,
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  primaryButton: {
    backgroundColor: theme.primaryColor,
    color: '#ffffff',

    '&:hover': {
      backgroundColor: '#0056b3',
    },
  },
  secondaryButton: {
    backgroundColor: theme.secondaryColor,
    color: '#ffffff',

    '&:hover': {
      backgroundColor: '#1e7e34',
    },
  },
  buttonLabel: {
    display: 'block',
  },
});

export default useStyles;
