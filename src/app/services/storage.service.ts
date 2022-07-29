import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  
  getData(key: string): any{
    //jib donner ml navigateur ( local storage)
  let arrayfromstorage = localStorage.getItem("Todo_List")
  // convert objet to string
  let array= JSON.stringify(arrayfromstorage);
  // convert from string to tableau / 3la 2emme niveau)
  var parse= JSON.parse(JSON.parse(array))
  return parse
  }



  setData(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
  }
}
