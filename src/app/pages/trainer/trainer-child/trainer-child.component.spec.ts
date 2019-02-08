import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerChildComponent } from './trainer-child.component';

describe('TrainerChildComponent', () => {
  let component: TrainerChildComponent;
  let fixture: ComponentFixture<TrainerChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainerChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
