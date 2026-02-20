import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Donation.css';

const Donation = () => {
    const [amount, setAmount] = useState('');
    const [step, setStep] = useState(1);
    const navigate = useNavigate();

    const handleAmountSelect = (val) => {
        setAmount(val);
        setStep(2);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your generous contribution!');
        navigate('/');
    };

    return (
        <div className="donation-container">
            <a href="/#needs" className="back-btn">
                <ion-icon name="arrow-back-outline"></ion-icon>
                <span>Back to Needs</span>
            </a>

            <div className="donation-card glass">
                <div className="donation-header">
                    <h1>Make a Donation</h1>
                    <p>Your support can change a life today.</p>
                </div>

                {step === 1 ? (
                    <div className="amount-selection">
                        <h3>Select Amount</h3>
                        <div className="amount-grid">
                            {['$10', '$25', '$50', '$100'].map((val) => (
                                <button
                                    key={val}
                                    className={`amnt-btn ${amount === val ? 'active' : ''}`}
                                    onClick={() => handleAmountSelect(val)}
                                >
                                    {val}
                                </button>
                            ))}
                        </div>
                        <div className="custom-amount">
                            <input
                                type="number"
                                placeholder="Custom Amount"
                                value={amount.replace('$', '')}
                                onChange={(e) => setAmount(`$${e.target.value}`)}
                            />
                        </div>
                        <button
                            className="next-btn"
                            disabled={!amount}
                            onClick={() => setStep(2)}
                        >
                            Continue
                        </button>
                    </div>
                ) : (
                    <form className="payment-form" onSubmit={handleSubmit}>
                        <h3>Payment Details</h3>
                        <div className="selected-summary">
                            <span>Donation Amount:</span>
                            <strong>{amount}</strong>
                        </div>

                        <div className="input-group">
                            <label>Cardholder Name</label>
                            <input type="text" required placeholder="John Doe" />
                        </div>

                        <div className="input-group">
                            <label>Card Number</label>
                            <input type="text" required placeholder="0000 0000 0000 0000" />
                        </div>

                        <div className="flex-inputs">
                            <div className="input-group">
                                <label>Expiry Date</label>
                                <input type="text" required placeholder="MM/YY" />
                            </div>
                            <div className="input-group">
                                <label>CVV</label>
                                <input type="password" required placeholder="***" />
                            </div>
                        </div>

                        <button type="submit" className="submit-donation">
                            Complete Donation
                        </button>
                        <button
                            type="button"
                            className="text-btn"
                            onClick={() => setStep(1)}
                        >
                            Go Back
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Donation;
