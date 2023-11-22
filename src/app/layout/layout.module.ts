import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageLayoutComponent } from './page-layout/page-layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, PageLayoutComponent],
  imports: [CommonModule],
  exports: [PageLayoutComponent],
})
export class LayoutModule {}
