import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Gallery from './Gallery';
// import Form from './Form';
// import Counter from './Counter';
// import RequestTracker from './RequestTracker';
// import MyCheckbox from './MyCheckbox';
// import FormUser from './FormUser';
// import TaskApp from './TaskApp';
// import BucketList from './BucketList';
// import TodoList from './TodoList';
// import ResetState from './ResetState';
// import PreviousRender from './PreviousRender';
// import Accordion from './Accordion';
// import AccordionV2 from './AccordionV2';
// import ReducerDemo from './ReducerDemo';
// import FormWithReducer from './FormWithReducer';
import TaskAppReducer from './TaskAppReducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TaskAppReducer />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
