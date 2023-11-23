import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageLayoutComponent } from './page-layout/page-layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderProfileMenuComponent } from './header-profile-menu/header-profile-menu.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    PageLayoutComponent,
    HeaderProfileMenuComponent,
  ],
  imports: [CommonModule, FontAwesomeModule],
  exports: [PageLayoutComponent],
})
export class LayoutModule {}
