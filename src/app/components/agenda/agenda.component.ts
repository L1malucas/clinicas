import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-agenda',
  standalone: true,
  imports: [NavbarComponent, CommonModule],
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css'],
})
export class AgendaComponent {
  buttonGroups: { [key: number]: string } = {
    0: 'Sim',
    1: 'Sim',
  };

  constructor(private router: Router) {}

  toggleButton(groupIndex: number, button: string) {
    this.buttonGroups[groupIndex] = button;
  }

  backToHome() {
    this.router.navigate(['/']);
  }
}
