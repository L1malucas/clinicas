import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AgendaComponent } from './components/agenda/agenda.component';
import { FormPageComponent } from './components/form-page/form-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    NavbarComponent,
    FormPageComponent,
    AgendaComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'clinicas';
}
