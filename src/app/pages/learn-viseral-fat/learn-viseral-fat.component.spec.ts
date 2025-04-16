import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnViseralFatComponent } from './learn-viseral-fat.component';

describe('LearnViseralFatComponent', () => {
  let component: LearnViseralFatComponent;
  let fixture: ComponentFixture<LearnViseralFatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnViseralFatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnViseralFatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
