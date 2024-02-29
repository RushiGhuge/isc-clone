import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-university-card',
  standalone: true,
  imports: [MatIconModule, RouterLink],
  templateUrl: './university-card.component.html',
  styleUrl: './university-card.component.css'
})


export class UniversityCardComponent {
  @Input() data: any = {}
}
