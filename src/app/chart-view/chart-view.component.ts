import { Component } from '@angular/core';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-chart-view',
  templateUrl: './chart-view.component.html',
  styleUrls: ['./chart-view.component.scss']
})
export class ChartViewComponent {

  pieChartOptions: ChartOptions = {
    responsive: true,
  };


  pieChartData = {
    labels: [ [ 'Download', 'Sales' ], [ 'In', 'Store', 'Sales' ], 'Mail Sales' ],
    datasets: [ {
      data: [ 300, 500, 100 ]
    } ],
    legend: true,
    plugins: [],
  }

  constructor(){

  }

}
