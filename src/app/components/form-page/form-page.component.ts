import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { MenuHeaderComponent } from '../menu-header/menu-header.component';

@Component({
  selector: 'app-form-page',
  standalone: true,
  imports: [CommonModule, NavbarComponent, MenuHeaderComponent],
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css'],
})
export class FormPageComponent {
  isNavbarVisible: boolean = false;
  navBarStyle = {
    position: 'absolute',
    zIndex: 100,
  };
  buttonGroups: { [key: number]: string } = {
    0: 'Sim',
    1: 'Não',
    2: 'Não',
    3: 'Não',
    4: 'Não',
    5: 'Não',
    6: 'Não',
    7: 'Não',
    8: 'Sim',
  };

  constructor(private router: Router) {}

  toggleNavbar() {
    this.isNavbarVisible = !this.isNavbarVisible;
  }

  toggleButton(groupIndex: number, button: string) {
    this.buttonGroups[groupIndex] = button;
  }

  backToHome() {
    this.router.navigate(['/']);
  }
}
