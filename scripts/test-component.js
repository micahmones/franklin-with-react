const domNode = document.getElementById("app");
const root = ReactDOM.createRoot(domNode);

const TestComponent = () => {
  const [count, setCount] = React.useState(0);
  return (
    <>
      <button onClick={() => setCount(prevState => prevState + 1)}>+</button>
      <button onClick={() => setCount(prevState => prevState - 1)}>-</button>
      <h1>{count}</h1>
    </>
  )
};

root.render(<TestComponent />);