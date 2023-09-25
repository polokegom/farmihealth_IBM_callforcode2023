import { Component, Output, EventEmitter, OnInit  } from '@angular/core';
//@ts-ignore
import { AppID } from 'ibmcloud-appid-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(){}
  appID: AppID = null;
 //

 public tryclick(): void {
  alert("++++++++++++");
  this.appID = new AppID();
  alert("=============");

 }
}
