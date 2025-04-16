import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeptidesComponent } from './peptides.component';

describe('PeptidesComponent', () => {
  let component: PeptidesComponent;
  let fixture: ComponentFixture<PeptidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeptidesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeptidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
