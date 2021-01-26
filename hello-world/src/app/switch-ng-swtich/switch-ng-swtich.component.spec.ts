import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchNgSwtichComponent } from './switch-ng-swtich.component';

describe('SwitchNgSwtichComponent', () => {
  let component: SwitchNgSwtichComponent;
  let fixture: ComponentFixture<SwitchNgSwtichComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchNgSwtichComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchNgSwtichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
