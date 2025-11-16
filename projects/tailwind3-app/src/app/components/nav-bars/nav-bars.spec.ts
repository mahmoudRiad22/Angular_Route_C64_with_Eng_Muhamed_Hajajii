import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBars } from './nav-bars';

describe('NavBars', () => {
  let component: NavBars;
  let fixture: ComponentFixture<NavBars>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBars]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBars);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
