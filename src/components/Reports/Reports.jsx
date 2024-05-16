import { useEffect } from 'react';
import Chart from 'chart.js/auto';

const Reports = () => {
  useEffect(() => {
    // Function to generate random data
    const generateRandomData = () => {
      return Array.from({ length: 7 }, () => Math.floor(Math.random() * 100));
    };

    // Revenue by Biller chart
    const revenueByBillerChart = new Chart(document.getElementById('revenueByBillerChart'), {
      type: 'bar',
      data: {
        labels: ['Biller1', 'Biller2', 'Biller3'],
        datasets: [
          {
            label: 'Revenue by Biller',
            data: generateRandomData(),
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: { beginAtZero: true },
        },
      },
    });

    // Transactions by Biller chart
    const transactionsByBillerChart = new Chart(document.getElementById('transactionsByBillerChart'), {
      type: 'bar',
      data: {
        labels: ['Biller1', 'Biller2', 'Biller3'],
        datasets: [
          {
            label: 'Transactions by Biller',
            data: generateRandomData(),
            backgroundColor: 'rgba(153, 102, 255, 0.5)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: { beginAtZero: true },
        },
      },
    });

    // Mandates by Biller chart
    const mandatesByBillerChart = new Chart(document.getElementById('mandatesByBillerChart'), {
      type: 'bar',
      data: {
        labels: ['Biller1', 'Biller2', 'Biller3'],
        datasets: [
          {
            label: 'Mandates by Biller',
            data: generateRandomData(),
            backgroundColor: 'rgba(255, 159, 64, 0.5)',
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: { beginAtZero: true },
        },
      },
    });

    // Revenue by Date Range chart
    const revenueByDateRangeChart = new Chart(document.getElementById('revenueByDateRangeChart'), {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
          {
            label: 'Revenue by Date Range',
            data: generateRandomData(),
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgba(54, 162, 235, 1)',
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

    // Transactions by Date Range chart
    const transactionsByDateRangeChart = new Chart(document.getElementById('transactionsByDateRangeChart'), {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
          {
            label: 'Transactions by Date Range',
            data: generateRandomData(),
            backgroundColor: 'rgba(255, 206, 86, 0.5)',
            borderColor: 'rgba(255, 206, 86, 1)',
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

    // Mandates by Date Range chart
    const mandatesByDateRangeChart = new Chart(document.getElementById('mandatesByDateRangeChart'), {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr'],
        datasets: [
          {
            label: 'Mandates by Date Range',
            data: generateRandomData(),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: 'rgba(255, 99, 132, 1)',
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
      revenueByBillerChart.destroy();
      transactionsByBillerChart.destroy();
      mandatesByBillerChart.destroy();
      revenueByDateRangeChart.destroy();
      transactionsByDateRangeChart.destroy();
      mandatesByDateRangeChart.destroy();
    };
  }, []);

  const handleGenerateReport = () => {
    // Logic to generate report
    console.log('Report generated');
  };

  return (
    <div className="container-fluid pt-4 px-4">
      <div className="row bg-light rounded p-4">
        <div className="col-md-12 text-center">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h4 className="mb-0" style={{ fontWeight: "600", color: "#356d00" }}>Reports</h4>
            <button className="btn btn-primary btn-sm" onClick={handleGenerateReport}>Generate Report</button>
          </div>
          <div className="row">
            <div className="col-md-4">
              <h5>Revenue by Biller</h5>
              <canvas id="revenueByBillerChart" width="400" height="400"></canvas>
            </div>
            <div className="col-md-4">
              <h5>Transactions by Biller</h5>
              <canvas id="transactionsByBillerChart" width="400" height="400"></canvas>
            </div>
            <div className="col-md-4">
              <h5>Mandates by Biller</h5>
              <canvas id="mandatesByBillerChart" width="400" height="400"></canvas>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6">
              <h5>Revenue by Date Range</h5>
              <canvas id="revenueByDateRangeChart" width="400" height="400"></canvas>
            </div>
            <div className="col-md-6">
              <h5>Transactions by Date Range</h5>
              <canvas id="transactionsByDateRangeChart" width="400" height="400"></canvas>
            </div>
          </div>
          <div className="row mt-4 vh-50">
            <div className="col-md-12">
              <h5>Mandates by Date Range</h5>
              <canvas id="mandatesByDateRangeChart" width="400" height="400"></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
