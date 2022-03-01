import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'pm-admin-only',
  templateUrl: './admin-only.component.html',
  styleUrls: ['./admin-only.component.css']
})
export class AdminOnlyComponent implements OnInit {//admin class

  public taskList: any = [];//list of task objects

  constructor(private http: HttpClient, public dataService: DataService) { }//http and dataService object

  getTaskList() {
    const url = 'https://run.mocky.io/v3/9571eb2c-56a7-46cc-80bf-9c1e341f1270';//get JSON file
    this.http.get(url).subscribe( (res) => {//get JSON data
      this.taskList = res;//sign taskList to JSON result
      console.log(this.taskList);//log task list
    }, 
    err => {
      console.log(err);//log error
    }
    )
  }

  ngOnInit(): void {
    this.getTaskList();//call method on page init
  }

}
