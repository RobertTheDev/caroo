import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarCardComponent } from './car-card/car-card.component';
import { NgOptimizedImage } from '@angular/common';

@NgModule({
  declarations: [CarCardComponent],
  imports: [CommonModule, NgOptimizedImage],
  exports: [CarCardComponent],
})
export class CarModule {}
