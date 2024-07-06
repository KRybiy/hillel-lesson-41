import ComponentPropsInterface from "../types/ComponentProps.Interface";

const parentComponent = ({ children, color }: ComponentPropsInterface) => {
  console.log(children,color)
  const componentStyle = {
    backgroundColor: color,
    padding: "10px",
    margin: "10px",
    border: "1px solid black",
    borderRadius: "5px",
    display: "inline-block",
  }
  return (
    <div style={{ ...componentStyle }}> 
      <h1>Parent Component </h1>
      {children}
    </div>
  );
} 

export default parentComponent


