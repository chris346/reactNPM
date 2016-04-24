import React from 'react';
import ContactsList from './ContactsList';

let contacts = [{
  name: 'Chris',
  phone: '555 555 5555'
}, {
  name: 'Blair',
  phone: '888 555 5555'
}, {
  name: 'Denney',
  phone: '111 555 5555'
}, {
  name: 'Jen',
  phone: '777 555 5555'
}]

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Contacts List</h1>
        <ContactsList contacts={this.props.contacts}/>
      </div>
    )
  }
}

React.render(<App contacts={contacts} />, document.getElementById('app'));
