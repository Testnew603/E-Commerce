import { Component, Inject, Optional } from '@angular/core';
import { User } from 'src/app/Components/public/model/models';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserService } from 'src/app/Components/Shared/Services/user.service';

@Component({
  selector: 'app-view-popup',
  templateUrl: './view-popup.component.html',
  styleUrls: ['./view-popup.component.css']
})
export class ViewPopupComponent {
  id: number;
  username:string;
  password:string;
  name:string;
  email:string;
  phone:string;
  role:string;
  gender:string;
  status:boolean;

  constructor(
    private _userService: UserService,
    public dialogRef: MatDialogRef<ViewPopupComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
  ) { 
      this.id = data.id;      
      this.name = data.name;
      this.gender = data.gender;
      this.username = data.username;
      this.email = data.email;
      this.phone = data.phone;
      this.role = data.role;
    }
}
