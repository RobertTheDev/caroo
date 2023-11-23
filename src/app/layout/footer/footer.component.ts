import { Component } from '@angular/core';
import companyName from '../../lib/constants/companyName';
import currentYear from '../../lib/constants/currentYear';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  companyName = companyName;

  currentYear = currentYear;

  footerLinks = [
    {
      url: '/about',
      name: 'About',
    },
    {
      url: '/accessibility-statement',
      name: 'Accessibility Statement',
    },
    {
      url: '/privacy-policy',
      name: 'Privacy Policy',
    },
    {
      url: '/terms-and-conditions',
      name: 'Terms and Conditions',
    },
  ];
}
