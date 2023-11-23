import { Component } from '@angular/core';

@Component({
  selector: 'app-header-profile-menu',
  templateUrl: './header-profile-menu.component.html',
  styleUrl: './header-profile-menu.component.scss',
})
export class HeaderProfileMenuComponent {
  headerProfileMenuLinks = [
    {
      href: '/profile',
      name: 'Profile',
    },
    {
      href: '/edit-profile',
      name: 'Edit Profile',
    },
    {
      href: '/my-car-listings',
      name: 'My Car Listings',
    },
    {
      href: '/account-settings',
      name: 'Account Settings',
    },
  ];
}
