import React from 'react';
import Navbar from '../components/Navbar';
import FormField from '../components/FormField';
import CoolButton from '../components/CoolButton';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
      {/* <CoolButton isSmall isSuccess>Button 2</CoolButton> */}
      <h1> Hola </h1>
    </div>
  )
}

export default App;