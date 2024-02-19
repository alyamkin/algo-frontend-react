import './App.css';
import React from 'react';

function App() {
  // const name = 'Andrey';
  // const error = true;
  // const props = {
  //   id: 'input',
  //   type: 'text',
  //   maxLength: '5',
  // };

  return (
    <>
      <p
        style={{
          color: 'blue',
          textAlign: 'center',
          fontSize: '50px',
        }}
      >
        Hello World
      </p>
      ;
    </>
  );

  // return (
  //   <>
  //     <p className="center">Hello World</p>;
  //   </>
  // )

  // return (
  //   <>
  //     <label htmlFor="input">Input:</label>
  //     <input {...props}></input>
  //     {/* <input id="input" type="text" maxLength="3"></input> */}
  //   </>
  // );

  // return (
  //   <>
  //     <h1>{error ? 'Error' : 'Success'}</h1>
  //   </>
  // );

  // return (
  //   <>
  //     {error && <p>Error</p>}
  //     {error || <p>Success</p>}
  //   </>
  // );

  // return (
  //   <React.Fragment>
  //     <h1>Hello {name.toUpperCase()}</h1>
  //     <p>Test</p>
  //   </React.Fragment>
  // );
}

export default App;
