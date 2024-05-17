import { useEffect } from 'react';
import Chart from 'chart.js/auto';

const Dashboard = () => {
  useEffect(() => {
    // Function to generate random data
    const generateRandomData = () => {
      return Array.from({ length: 7 }, () => Math.floor(Math.random() * 100));
    };

    // Revenue Trend chart
    const revenueChart = new Chart(document.getElementById('revenue-chart'), {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
          {
            label: 'Revenue Trend',
            data: generateRandomData(),
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            fill: true,
          },
        ],
      },
      options: {
        scales: {
          y: { beginAtZero: true },
        },
      },
    });

    // Transaction Trend chart
    const transactionChart = new Chart(document.getElementById('transaction-chart'), {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
          {
            label: 'Transaction Trend',
            data: generateRandomData(),
            backgroundColor: 'rgba(153, 102, 255, 0.5)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1,
            fill: true,
          },
        ],
      },
      options: {
        scales: {
          y: { beginAtZero: true },
        },
      },
    });

    return () => {
      revenueChart.destroy();
      transactionChart.destroy();
    };
  }, []);

  return (
    <div className="container-fluid pt-4 px-4">
      <div className="row g-4">
        <div className="col-sm-6 col-xl-3">
          <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
            <i className="fa fa-users fa-3x text-primary"></i>
            <div className="ms-3 d-flex flex-column align-items-end">
              <p className="mb-2">Total Billers</p>
              <h6 className="mb-0">134</h6>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-xl-3">
          <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
            <i className="fa fa-dollar fa-3x text-primary"></i>
            <div className="ms-3 d-flex flex-column align-items-end">
              <p className="mb-2">Total Transactions</p>
              <h6 className="mb-0">$567,808</h6>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-xl-3">
          <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
            <i className="fa fa-file-alt fa-3x text-primary"></i>
            <div className="ms-3 d-flex flex-column align-items-end">
              <p className="mb-2">Total Mandates</p>
              <h6 className="mb-0">411</h6>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-xl-3">
          <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
            <i className="fa fa-money fa-3x text-primary"></i>
            <div className="ms-3 d-flex flex-column align-items-end">
              <p className="mb-2">Total Revenue</p>
              <h6 className="mb-0">$128,734</h6>
            </div>
          </div>
        </div>

      </div>
      <div className="row g-4 pt-4">
        <div className="col-sm-12">
          <div className="bg-light rounded h-100 p-4">
          <h4 className="mb-0" style={{ fontWeight: "600", color: "#356d00" }}>Revenue Trend</h4>
            <canvas id="revenue-chart"></canvas>
          </div>
        </div>
      </div>
      <div className="row g-4 pt-4">
        <div className="col-sm-12">
          <div className="bg-light rounded h-100 p-4">
          <h4 className="mb-0" style={{ fontWeight: "600", color: "#356d00" }}>Transaction Trend</h4>
            <canvas id="transaction-chart"></canvas>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Dashboard;