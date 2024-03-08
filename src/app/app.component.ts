import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { NavbarComponent } from '././navbar/navbar.component';
import { NavbarComponent } from './Common_Componants/navbar/navbar.component';
import { FooterComponent } from './Common_Componants/footer/footer.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ScrollToTopComponent } from './Common_Componants/scroll-to-top/scroll-to-top.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, HttpClientModule, ScrollToTopComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [HttpClientModule, HttpClient], 
})



export class AppComponent {

}
