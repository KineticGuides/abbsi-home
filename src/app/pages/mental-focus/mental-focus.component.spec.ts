import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentalFocusComponent } from './mental-focus.component';

describe('MentalFocusComponent', () => {
  let component: MentalFocusComponent;
  let fixture: ComponentFixture<MentalFocusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MentalFocusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentalFocusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
