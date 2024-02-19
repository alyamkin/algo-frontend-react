function App() {
  return <MyButton onClick={handleClick}>Click Me Please</MyButton>;
}

function handleClick(event) {
  console.log(event.nativeEvent);
}

function MyButton(props) {
  return (
    <button
      {...props}
      style={{
        color: 'red',
      }}
    />
  );
}

export default App;
