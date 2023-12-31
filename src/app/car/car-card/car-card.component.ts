import { Component, Input } from '@angular/core';
import ICar from '../../interfaces/car/Car';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrl: './car-card.component.scss',
})
export class CarCardComponent {
  @Input() car!: ICar;
}
