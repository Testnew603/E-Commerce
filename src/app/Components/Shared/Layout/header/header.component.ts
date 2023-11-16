import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}


  flag = 0

  ngOnInit() {
    const routeParams: ParamMap | null = this.route.snapshot.paramMap;
    if (routeParams) {
      const userIdFromRoute: number = +routeParams.get('userId')!;
      console.log('User ID:', userIdFromRoute);
      if(userIdFromRoute > 0)
      this.flag=1;
      console.log(this.flag);
      

    } else {
      console.error('ParamMap is null');
    }
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
