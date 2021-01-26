import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfNgIfComponent } from './if-ng-if.component';

describe('IfNgIfComponent', () => {
  let component: IfNgIfComponent;
  let fixture: ComponentFixture<IfNgIfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IfNgIfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IfNgIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
