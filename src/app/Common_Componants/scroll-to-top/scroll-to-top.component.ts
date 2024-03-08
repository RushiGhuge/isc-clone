import { Component, HostListener } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-scroll-to-top',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './scroll-to-top.component.html',
  styleUrl: './scroll-to-top.component.css'
})
export class ScrollToTopComponent {

  showScrollBtn = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const showScrollBtn = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.showScrollBtn = showScrollBtn > 200
  }

  getTop() {
    window.scrollTo({ top: 0 })
  }

}
