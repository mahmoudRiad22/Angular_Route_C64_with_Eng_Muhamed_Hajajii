import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexboxGrid } from './flexbox-grid';

describe('FlexboxGrid', () => {
  let component: FlexboxGrid;
  let fixture: ComponentFixture<FlexboxGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlexboxGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlexboxGrid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
