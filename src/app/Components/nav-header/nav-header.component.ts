import { availableRoutes } from '../../Data/routes.data';
import { CommonModule } from '@angular/common';
import { Component, signal, computed } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { NavSelectLanguageComponent } from '../nav-select-language/nav-select-language.component';
import { RouteInfo } from '../../Models/route-info.model';
import { Router, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  imports: [CommonModule, NavSelectLanguageComponent, RouterLink, TranslateModule],
  selector: 'app-nav-header',
  standalone: true,
  templateUrl: './nav-header.component.html'
})
export class NavHeaderComponent {
  readonly availableRoutes = availableRoutes;

  // Signals para el estado de los menús desplegables
  private menuOpenState = signal(new Map<RouteInfo, boolean>());

  constructor(
    private router: Router,
    public languageService: LanguageService
  ) {}

  isRouteActive(route: RouteInfo): boolean {
    return this.router.isActive(route.routePrefix.en + route.path.en, true);
  }

  toggleDropdown(item: RouteInfo, open: boolean): void {
    if (item) {
      const newState = new Map(this.menuOpenState());
      newState.set(item, open);
      this.menuOpenState.set(newState);
    }
  }

  calculateDropdownClasses(item: RouteInfo): string {
    return this.menuOpenState().get(item) ? 'NavDropdown vir-nav-show' : 'NavDropdown';
  }
}
