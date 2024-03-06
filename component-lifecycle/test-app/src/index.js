// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// // import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     {/* <App /> */}
//     {/* <Component /> */}
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
// import Image from './Image';
// import Gallery from './Gallery';
// import ChatRoomSelector from './ChatRoomSelector';
// import PointerMove from './PointerMove';
// import AnimationWelcome from './AnimationWelcome';
// import ControlModalDialog from './ControlModalDialog';
// import BoxObserver from './BoxObserver';
// import MapControll from './MapControll';
// import FetchBio from './FetchBio';
// import CounterInterval from './CounterInterval';
import ButtonsWithTooltip from './ButtonsWithTooltip';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Image /> */}
    {/* <Gallery /> */}
    {/* <ChatRoomSelector /> */}
    {/* <PointerMove /> */}
    {/* <AnimationWelcome /> */}
    {/* <ControlModalDialog /> */}
    {/* <BoxObserver /> */}
    {/* <ChatRoomSelector /> */}
    {/* <MapControll /> */}
    {/* <FetchBio /> */}
    {/* <CounterInterval /> */}
    <ButtonsWithTooltip />
  </React.StrictMode>
);
