import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CkeditorCustomPageComponent } from './ckeditor-custom-page.component';

describe('CkeditorCustomPageComponent', () => {
  let component: CkeditorCustomPageComponent;
  let fixture: ComponentFixture<CkeditorCustomPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CkeditorCustomPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CkeditorCustomPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
