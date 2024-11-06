import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.css']
})
export class MenuHeaderComponent {
  @Output() toggleNavbar = new EventEmitter<void>();
  @Input() isNavbarVisible: boolean = true;

  onMenuClick() {
    this.toggleNavbar.emit(); 
  }
}
