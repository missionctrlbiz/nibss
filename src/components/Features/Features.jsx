import { useState } from 'react';

const Features = () => {
  const [balanceCheck, setBalanceCheck] = useState({
    accountNumber: '',
    pin: '',
    balance: '',
  });

  const [realTimeTransaction, setRealTimeTransaction] = useState({
    accountNumber: '',
    pin: '',
    amount: '',
    balance: '',
  });

  const [eMandate, setEMandate] = useState({
    accountNumber: '',
    pin: '',
    amount: '',
    details: '',
  });

  const handleBalanceCheckChange = (e) => {
    setBalanceCheck({ ...balanceCheck, [e.target.name]: e.target.value });
  };

  const handleRealTimeTransactionChange = (e) => {
    setRealTimeTransaction({ ...realTimeTransaction, [e.target.name]: e.target.value });
  };

  const handleEMandateChange = (e) => {
    setEMandate({ ...eMandate, [e.target.name]: e.target.value });
  };

  const checkBalance = () => {
    // Logic to check balance
    console.log('Check balance for:', balanceCheck);
  };

  const performTransaction = (type) => {
    // Logic to perform debit or credit
    console.log(`${type} transaction for:`, realTimeTransaction);
  };

  const setupEMandate = () => {
    // Logic to set up e-Mandate
    console.log('Setup e-Mandate for:', eMandate);
  };

  const cancelEMandate = () => {
    // Logic to cancel e-Mandate
    console.log('Cancel e-Mandate for:', eMandate);
  };

  return (
    <div className="container-fluid pt-4 px-4">
      <div className="row g-4">
        <div className="col-md-4">
          <div className="bg-light rounded h-100 p-4">
            <h6 className="mb-4">Balance Check</h6>
            <form>
              <div className="mb-3">
                <label htmlFor="balanceAccountNumber" className="form-label">Account Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="balanceAccountNumber"
                  name="accountNumber"
                  value={balanceCheck.accountNumber}
                  onChange={handleBalanceCheckChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="balancePin" className="form-label">PIN</label>
                <input
                  type="password"
                  className="form-control"
                  id="balancePin"
                  name="pin"
                  value={balanceCheck.pin}
                  onChange={handleBalanceCheckChange}
                />
              </div>
              <button type="button" className="btn btn-primary" onClick={checkBalance}>Check Balance</button>
              <div className="mt-3">
                <label className="form-label">Account Balance</label>
                <input
                  type="text"
                  className="form-control"
                  value={balanceCheck.balance}
                  readOnly
                />
              </div>
            </form>
          </div>
        </div>

        <div className="col-md-4">
          <div className="bg-light rounded h-100 p-4">
            <h6 className="mb-4">Real-Time Debit and Credit</h6>
            <form>
              <div className="mb-3">
                <label htmlFor="transactionAccountNumber" className="form-label">Account Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="transactionAccountNumber"
                  name="accountNumber"
                  value={realTimeTransaction.accountNumber}
                  onChange={handleRealTimeTransactionChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="transactionPin" className="form-label">PIN</label>
                <input
                  type="password"
                  className="form-control"
                  id="transactionPin"
                  name="pin"
                  value={realTimeTransaction.pin}
                  onChange={handleRealTimeTransactionChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="transactionAmount" className="form-label">Amount</label>
                <input
                  type="text"
                  className="form-control"
                  id="transactionAmount"
                  name="amount"
                  value={realTimeTransaction.amount}
                  onChange={handleRealTimeTransactionChange}
                />
              </div>
              <div className="d-flex justify-content-between">
                <button type="button" className="btn btn-success" onClick={() => performTransaction('Credit')}>Credit</button>
                <button type="button" className="btn btn-danger" onClick={() => performTransaction('Debit')}>Debit</button>
                <button type="button" className="btn btn-secondary" onClick={checkBalance}>Refresh</button>
              </div>
              <div className="mt-3">
                <label className="form-label">Account Balance</label>
                <input
                  type="text"
                  className="form-control"
                  value={realTimeTransaction.balance}
                  readOnly
                />
              </div>
            </form>
          </div>
        </div>

        <div className="col-md-4">
          <div className="bg-light rounded h-100 p-4">
            <h6 className="mb-4">e-Mandate</h6>
            <form>
              <div className="mb-3">
                <label htmlFor="eMandateAccountNumber" className="form-label">Account Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="eMandateAccountNumber"
                  name="accountNumber"
                  value={eMandate.accountNumber}
                  onChange={handleEMandateChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="eMandatePin" className="form-label">PIN</label>
                <input
                  type="password"
                  className="form-control"
                  id="eMandatePin"
                  name="pin"
                  value={eMandate.pin}
                  onChange={handleEMandateChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="eMandateAmount" className="form-label">Amount</label>
                <input
                  type="text"
                  className="form-control"
                  id="eMandateAmount"
                  name="amount"
                  value={eMandate.amount}
                  onChange={handleEMandateChange}
                />
              </div>
              <div className="d-flex justify-content-between">
                <button type="button" className="btn btn-primary" onClick={setupEMandate}>Set up e-Mandate</button>
                <button type="button" className="btn btn-secondary" onClick={cancelEMandate}>Cancel</button>
              </div>
              <div className="mt-3">
                <label htmlFor="eMandateDetails" className="form-label">e-Mandate Details</label>
                <textarea
                  className="form-control"
                  id="eMandateDetails"
                  name="details"
                  rows="3"
                  value={eMandate.details}
                  readOnly
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
