import { Component } from '@angular/core';
import companyName from '../../lib/constants/companyName';
import {
  faBars,
  faBell,
  faHeart,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  companyName = companyName;

  faBars = faBars;
  faBell = faBell;
  faHeart = faHeart;
  faUser = faUser;

  headerLinks = [
    {
      href: '/',
      name: 'Home',
    },
    {
      href: '/about',
      name: 'About',
    },
    {
      href: '/find-cars',
      name: 'Find Cars',
    },
    {
      href: '/sell',
      name: 'Sell',
    },
  ];
}
