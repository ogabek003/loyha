import React from 'react';
import './App.css';
import { createRoot } from 'react-dom/client';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div>
      <Navbar />

      {/* Intro */}
      <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 className="display-4">Pricing</h1>
        <p className="lead">
          Quickly build an effective pricing table for your potential customers with this Bootstrap example.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="container">
        <div className="card-deck mb-3 text-center">
          {[
            { title: 'Free', price: 0, button: 'Sign up for free' },
            { title: 'Pro', price: 15, button: 'Get started' },
            { title: 'Enterprise', price: 29, button: 'Contact us' }
          ].map((plan, i) => (
            <div className="card mb-4 shadow-sm" key={i}>
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">{plan.title}</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  ${plan.price} <small className="text-muted">/ mo</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>10 users included</li>
                  <li>2 GB of storage</li>
                  <li>Email support</li>
                  <li>Help center access</li>
                </ul>
                <button type="button" className="btn btn-lg btn-block btn-outline-primary">
                  {plan.button}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="pt-4 my-md-5 pt-md-5 border-top text-center">
          <p className="text-muted">&copy; 2025 Company, Inc.</p>
        </footer>
      </div>
      
    </div>
    
  );
}

export default App;
