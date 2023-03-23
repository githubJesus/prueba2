import { Component } from "@angular/core";
import {ApexChart} from 'ng-apexcharts'


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = 'prueba2';
  chartOptions: any = {
    // series: [44, 55, 41, 17, 15],
    series: [15, 41, 55, 44, 17],
    chart: {
      type: 'pie',
      height: 150,
    },
    labels: ['Apple', 'Mango', 'Banana', 'Orange', 'Watermelon'],
  };
  
  chart: ApexChart = {
    type: 'pie',
    height: 150,
  };
  
  ngOnInit() {
    // asigna la propiedad chartOptions.chart a la propiedad chart
    this.chart = this.chartOptions.chart;
  }
     
}