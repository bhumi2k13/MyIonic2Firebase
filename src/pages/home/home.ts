import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {Http} from '@angular/http';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  http: Http;

  constructor(http: Http, public navCtrl: NavController, public navParams: NavParams) {
    this.http = http;
    this.navParams = navParams;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

makeGetRequest() {
    this.http.get("https://httpbin.org/ip")
    .subscribe(data => {
      console.log(data);
      //  var alert = Alert.arguments({
        //     title: "Your IP Address",
        //     subTitle: data.json().origin,
        //     buttons: ["close"]
        // });
        // this.navParams.get(alert);
    }, error => {
        console.log(JSON.stringify(error.json()));
    });
}

makePostRequest() {
    this.http.post("https://httpbin.org/post", "firstname=Nic")
    .subscribe(data => {
      console.log(data);
        // var alert = Alert.arguments({
        //     title: "Data String",
        //     subTitle: data.json().data,
        //     buttons: ["close"]
       // });
       // this.navParams.data(alert);
    }, error => {
        console.log(JSON.stringify(error.json()));
    });
}

}
