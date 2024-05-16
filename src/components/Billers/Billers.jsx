import { FaEdit, FaTrash } from 'react-icons/fa'; // Import FontAwesome icons

const Billers = () => {
  return (
    <div className="container-fluid pt-4 px-4">
      <div className="bg-light text-center rounded p-4">
        <div className="d-flex align-items-center justify-content-between mb-4">
        <h4 className="mb-0" style={{ fontWeight: "600", color: "#356d00" }}>Billers</h4>
          <button className="btn btn-primary">Add Biller</button>
        </div>
        <div className="table-responsive">
          <table className="table text-start align-middle table-bordered table-hover mb-0">
            <thead>
              <tr className="text-dark">
                <th scope="col"><input className="form-check-input" type="checkbox" /></th>
                <th scope="col">Name</th>
                <th scope="col">Contact Information</th>
                <th scope="col">Status</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Sample data, replace with actual data */}
              <tr>
                <td><input className="form-check-input" type="checkbox" /></td>
                <td>John Doe</td>
                <td>john@example.com</td>
                <td>Active</td>
                <td>
                  <button className="btn btn-sm btn-primary me-2">
                    <FaEdit className="icon" /> Edit
                  </button>
                  <button className="btn btn-sm btn-danger">
                    <FaTrash className="icon" /> Delete
                  </button>
                </td>
              </tr>
              {/* Additional rows go here */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Billers;