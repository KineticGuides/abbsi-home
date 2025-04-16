import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BellyFatComponent } from './belly-fat.component';

describe('BellyFatComponent', () => {
  let component: BellyFatComponent;
  let fixture: ComponentFixture<BellyFatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BellyFatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BellyFatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
