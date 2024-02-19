function App() {
  return (
    <Comment userName="Andrey" time={new Date().toString()}>
      <p>Hello World!</p>
      <p>This is a Comment</p>
    </Comment>
  );
  // return (
  //   <>
  //     <Hello name="Andrey" />
  //     <Hello name="Sergey" />
  //     <Hello />
  //   </>
  // );
}

function Comment({ userName, time, children }) {
  return (
    <section>
      <p>
        {userName} commented at {time}
      </p>
      {children}
    </section>
  );
}

// function Hello({ name = 'User' }) {
//   return <h1>Hello {name}</h1>;
// }

export default App;
