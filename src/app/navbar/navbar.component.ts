import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { ExploreComponent } from '../explore/explore.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatIcon, ExploreComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})


export class NavbarComponent {

  isExplore = false

  exploreOnFocus(open: boolean) {
    console.log(this.isExplore);
    this.isExplore = open
  }



}
