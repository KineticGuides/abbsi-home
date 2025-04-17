import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProtocolsComponent } from './my-protocols.component';

describe('MyProtocolsComponent', () => {
  let component: MyProtocolsComponent;
  let fixture: ComponentFixture<MyProtocolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyProtocolsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyProtocolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
