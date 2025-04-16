import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnWeightLossComponent } from './learn-weight-loss.component';

describe('LearnWeightLossComponent', () => {
  let component: LearnWeightLossComponent;
  let fixture: ComponentFixture<LearnWeightLossComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnWeightLossComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnWeightLossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
