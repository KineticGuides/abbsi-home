import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StressLevelsComponent } from './stress-levels.component';

describe('StressLevelsComponent', () => {
  let component: StressLevelsComponent;
  let fixture: ComponentFixture<StressLevelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StressLevelsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StressLevelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
