import { Component, OnInit, AfterViewInit } from '@angular/core';
import Chart from 'chart.js';

const createDaysArrayForCurrentMonth = (): string[] => {
  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth() + 1;
  const daysInCurrentMonth = new Date(currentYear, currentMonth, 0).getDate();
  return Array(daysInCurrentMonth).fill(0).map((_, i) => {
    return `${i+1}/${currentMonth}`;
  });
}

@Component({
  selector: 'app-card-bar-chart',
  templateUrl: './card-bar-chart.component.html',
})
export class CardBarChartComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit() {}
  ngAfterViewInit() {
    const config = {
      type: 'bar',
      data: {
        labels: createDaysArrayForCurrentMonth(),
        datasets: [
          {
            label: 'Sales volume per day',
            backgroundColor: '#84C8B5',
            borderColor: '#84C8B5',
            data: [400, 608, 860, 740, 506, 600, 870, 400, 680, 806, 74, 56, 60, 807, 40, 68, 86, 740, 56, 600, 87, 40, 680, 86, 740, 56, 600, 870],
            fill: false,
            barThickness: 8,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: 'Orders Chart',
        },
        tooltips: {
          mode: 'index',
          intersect: false,
        },
        hover: {
          mode: 'nearest',
          intersect: true,
        },
        legend: {
          labels: {
            fontColor: 'rgba(0,0,0,.4)',
          },
          align: 'end',
          position: 'bottom',
        },
        scales: {
          xAxes: [
            {
              display: true,
              scaleLabel: {
                display: false,
                labelString: 'Month',
              },
              gridLines: {
                borderDash: [2],
                borderDashOffset: [2],
                color: 'rgba(33, 37, 41, 0.3)',
                zeroLineColor: 'rgba(33, 37, 41, 0.3)',
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: false,
                labelString: 'Value',
              },
              gridLines: {
                borderDash: [2],
                drawBorder: false,
                borderDashOffset: [2],
                color: 'rgba(33, 37, 41, 0.2)',
                zeroLineColor: 'rgba(33, 37, 41, 0.15)',
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };
    let ctx: any = document.getElementById('bar-chart');
    ctx = ctx.getContext('2d');
    new Chart(ctx, config);
  }
}
