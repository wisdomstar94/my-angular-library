import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowSizeBoxComponent } from './window-size-box.component';

describe('WindowSizeBoxComponent', () => {
  let component: WindowSizeBoxComponent;
  let fixture: ComponentFixture<WindowSizeBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WindowSizeBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowSizeBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
