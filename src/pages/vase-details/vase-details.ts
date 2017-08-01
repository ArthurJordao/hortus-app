import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
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
  vase: any;
  @ViewChild("humidityCanvas") humidityCanvas;

  constructor(public navCtrl: NavController, public navParams: NavParams, modal: ModalController) {
  }

  ngAfterViewInit() {
    this.vase = this.navParams.get('vase');
    let humidityData = [];
    let label = [];
    let position = 0;
    this.vase.data.forEach(element => {
      label.push(position++);
      humidityData.push(parseFloat(element.humidity));
    });
    console.log(humidityData);
    this.humidityChart = new Chart(this.humidityCanvas.nativeElement, {

      type: 'line',
      data: {
        labels: label,
        datasets: [
          {
            label: "Humidade",
            fill: true,
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
            data: humidityData,
            spanGaps: false,
          }
        ]
      }

    })
  }

}
