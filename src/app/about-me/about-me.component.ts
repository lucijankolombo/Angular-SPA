import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'pm-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})

export class AboutMeComponent implements OnInit {//about route class

  constructor(public dataService: DataService) {}//dataService object

  
  ngOnInit(): void {
    console.log(this.dataService.userSelected);//log data in console
    console.log(this.dataService.userSelectedData);//log data in console
  }
}
