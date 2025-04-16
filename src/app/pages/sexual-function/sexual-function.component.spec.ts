import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SexualFunctionComponent } from './sexual-function.component';

describe('SexualFunctionComponent', () => {
  let component: SexualFunctionComponent;
  let fixture: ComponentFixture<SexualFunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SexualFunctionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SexualFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
