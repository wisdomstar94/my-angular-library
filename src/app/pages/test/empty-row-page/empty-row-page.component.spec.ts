import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyRowPageComponent } from './empty-row-page.component';

describe('EmptyRowPageComponent', () => {
  let component: EmptyRowPageComponent;
  let fixture: ComponentFixture<EmptyRowPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmptyRowPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyRowPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
