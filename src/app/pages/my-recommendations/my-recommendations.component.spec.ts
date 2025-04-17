import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRecommendationsComponent } from './my-recommendations.component';

describe('MyRecommendationsComponent', () => {
  let component: MyRecommendationsComponent;
  let fixture: ComponentFixture<MyRecommendationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyRecommendationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyRecommendationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
