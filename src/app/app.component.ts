import { Produto } from './models/produto';
import { Component } from '@angular/core';
import { ProdutosServicesService } from './services/produtos-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Groceries';
}
