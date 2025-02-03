import { Component } from '@angular/core';
import { BindingComponent } from './binding/binding.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Escuela_Tecno';
}
