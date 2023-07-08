import { Doughnut } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'


const Dashboard = () => {
  Chart.register(ArcElement);
  const data = {
    labels: ['Hardware', 'Software', 'Network'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <div className='flex h-screen w-full justify-center'>
      <h2>Donut Chart</h2>
      <div className='p-4 m-4'>
      <Doughnut data={data} />
      </div>
    </div>
  );
};


export default Dashboard