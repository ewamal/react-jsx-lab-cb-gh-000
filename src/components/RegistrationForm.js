import React from 'react';


class RegistrationForm extends React.Component {
  render(){
    return(
      <form>
        Name:
        <input type="text" name="name" />
        <input type="password" />
        <button type="submit">Button</button>
      </form>

    )
  }
}

export default RegistrationForm;
