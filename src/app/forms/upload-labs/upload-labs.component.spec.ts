import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadLabsComponent } from './upload-labs.component';

describe('UploadLabsComponent', () => {
  let component: UploadLabsComponent;
  let fixture: ComponentFixture<UploadLabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadLabsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadLabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
