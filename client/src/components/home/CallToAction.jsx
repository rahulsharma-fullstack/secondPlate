import React from 'react';
import Button from '../common/Button';

const CallToAction = () => {
  return (
    <section className="call-to-action">
      <h2>Ready to Order?</h2>
      <Button onClick={() => alert('Order Now!')}>Order Now</Button>
    </section>
  );
};

export default CallToAction;
