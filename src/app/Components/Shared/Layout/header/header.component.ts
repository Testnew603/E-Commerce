import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router) {  }

  myCart(path: string){
    if(path == 'home'){
      this.router.navigate(['/products'])
    }else if(path == 'cart'){
      this.router.navigate(['/cart'])
    }else{      
      this.router.navigate(['/signIn'])
    }
  }

}
