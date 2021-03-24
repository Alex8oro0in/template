import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ApexOptions, ChartComponent} from 'ng-apexcharts';
import {ChartData} from '../../interfaces/chartdata';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {
  // Chart Data
  @Input() setTooltip: boolean;
  @Input() dataG: ChartData;
//  @Input() heightG: string;
  traderId = 'Trader ID: bc01189-ui1798067-29828w';
  // Apex Chart
  @ViewChild('chart', {static: false}) chart: ChartComponent;
  public chartOptions: Partial<ApexOptions>;

  constructor() {
    this.chartOptions = {
      colors: ['#38B1DC', '#7B32E8'],
      series: [
        {
          name: 'blue',
          data: [190, 80, 150, 220],
        },
        {
          name: 'purple',
          data: [45, 100, 79, 500],
        }],
      chart: {
        height: 150,
        type: 'line',
        toolbar: {
          show: false,
        },
      },
      title: {
        text: '',
        offsetX: 27,
        style: {
          color: '#DCDCDC',
          fontSize: '16px',
          fontFamily: 'Lato',
        },
      },
      legend: {
        show: false,
      },
      markers: {
        size: 4,
        hover: {
          size: 6,
        }
      },

      stroke: {
        curve: 'smooth',
        lineCap: 'square',
        width: 2,
      },
      xaxis: {
        axisTicks: {
          show: true,
          borderType: 'solid',
          color: '#959595',
          height: 6,
          offsetX: 0,
          offsetY: 0
        },
        categories: ['January', 'February', 'March', 'April'],
        labels: {
          style: {
            colors: '#959595',
          },
        },
      },
      yaxis: {
        show: true,
        tickAmount: 4,
        labels: {
          style: {
            colors: '#959595',
            fontSize: '10px',
          },
        },
      },
      grid: {
        borderColor: '#959595',
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      tooltip: {
        custom: ({  series,  dataPointIndex }) => {
          return (
            '<div class="border-2 p-1" style="background-color: #EBF7FB; width: fit-content">' +
            '<div class="txt-10 txt-color txt-bold">' + this.dataG.xArray[dataPointIndex] +
            '</div><div class="txt-10 txt-color">' + this.traderId +
            '</div><div class="d-flex"><div class="square-6 back-blue mr-1 my-auto"></div>' +
            '<div class="txt-10 txt-color">' + this.dataG.title[0] + ': ' +
            series[0][dataPointIndex] + '</div></div>' +
            '<div class="d-flex"><div class="square-6 back-purple mr-1 my-auto"> </div>' +
            '<div class="txt-10 txt-color">' + this.dataG.title[1] + ': ' + series[1][dataPointIndex] +
            '</div></div></div>'
          );
        },
        enabled: true,
      },
    };

  }

  ngOnInit(): void {
    this.chartOptions.tooltip.enabled = this.dataG.tooltipEnable;
    this.chartOptions.xaxis.categories = this.dataG.xArray;
    this.chartOptions.colors =  [this.dataG.color1, this.dataG.color2];
    this.chartOptions.series = [{data: this.dataG.data1}, {data: this.dataG.data2}];
    console.log('height :  ', this.dataG.height);
    if ( this.dataG.height !== 0) { this.chartOptions.chart.height = this.dataG.height; }
    console.log('height :  ', this.chartOptions.chart.height);
  }

}
