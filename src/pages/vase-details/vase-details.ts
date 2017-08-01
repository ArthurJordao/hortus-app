import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Chart } from 'chart.js'

/**
 * Generated class for the VaseDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-vase-details',
  templateUrl: 'vase-details.html',
})
export class VaseDetailsPage {
  humidityChart: any;
  luminosityChart: any;
  temperatureChart: any;
  vase: any;
  @ViewChild("humidityCanvas") humidityCanvas;
  @ViewChild("luminosityCanvas") luminosityCanvas;
  @ViewChild("temperatureCanvas") temperatureCanvas;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private viewCtrl: ViewController) {
  }

  ngAfterViewInit() {
    this.vase = this.navParams.get('vase');
    let humidityData = [];
    let temperatureData = [];
    let luminosityData = []
    let label = [];
    let position = 0;
    this.vase.data.forEach(element => {
      label.push(++position);
      humidityData.push(parseFloat(element.humidity));
      temperatureData.push(parseFloat(element.temperature));
      luminosityData.push(parseFloat(element.luminosity));
    });
    this.humidityChart = this.drawChart(humidityData, label, this.humidityCanvas, "humidade");
    this.luminosityChart = this.drawChart(luminosityData, label, this.luminosityCanvas, "luminosidade");
    this.temperatureChart = this.drawChart(temperatureData, label, this.temperatureCanvas, "temperatura");
  }

  exit() {
    this.viewCtrl.dismiss();
  }


  drawChart(data: any[], labels: any[], canvas, label): any {
    return new Chart(canvas.nativeElement, {

      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: label,
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: data,
            spanGaps: false,
          }
        ]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }

    });
  }
}
