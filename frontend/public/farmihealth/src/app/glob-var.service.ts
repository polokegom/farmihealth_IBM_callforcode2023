import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobVarService {

  authToken: any;
  userLat: any;
  userLon: any;
  pageSetMap: any;
  pageSetTime:any;

  constructor() { 

  }
}
