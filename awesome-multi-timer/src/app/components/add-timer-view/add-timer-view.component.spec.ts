import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTimerViewComponent } from './add-timer-view.component';

describe('AddTimerViewComponent', () => {
  let component: AddTimerViewComponent;
  let fixture: ComponentFixture<AddTimerViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTimerViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTimerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
