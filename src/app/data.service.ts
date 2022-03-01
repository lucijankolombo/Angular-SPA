import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {//data service class

  public userSelected: string = '';//shared username of selected user
  public userSelectedData: any = {};//shared object of selected user
  public userLogout: boolean = true;//check if user logged in
  public admin: any = {};//shared admin object

  constructor() { }//empty constructor method
}
