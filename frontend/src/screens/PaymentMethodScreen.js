import { useContext, useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { Store } from '../Store';

export default function PaymentMethodScreen() {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { paymentMethod },
  } = state;

  const [paymentMethodName, setPaymentMethod] = useState(
    paymentMethod || 'PayPal'
  );

  const submitHandler = (e) => {
    e.preventDefault();
    ctxDispatch({ type: 'SAVE_PAYMENT_METHOD', payload: paymentMethod });
    localStorage.setItem('paymentMethod', paymentMethodName)
    navigate('/placeorder');
  }
  return (
    <div className="container small-container">
      <h1 className="my-4">Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <div className="my-3">
          <Form.Check
            type="radio"
            id="PayPal"
            label="PayPal"
            value="PayPal"
            checked={paymentMethodName === 'PayPal'}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
        </div>
        <div className="my-3">
          <Form.Check
            type="radio"
            id="Stripe"
            label="Stripe"
            value="Stripe"
            checked={paymentMethodName === 'Stripe'}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
        </div>
        <div className="my-4">
          <Button type="submit">Continue</Button>
        </div>
      </Form>
    </div>
  )
}
