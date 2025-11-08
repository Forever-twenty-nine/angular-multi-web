import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  services = [
    { icon: 'computer', key: 'service1' },
    { icon: 'smartphone', key: 'service2' },
    { icon: 'cloud', key: 'service3' }
  ];

  features = ['point1', 'point2', 'point3', 'point4'];
}
