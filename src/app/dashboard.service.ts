import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  // add data
private storage_key = 'stoppageData';

  constructor() { }

  addData(newData:any):void{
    const currentData = this.getData();
    const updatedData = [...currentData,{
      id:currentData.length + 1 , ...newData
    }];
    localStorage.setItem(this.storage_key,JSON.stringify(updatedData));
  }
  getData():any[]{
const data = localStorage.getItem(this.storage_key);
return data ? JSON.parse(data):[];
  }
}
