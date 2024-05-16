import { useState } from 'react';
import { FaSearch, FaSyncAlt } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Transactions = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedBiller, setSelectedBiller] = useState('All Billers');
  const [selectedMandate, setSelectedMandate] = useState('All Mandates');

  const handleSearch = () => {
    // Perform search logic here
    console.log('Search clicked');
    console.log('Start Date:', startDate);
    console.log('End Date:', endDate);
  };

  const handleReset = () => {
    // Reset form values here
    setStartDate('');
    setEndDate('');
    setSelectedBiller('All Billers');
    setSelectedMandate('All Mandates');
  };

  return (
    <div className="container-fluid pt-4 px-4">
      <div className="bg-light rounded p-4">
        <h4 className="mb-0" style={{ fontWeight: "600", color: "#356d00" }}>Transactions</h4>
        <form className="row g-2 align-items-center justify-content-start">

          <div className="col-md-6">
            <DatePicker
              id="startDate"
              selected={startDate}
              onChange={date => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              className="form-control"
              placeholderText="Select Start Date"
              style={{ maxWidth: '100%' }}
            />
          </div>
          <div className="col-md-6">
            <DatePicker
              id="endDate"
              selected={endDate}
              onChange={date => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              className="form-control"
              placeholderText="Select End Date"
              style={{ width: '100%' }}
            />
          </div>
          <div className="col-md-12">
            <div className="form-floating mb-3">
              <select
                id="biller"
                className="form-select"
                value={selectedBiller}
                onChange={(e) => setSelectedBiller(e.target.value)}
                aria-label="Biller Selection"
              >
                <option value="All Billers">All Billers</option>
                <option value="Biller1">Biller1</option>
                <option value="Biller2">Biller2</option>
                <option value="Biller3">Biller3</option>
              </select>
              <label htmlFor="biller">Select Biller</label>
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-floating mb-3">
              <select
                id="mandate"
                className="form-select"
                value={selectedMandate}
                onChange={(e) => setSelectedMandate(e.target.value)}
                aria-label="Mandate Selection"
              >
                <option value="All Mandates">All Mandates</option>
                <option value="MAND2323">MAND2323</option>
                <option value="MAND43342">MAND43342</option>
                {/* Add more options for mandates */}
              </select>
              <label htmlFor="mandate">Select Mandate</label>
            </div>
          </div>

          <div className="col-md-6">
            <button type="button" className="btn btn-primary w-100" onClick={handleSearch}><FaSearch className="me-2" />Search</button>
          </div>
          <div className="col-md-6">
            <button type="button" className="btn btn-secondary w-100" onClick={handleReset}><FaSyncAlt className="me-2" />Reset</button>
          </div>
        </form>

        <div className="table-responsive mt-4">
          <table className="table text-start align-middle table-bordered table-hover mb-0">
            <thead>
              <tr className="text-dark">
                <th scope="col">Biller</th>
                <th scope="col">Mandate</th>
                <th scope="col">Amount</th>
                <th scope="col">Status</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Electricity Company</td>
                <td>MAND32413</td>
                <td>$150</td>
                <td><span className="badge bg-primary rounded-pill">Pending</span></td>
                <td>
                  <button className="btn btn-sm btn-primary">Resubmit</button>
                </td>
              </tr>
              <tr>
                <td>Water Utility</td>
                <td>MAND58211</td>
                <td>$100</td>
                <td><span className="badge bg-success rounded-pill">Completed</span></td>
                <td>
                  <button className="btn btn-sm btn-primary">Resubmit</button>
                </td>
              </tr>
              <tr>
                <td>Internet Service Provider</td>
                <td>MAND93572</td>
                <td>$80</td>
                <td><span className="badge bg-danger rounded-pill">Failed</span></td>
                <td>
                  <button className="btn btn-sm btn-primary">Resubmit</button>
                </td>
              </tr>
              <tr>
                <td>Mobile Phone Company</td>
                <td>MAND12783</td>
                <td>$120</td>
                <td><span className="badge bg-primary rounded-pill">Pending</span></td>
                <td>
                  <button className="btn btn-sm btn-primary">Resubmit</button>
                </td>
              </tr>
              <tr>
                <td>Cable TV Provider</td>
                <td>MAND67894</td>
                <td>$90</td>
                <td><span className="badge bg-success rounded-pill">Completed</span></td>
                <td>
                  <button className="btn btn-sm btn-primary">Resubmit</button>
                </td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
};

export default Transactions;