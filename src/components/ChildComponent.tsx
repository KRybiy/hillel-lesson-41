import ComponentPropsInterface from "../types/ComponentProps.Interface"

const ChildComponent = ({ children, color }: ComponentPropsInterface) => {
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
      <p>Child Component</p>
      {children}
    </div>
  )
}

export default ChildComponent