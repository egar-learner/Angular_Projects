import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForNgForComponent } from './for-ng-for.component';

describe('ForNgForComponent', () => {
  let component: ForNgForComponent;
  let fixture: ComponentFixture<ForNgForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForNgForComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForNgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
