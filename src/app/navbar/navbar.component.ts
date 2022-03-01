import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'pm-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {//navigation bar class

  @Input() username: string = '';//username holder

  public userAdmin: string = '';//admin username

  constructor(public dataService: DataService) {//dataService object
    
   }

   userLogout() {//when uses clicks on logout button
    this.username = '';//sign username to empty string
    this.dataService.userLogout = true;//sign userLogout to true
}

  ngOnInit(): void {
    this.userAdmin = this.dataService.admin.username;//sign userAdmin to admin username
  }

}
