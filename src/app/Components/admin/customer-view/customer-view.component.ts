import { Component, OnInit } from '@angular/core';
import { User } from '../../public/model/models';
import { UserService } from '../../Shared/Services/user.service';
import { MatDialog } from '@angular/material/dialog'
import { ViewPopupComponent } from './view-popup/view-popup.component';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit {

  users: User[] = [];
  id: number;
  username:string;
  name:string;
  email:string;
  phone:string;
  role:string;
  gender:string;
  status:boolean;

  constructor(
    private _userService: UserService,
    private _dialogBox: MatDialog
  ) { }

  ngOnInit(): void {
    this._userService.getAllUsers().subscribe(data => {
      this.users = data;
    })
  }

  viewUser(user: User){
    this.name = user['name'];
    this.gender = user['gender'];
    this.username = user['username'];
    this.email = user['email'];
    this.phone = user['phone'];
    this.role = user['role'];

    const dialogRef = this._dialogBox.open(ViewPopupComponent, {
      data: {
        id: user['id'],
        name: user['name'],
        gender: user['gender'],
        username: user['username'],
        email: user['email'],
        phone: user['phone'],
        role: user['role']
      }
    })
  }


}
