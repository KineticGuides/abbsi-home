import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnPeptidesComponent } from './learn-peptides.component';

describe('LearnPeptidesComponent', () => {
  let component: LearnPeptidesComponent;
  let fixture: ComponentFixture<LearnPeptidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnPeptidesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnPeptidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
