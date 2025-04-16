import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnMedicationsComponent } from './learn-medications.component';

describe('LearnMedicationsComponent', () => {
  let component: LearnMedicationsComponent;
  let fixture: ComponentFixture<LearnMedicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnMedicationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnMedicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
