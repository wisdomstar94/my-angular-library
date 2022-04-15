import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullPageBoxComponent } from './full-page-box.component';

describe('FullPageBoxComponent', () => {
  let component: FullPageBoxComponent;
  let fixture: ComponentFixture<FullPageBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullPageBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullPageBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
