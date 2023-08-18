import React from 'react';

const DashboardComp = ({ completedTasks, pendingTasks })=>{
  useEffect(() => {
    const data = {
      labels: ['Completed', 'Pending'],
      datasets: [
        {
          data: [
            completedTasks.filter((task) => task.completed).length,
            pendingTasks.filter((task) => !task.completed).length,
          ],
          backgroundColor: ['rgb(75, 192, 192)', 'rgb(255, 205, 86)'],
          borderColor: ['rgb(75, 192, 192)', 'rgb(255, 205, 86)'],
          borderWidth: 2,
        },
      ],
    };
  
    const options = {
      scales: {
        xAxes: [
          {
            display: false,
          },
        ],
        yAxes: [
          {
            display: false,
          },
        ],
      },
    };
  
    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
      type: 'doughnut',
      data: data,
      options: options,
    });
  }, [completedTasks, pendingTasks]);
  return (
    <>
      {/* doughnut chart */}
      <h1 className="w-[150px] mx-auto mt-10 text-xl font-semibold capitalize ">Doughnut Chart</h1>
      <div className="w-[1100px] h-screen flex mx-auto my-auto">
        <div className='border border-gray-400 pt-0 rounded-xl w-full h-fit my-auto  shadow-xl pb-2'>
          <canvas id='myChart'></canvas>
        </div>
      </div>
    </>
  );
}
export default DashboardComp;