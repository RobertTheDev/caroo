import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderProfileMenuComponent } from './header-profile-menu.component';

describe('HeaderProfileMenuComponent', () => {
  let component: HeaderProfileMenuComponent;
  let fixture: ComponentFixture<HeaderProfileMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderProfileMenuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderProfileMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
