import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UniversityAboutComponent } from '../university-info/university-about.component';
import { MatIcon } from '@angular/material/icon';
import { Location } from '@angular/common';

@Component({
  selector: 'app-university-detail-page',
  standalone: true,
  imports: [UniversityAboutComponent, MatIcon],
  templateUrl: './university-detail-page.component.html',
  styleUrl: './university-detail-page.component.css',
})


export class UniversityDetailPageComponent {

  universityData: any = {}

  constructor(private route: ActivatedRoute, private location: Location) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


  goBack(): void {
    this.location.back();
  }


  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.universityData = {
        name: params.get('name'),
        country: params.get('country')
      }

    })
  }

}
