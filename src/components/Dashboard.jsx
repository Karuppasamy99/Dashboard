import { Doughnut } from 'react-chartjs-2';

const Dashboard = () => {
  const data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <div>
      <h2>Donut Chart</h2>
      <Doughnut data={data} />
    </div>
  );
};


export default Dashboard