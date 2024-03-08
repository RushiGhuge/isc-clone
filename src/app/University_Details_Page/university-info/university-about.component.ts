import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { HighlightsComponent } from '../highlights/highlights.component';
import { QuickPollComponent } from '../quick-poll/quick-poll.component';
import { TrendingCoursesComponent } from '../trending-courses/trending-courses.component';
import { SimilarUniversityComponent } from '../similar-university/similar-university.component';
// import { FeeContainerComponent } from './fee-container/fee-container.component';

@Component({
  selector: 'app-university-about',
  standalone: true,
  imports: [MatIconModule, RouterLink, HighlightsComponent, QuickPollComponent, TrendingCoursesComponent, SimilarUniversityComponent],
  templateUrl: './university-about.component.html',
  styleUrl: './university-about.component.css'
})
export class UniversityAboutComponent {

  @Input() data: any = {}
  @ViewChild('navButtons') navButtons!: ElementRef



  scrollToSection(section: HTMLDivElement, event: any) {
    let elements = this.navButtons.nativeElement.children
    for (let i = 0; i < elements.length; i++) {
      elements[i].children[0].style.borderBottom = 'none'
      elements[i].children[0].style.color = 'black'
    }
    event.target.style.borderBottom = '3px solid #00aff0'
    event.target.style.color = '#00aff0'

    section.scrollIntoView({ behavior: 'smooth', block: "center" })
  }

}
