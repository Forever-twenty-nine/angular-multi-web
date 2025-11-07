import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './Shared/footer/footer.component';
import { HeaderComponent } from './Shared/header/header.component';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  imports: [CommonModule, FooterComponent, HeaderComponent, RouterOutlet],
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'virtusway.angular.site';

  constructor(private translateService: TranslateService) {}

  ngOnInit() {
    // Establecer idioma por defecto
    this.translateService.setDefaultLang('es');
    this.translateService.use('es');
  }
}
