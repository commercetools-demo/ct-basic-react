import { useState } from 'react';
import './App.css';
import EmailInput from './components/email-input';
import OrderList from './components/order-list';

function App() {

  const [isSubmitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
    setSubmitted(false);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    console.log('submit');
    setSubmitted(true);
    console.log(email);
  }

  return (
    <div className="App">
      Enter email address and hit 'Search' to find orders for this customer
      <p/>&nbsp;
        <EmailInput onChange={onChangeEmail} onSubmit={onSubmit} />
        { isSubmitted && <OrderList email={email} /> }
      
    </div>
  );
}

export default App;
