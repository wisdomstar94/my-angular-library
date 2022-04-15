import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullPageBoxPageComponent } from './full-page-box-page.component';

describe('FullPageBoxPageComponent', () => {
  let component: FullPageBoxPageComponent;
  let fixture: ComponentFixture<FullPageBoxPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullPageBoxPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullPageBoxPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
