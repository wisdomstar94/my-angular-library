import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyColumnPageComponent } from './empty-column-page.component';

describe('EmptyColumnPageComponent', () => {
  let component: EmptyColumnPageComponent;
  let fixture: ComponentFixture<EmptyColumnPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmptyColumnPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyColumnPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
