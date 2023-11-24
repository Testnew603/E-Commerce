import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGaurdService } from '../Services/auth-gaurd.service';
import { UserService } from '../Services/user.service';
import { SharedService } from '../Services/shared.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usercred } from '../../public/model/models';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { ILogin } from 'src/app/interfaces/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private formBuilder: FormBuilder,
    private _router: Router,
    private _authGuardService: AuthGaurdService,
    private _userService: UserService,
    private _sharedService: SharedService
  ) { }

  loginForm: FormGroup;
  message: string;
  returnUrl: string;
  faLock = faLock;
  model: ILogin = { userid: 'admin', password: 'admin1' };
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.returnUrl = '/products';
    this._authGuardService.logout();
  }
  get f() {
    return this.loginForm.controls;
  }

  login() {
    if (this.loginForm.invalid) {
      return;
    }
    const _obj: Usercred = {
      username: this.loginForm.value.username as string,
      password: this.loginForm.value.password as string,
    };
    const user = this._userService.getLoginDetails(
      _obj.username,
      _obj.password
    );
    const admin = _obj.username === this.model.userid;

    if (user || admin) {
      if (user && user.role === 'user') {
        console.log(user.name + ' login successful');
        this._authGuardService.setToken(user.id);
        this._router.navigate(['/products', + user.id]);              
      } else if (admin && _obj.password === this.model.password) {
        console.log('admin login successful');
        this._router.navigate(['/dashboard']);
      }
    } else {
      this.message = 'Please check your userid and password';
    }
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('token', _obj.username);
  }

  signup(){
    this._router.navigate(['/signUp']);
  }

}
