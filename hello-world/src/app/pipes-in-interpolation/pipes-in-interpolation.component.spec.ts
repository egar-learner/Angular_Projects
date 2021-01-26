import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesInInterpolationComponent } from './pipes-in-interpolation.component';

describe('PipesInInterpolationComponent', () => {
  let component: PipesInInterpolationComponent;
  let fixture: ComponentFixture<PipesInInterpolationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipesInInterpolationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesInInterpolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
