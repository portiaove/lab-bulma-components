import React from 'react';
import Navbar from '../components/Navbar';
import FormField from '../components/FormField';
import CoolButton from '../components/CoolButton';
import Message from '../components/message';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container">
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <FormField label="Password" type="password" placeholder="secret password" />
      <CoolButton isSmall isSuccess>Signup</CoolButton>
      <Message isInfo title="Hello World">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.</Message>      
      {/* <CoolButton isSmall isDanger className="is-rounded my-class">Login</CoolButton>
      <CoolButton isSmall isSuccess>Signup</CoolButton> */}
      </div>
    </div>
  )
}

export default App;