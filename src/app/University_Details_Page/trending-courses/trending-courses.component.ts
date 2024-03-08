import { Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-trending-courses',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './trending-courses.component.html',
  styleUrl: './trending-courses.component.css'
})


export class TrendingCoursesComponent {
  @Input() data:any;
}
