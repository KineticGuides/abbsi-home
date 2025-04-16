import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnHealthyLivingComponent } from './learn-healthy-living.component';

describe('LearnHealthyLivingComponent', () => {
  let component: LearnHealthyLivingComponent;
  let fixture: ComponentFixture<LearnHealthyLivingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnHealthyLivingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnHealthyLivingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
