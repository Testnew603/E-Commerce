import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthGaurdService } from '../../Services/auth-gaurd.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _authGuardService: AuthGaurdService
  ) {}
  
  flag=0
  ngOnInit() {
    const userId = this._authGuardService.getToken() as number
    if(userId > 0)
      this.flag = 1
      console.log('User ID:', userId);
  }

  myCart(path: string) {
    if (path === 'home') {
      this.router.navigate(['/products']);
    } else if (path === 'cart') {
      this.router.navigate(['/cart']);
    } else {
      this.router.navigate(['/signIn']);
    }
  }
}
