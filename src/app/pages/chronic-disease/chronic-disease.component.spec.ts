import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChronicDiseaseComponent } from './chronic-disease.component';

describe('ChronicDiseaseComponent', () => {
  let component: ChronicDiseaseComponent;
  let fixture: ComponentFixture<ChronicDiseaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChronicDiseaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChronicDiseaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
