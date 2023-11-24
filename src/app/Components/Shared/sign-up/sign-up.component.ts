import { Component, OnInit } from '@angular/core';
import { User } from '../../public/model/models';
import { UserService } from '../Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user: User[] = [];
  users: User = {
    id: 0,
    username: '',
    password: '',
    name: '',
    email: '',
    phone: '',
    role: '',
    gender: 'male',
    status: true
  }
  constructor(
    private _userService: UserService,
    private _router: Router
  ) {  }

  ngOnInit(): void {
    
  }

  signupUser(user: User){
    const result = this._userService.addUser(user);
    console.log(result);
    this.users = {
      id: 0,
      username: '',
      password: '',
      name: '',
      email: '',
      phone: '',
      role: '',
      gender: 'male',
      status: true
    }
  }

  login(){
    this._router.navigate(['/signIn'])
  }
}
