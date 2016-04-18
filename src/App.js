import React from 'react';
import ContactsList from './ContactsList';

let contacts = {
  name: 'Chris',
  phone: '555 555 5555'
}

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Contacts List</h1>
        <ContactsList contact={this.props.contacts}/>
      </div>
    )
  }
}

React.render(<App contacts={contacts} />, document.getElementById('app'));
