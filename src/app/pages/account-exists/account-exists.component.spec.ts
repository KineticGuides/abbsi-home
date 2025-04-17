import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountExistsComponent } from './account-exists.component';

describe('AccountExistsComponent', () => {
  let component: AccountExistsComponent;
  let fixture: ComponentFixture<AccountExistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountExistsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountExistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
