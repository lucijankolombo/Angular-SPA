import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'pm-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {//users list class

  public users: any = [];// users array 
  public isLoading: boolean = false;//if data is being loaded
  public currentUser: string = '';//user object clicked with button
  public currentUserData: string = '';//username of user clicked with button
  public userAdmin: string = '';//username of admin

  constructor(private http: HttpClient, public dataService: DataService) {}
  //objects of HttpClient and DataService class
  getUsers() {//fetch users from JSON file
    const url = 'https://run.mocky.io/v3/efcaa20a-6049-4dc0-9d28-6ece8529dac0?mocky-delay=10000ms';
    //JSON url
    this.http.get(url).subscribe( (res) => {//get users from URL
        this.users = res;//sign users array to users from JSON
        console.log(this.users);//log all users
        this.isLoading = true;//loading stops
        this.userAdmin = this.users[2];//get admin user
        console.log(this.userAdmin);//log admin user
        this.dataService.admin = this.userAdmin;//sign admin user to data service admin
    }, 
    err => {
      console.log(err);//log error
    });
}

  getOneUser(selectedUser: any) {//get single user
    console.log("Selected user username: ", selectedUser.username)//log selected used

    this.currentUser = selectedUser.username;//sign current user to selected user
    console.log(this.currentUser);//log selected user

    this.dataService.userSelected = selectedUser.username;//username of selected user
    console.log(this.dataService.userSelected);//log username of selected user

    this.dataService.userSelectedData = selectedUser;//sign selected user object to data service user
    console.log(this.dataService.userSelectedData);//log data service user

    this.dataService.userLogout = false;//user is logged in
}

  ngOnInit(): void {
    this.getUsers();//get all users on page init
  }
  
}
