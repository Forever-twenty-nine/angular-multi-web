import { availableRoutes } from '../../Data/routes.data';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
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

  isDropdownOpen = false;
  isTopDropdownOpen = false;
  availableRoutes: RouteInfo[] = availableRoutes;
  menuOpenState: Map<any, boolean> = new Map();
  menuOpenStateTop: Map<any, boolean> = new Map();

  constructor(
    private router: Router,
    public languageService: LanguageService
  ) { }

  isRouteActive(route: RouteInfo) {
    return this.router.isActive(route.routePrefix.en + route.path.en, true);
  }

  toggleDropdown(item: any, open: boolean) {
    if (item) {
      this.menuOpenState.set(item, open);
      this.menuOpenStateTop.set(item, open);
    }
  }

  calculateDropdownClasses(item: any) {
    return this.menuOpenState.get(item) ? 'NavDropdown vir-nav-show' : 'NavDropdown';
  }
}
