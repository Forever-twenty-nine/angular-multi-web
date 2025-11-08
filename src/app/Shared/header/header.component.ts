import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavHeaderComponent } from '../../Components/nav-header/nav-header.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  imports: [CommonModule, NavHeaderComponent, TranslateModule],
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
