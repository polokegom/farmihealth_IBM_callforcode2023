import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobVarService {

  authToken: any;
  userLat: any;
  userLon: any;
  isLoggedIn: boolean =false;
  pageSetFarmMap1: boolean = true;
  pageSetFarmMap2:boolean = false;
  pageSetFarmMap3:boolean = false;
  pageSetFarmMap4:boolean = false;


  constructor() { 

  }
}
