import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UniversityAboutComponent } from '../university-about/university-about.component';
import { MatIcon } from '@angular/material/icon';
// import { FeeContai/nerComponent } from '../university-about/fee-container/fee-container.component';

@Component({
  selector: 'app-university-detail-page',
  standalone: true,
  imports: [UniversityAboutComponent, MatIcon],
  templateUrl: './university-detail-page.component.html',
  styleUrl: './university-detail-page.component.css',
})


export class UniversityDetailPageComponent {

  universityData: any = {}

  constructor(private route: ActivatedRoute) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
