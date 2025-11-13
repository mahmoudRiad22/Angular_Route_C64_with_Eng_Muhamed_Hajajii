import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreConcepts } from './core-concepts';

describe('CoreConcepts', () => {
  let component: CoreConcepts;
  let fixture: ComponentFixture<CoreConcepts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreConcepts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoreConcepts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
