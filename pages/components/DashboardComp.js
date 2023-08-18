import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

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
    const MyDogChart = new Chart(ctx, {
      type: 'doughnut',
      data: data,
      options: options,
    });
      // Bar Chart
  const barChartCanvas = document.getElementById('barChart').getContext('2d');
  const barChart = new Chart(barChartCanvas, {
    type: 'bar',
    data: {
      labels: ['Completed', 'Pending'],
      datasets: [
        {
          label: 'Tasks',
          data: [
            completedTasks.filter((task) => task.completed).length,
            pendingTasks.filter((task) => !task.completed).length,
          ],
          backgroundColor: ['rgb(75, 192, 192)', 'rgb(255, 205, 86)'],
          borderColor: ['rgb(75, 192, 192)', 'rgb(255, 205, 86)'],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  // Line Chart
  const lineChartCanvas = document.getElementById('lineChart').getContext('2d');
  const LineChart = new Chart(lineChartCanvas, {
    type: 'line',
    data: {
      labels: completedTasks.map(task=>task.title),
      datasets: [
        {
          label: 'Tomato',
          data: completedTasks.map((task) => task.tomato),
          borderColor: 'rgb(75, 192, 192)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  // Scatter Plot
  const lowPriorityTasks = completedTasks.filter((task) => task.priority === 'Low').length;
    const mediumPriorityTasks = completedTasks.filter((task) => task.priority === 'Medium').length;
    const highPriorityTasks = completedTasks.filter((task) => task.priority === 'High').length;

  const scatterPlotCanvas = document.getElementById('scatterPlot').getContext('2d');
  const SChart = new Chart(scatterPlotCanvas, {
    type: 'scatter',
    data: {
      datasets: [
        {
          label: 'Tasks',
          data: [
            { x: 'Low', y: lowPriorityTasks },
            { x: 'Medium', y: mediumPriorityTasks },
            { x: 'High', y: highPriorityTasks },
          ],
          backgroundColor: 'rgb(75, 192, 192)',
          borderColor: 'rgb(75, 192, 192)',
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        x: {
          type: 'category',
          position: 'bottom',
          labels: ['Low', 'Medium', 'High'],
          scaleLabel: {
            display: true,
            labelString: 'Priority Level',
          },
        },
        y: {
          type: 'linear',
          position: 'left',
          ticks: {
            stepSize: 1,
            beginAtZero: true,
          },
          scaleLabel: {
            display: true,
            labelString: 'Number of Tasks',
          },
        },
      },
    },
  });
    return ()=>{
      MyDogChart.destroy();
      SChart.destroy();
      barChart.destroy();
      LineChart.destroy();
    }
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

      <h1 className="w-[150px] mx-auto mt-10 text-xl font-semibold capitalize ">Bar Chart</h1>
      <div className="w-[1100px] h-screen flex mx-auto my-auto">
        <div className='border border-gray-400 pt-0 rounded-xl w-full h-fit my-auto  shadow-xl pb-2'>
          <canvas id='barChart'></canvas>
        </div>
      </div>

      <h1 className="w-[150px] mx-auto mt-10 text-xl font-semibold capitalize ">Line Chart</h1>
      <div className="w-[1100px] h-screen flex mx-auto my-auto">
        <div className='border border-gray-400 pt-0 rounded-xl w-full h-fit my-auto  shadow-xl pb-2'>
          <canvas id='lineChart'></canvas>
        </div>
      </div>

      <h1 className="w-[150px] mx-auto mt-10 text-xl font-semibold capitalize ">Scatter Chart</h1>
      <div className="w-[1100px] h-screen flex mx-auto my-auto">
        <div className='border border-gray-400 pt-0 rounded-xl w-full h-fit my-auto  shadow-xl pb-2'>
          <canvas id='scatterPlot'></canvas>
        </div>
      </div>

    </>
  );
}
export default DashboardComp;