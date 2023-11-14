import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ILogin } from 'src/app/interfaces/login';
import { AuthGaurdService } from '../../Shared/Services/auth-gaurd.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { Usercred } from '../../public/model/models';
import { UserService } from '../../Shared/Services/user.service';
import { Store } from '@ngrx/store';
import { MatDialog } from "@angular/material/dialog"
import { openPopup } from '../../Shared/store/common.action';

@Component({
  selector: 'app-signin-signup',
  templateUrl: './signin-signup.component.html',
  styleUrls: ['./signin-signup.component.css'],
})
export class SigninSignupComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private _authGuardService: AuthGaurdService,
    private _userService: UserService,
    private _store: Store,
    private dialog: MatDialog
  ) {}

  loginForm: FormGroup;
  message: string;
  returnUrl: string;
  faLock = faLock;
  model: ILogin = { userid: 'admin', password: 'admin@123' };
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
        this.router.navigate(['/products']);
      } else if (admin && _obj.password === this.model.password) {
        console.log('admin login successful');
        this.router.navigate(['/products']);
      }
    } else {
      this.message = 'Please check your userid and password';
    }
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('token', _obj.username);
  }

  FunctionAdd() {
    this.OpenPopup(0, 'Create Associate');
  }

  OpenPopup(code: number, title: string) {
    this.dialog.open(SigninSignupComponent, {
      width: '50%',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
      data: {
        code: code,
        title: title
      }
    })
  }

  resetlogin() {
    this.loginForm.reset();
  }
}
