import { useState } from 'react';

const Settings = () => {
  const [apiCredentials, setApiCredentials] = useState({
    mandateCreationApi: '',
    directDebitApi: ''
  });

  const [schedulerSettings, setSchedulerSettings] = useState({
    billerDetails: '',
    mandateDuration: ''
  });

  const [userAccountSettings, setUserAccountSettings] = useState({
    password: '',
    contactInformation: ''
  });

  const handleApiChange = (e) => {
    setApiCredentials({ ...apiCredentials, [e.target.name]: e.target.value });
  };

  const handleSchedulerChange = (e) => {
    setSchedulerSettings({ ...schedulerSettings, [e.target.name]: e.target.value });
  };

  const handleUserAccountChange = (e) => {
    setUserAccountSettings({ ...userAccountSettings, [e.target.name]: e.target.value });
  };

  const handleApiSave = () => {
    console.log('API Credentials saved', apiCredentials);
  };

  const handleSchedulerSave = () => {
    console.log('Scheduler Settings saved', schedulerSettings);
  };

  const handleUserAccountSave = () => {
    console.log('User Account Settings saved', userAccountSettings);
  };

  return (
    <div className="container-fluid pt-4 px-4">
      <div className="row g-4">
        <div className="col-md-6">
          <div className="bg-light rounded h-100 p-4">
            <h6 className="mb-4">API Credentials</h6>
            <form>
              <div className="mb-3">
                <label htmlFor="mandateCreationApi" className="form-label">Mandate Creation API</label>
                <input
                  type="text"
                  className="form-control"
                  id="mandateCreationApi"
                  name="mandateCreationApi"
                  value={apiCredentials.mandateCreationApi}
                  onChange={handleApiChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="directDebitApi" className="form-label">Direct Debit API</label>
                <input
                  type="text"
                  className="form-control"
                  id="directDebitApi"
                  name="directDebitApi"
                  value={apiCredentials.directDebitApi}
                  onChange={handleApiChange}
                />
              </div>
              <button type="button" className="btn btn-primary" onClick={handleApiSave}>Save</button>
            </form>
          </div>
        </div>
        <div className="col-md-6">
          <div className="bg-light rounded h-100 p-4">
            <h6 className="mb-4">Scheduler Settings</h6>
            <form>
              <div className="mb-3">
                <label htmlFor="billerDetails" className="form-label">Biller Details</label>
                <input
                  type="text"
                  className="form-control"
                  id="billerDetails"
                  name="billerDetails"
                  value={schedulerSettings.billerDetails}
                  onChange={handleSchedulerChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="mandateDuration" className="form-label">Mandate Duration</label>
                <input
                  type="text"
                  className="form-control"
                  id="mandateDuration"
                  name="mandateDuration"
                  value={schedulerSettings.mandateDuration}
                  onChange={handleSchedulerChange}
                />
              </div>
              <button type="button" className="btn btn-primary" onClick={handleSchedulerSave}>Save</button>
            </form>
          </div>
        </div>
      </div>

      <div className="row g-4 pt-4">
        <div className="col-md-12">
          <div className="bg-light rounded h-100 p-4">
            <h6 className="mb-4">User Account Settings</h6>
            <form>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={userAccountSettings.password}
                  onChange={handleUserAccountChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="contactInformation" className="form-label">Contact Information</label>
                <input
                  type="text"
                  className="form-control"
                  id="contactInformation"
                  name="contactInformation"
                  value={userAccountSettings.contactInformation}
                  onChange={handleUserAccountChange}
                />
              </div>
              <button type="button" className="btn btn-primary" onClick={handleUserAccountSave}>Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
