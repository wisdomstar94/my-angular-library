import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CkeditorCustomComponent } from './ckeditor-custom.component';

describe('CkeditorCustomComponent', () => {
  let component: CkeditorCustomComponent;
  let fixture: ComponentFixture<CkeditorCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CkeditorCustomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CkeditorCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
