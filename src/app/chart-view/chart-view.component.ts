import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-chart-view',
  templateUrl: './chart-view.component.html',
  styleUrls: ['./chart-view.component.scss']
})
export class ChartViewComponent {


  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'right',
      },
      title: {
        display: true,
        text: "Sale Details",
        font: {
          size: 24,
        }
      },
      datalabels: {
        formatter: (value, ctx) => {
          if (ctx.chart.data.labels) {
            return ctx.chart.data.labels[ctx.dataIndex];
          }
        },
      },
    }
  };

  


  pieChartData = {
    labels: [ [ 'Download', 'Sales' ], [ 'In', 'Store', 'Sales' ], 'Mail Sales', 'Logistics Sales', 'Hardware  Sales' ],
    datasets: [ {
      data: [ 300, 500, 100 , 400 , 300 ]
    } ],
    legend: true,
    plugins: [DatalabelsPlugin],
  }

  constructor(){

  }

}
