import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-success-anima',
  templateUrl: './success-anima.component.html',
  styleUrls: ['./success-anima.component.css']
})
export class SuccessAnimaComponent implements AfterViewInit {
  @ViewChild('exampleModal') exampleModal!: ElementRef;

  constructor(private _router: Router) {  }

  ngAfterViewInit() {
    this.showModal();
    this.redirectAfterDelay();
  }

  showModal() {
    const modal: HTMLElement | null = this.exampleModal.nativeElement;
    if (modal) {
      modal.classList.add('show');
      modal.style.display = 'block';
    }
  }

  redirectAfterDelay() {
    setTimeout(() => {
      this._router.navigate(['/products']);}, 3000);
  }
}
