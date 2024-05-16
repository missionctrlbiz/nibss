import { FaEdit, FaTrash } from "react-icons/fa";

const Mandates = () => {
  return (
    <div className="container-fluid pt-4 px-4">
      <div className="bg-light text-center rounded p-4">
        <div className="d-flex align-items-center justify-content-between mb-4">
          <h4 className="mb-0" style={{ fontWeight: "600", color: "#356d00" }}>Mandates</h4>
          <button className="btn btn-primary btn-sm">Create Mandate</button>
        </div>
        <div className="table-responsive">
          <table className="table text-start align-middle table-bordered table-hover mb-0">
            <thead>
              <tr className="text-dark">
                <th scope="col">Biller</th>
                <th scope="col">Start Date</th>
                <th scope="col">End Date</th>
                <th scope="col">Status</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Replace this with actual data */}
              <tr>
                <td>Biller 1</td>
                <td>2024-05-01</td>
                <td>2024-06-01</td>
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
              {/* Repeat the above row for additional data */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Mandates;
