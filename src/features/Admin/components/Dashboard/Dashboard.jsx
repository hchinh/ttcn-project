import { Grid } from '@material-ui/core';
import statusCards from 'assets/data/card-data.json';
import StatusCard from 'components/StatusCard/StatusCard';
import React from 'react';
import './Dashboard.scss';
import Chart from 'react-apexcharts';

Dashboard.propTypes = {};

const chartOptions = {
  series: [
    {
      name: 'Online',
      data: [40, 70, 20, 90, 36, 80, 30, 91, 60, 20],
    },
    {
      name: 'Store',
      data: [50, 30, 70, 80, 40, 16, 40, 20, 51, 10],
    },
  ],
  options: {
    color: ['#6ab04c', '#2980b9'],
    chart: {
      background: 'transparent',
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
      ],
    },
    legend: {
      position: 'top',
    },
    grid: {
      show: false,
    },
  },
};

function Dashboard(props) {
  return (
    <div className="dashboard">
      <h3 className="dashboard__header">Dashboard</h3>
      <Grid container spacing={3}>
        <Grid item lg={6}>
          <Grid container spacing={3}>
            {statusCards.map((item, index) => (
              <Grid item lg={6}>
                <StatusCard
                  icon={item.icon}
                  count={item.count}
                  title={item.title}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item lg={6}>
          <div className="dashboard__card dashboard__full-height">
            <Chart
              options={chartOptions.options}
              series={chartOptions.series}
              type="line"
              height="100%"
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;
