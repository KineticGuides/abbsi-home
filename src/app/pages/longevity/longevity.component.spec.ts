import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongevityComponent } from './longevity.component';

describe('LongevityComponent', () => {
  let component: LongevityComponent;
  let fixture: ComponentFixture<LongevityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LongevityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LongevityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
