import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderLabsComponent } from './order-labs.component';

describe('OrderLabsComponent', () => {
  let component: OrderLabsComponent;
  let fixture: ComponentFixture<OrderLabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderLabsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderLabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
