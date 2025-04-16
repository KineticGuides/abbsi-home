import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnSupplementsComponent } from './learn-supplements.component';

describe('LearnSupplementsComponent', () => {
  let component: LearnSupplementsComponent;
  let fixture: ComponentFixture<LearnSupplementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnSupplementsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnSupplementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
