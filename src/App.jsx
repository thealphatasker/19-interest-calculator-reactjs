import React, { useState } from "react";
import Header from "./components/Header.jsx";
import "./index.css";

const App = () => {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [interest, setInterest] = useState(null);

  const calculateInterest = (e) => {
    e.preventDefault();

    const si = (Number(principal) * Number(rate) * Number(time)) / 100;

    setInterest(si);
  };

  return (
    <>
      <Header />
      
      <div className="container">
        <div className="card">
          <form onSubmit={calculateInterest}>
            <div className="input-group">
              <label htmlFor="principal-amount">Principal Amount</label>
              <input
                type="number"
                id="principal-amount"
                onChange={(e) => setPrincipal(e.target.value)}
                placeholder="Enter principal amount"
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="interest-rate">Rate of Interest (%)</label>
              <input
                type="number"
                id="interest-rate"
                onChange={(e) => setRate(e.target.value)}
                placeholder="Enter interest rate"
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="time-years">Time (Years)</label>
              <input
                type="number"
                id="time-years"
                onChange={(e) => setTime(e.target.value)}
                placeholder="Enter time in years"
                required
              />
            </div>

            <div>
              <button type="submit" className="calculate-btn">
                🧮 Calculate
              </button>
            </div>
          </form>

  
            <div className="result">
              <h3>Simple Interest: Rs. {interest}</h3>
              <h4>
                Total Amount: Rs. {(Number(principal) + interest)}
              </h4>
            </div>
        </div>
      </div>
    </>
  );
};

export default App;
