import { useState, useEffect } from 'react'
import io from 'socket.io-client';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import UserForm from './components/UserForm';
import Chat from './components/Chat';

function App() {
  // This line initializes the WebSocket connection using the io function from the socket.io-client library. It establishes a connection to the server at the specified URL, in this case, ':8000'.
  // It uses the useState hook to create a state variable socket, which holds the reference to the WebSocket connection. The initial state is set using the callback function provided to useState, which ensures that the connection is established only once when the component is first rendered.
  const [socket] = useState(() => io(':8000'));

  useEffect(() => {
    // we need to set up all of our event listeners
    // in the useEffect callback function
    console.log('Is this running?');
    socket.on('connect', () => {
      console.log(`Connected: ${socket.id}`);
    });
    // note that we're returning a callback function
    // this ensures that the underlying socket will be closed if App is unmounted
    // this would be more critical if we were creating the socket in a subcomponent
    return () => socket.off();
  }, []);

  
  return (
    <>
      <h1>Sockets</h1>
      <Routes>
        <Route path='/' element={<UserForm socket={socket}/>}/>
        <Route path='/chat' element={<Chat socket={socket}/>}/>
      </Routes>
    </>
  )
}

export default App
