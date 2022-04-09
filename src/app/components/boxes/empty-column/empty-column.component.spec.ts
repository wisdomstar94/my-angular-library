import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyColumnComponent } from './empty-column.component';

describe('EmptyColumnComponent', () => {
  let component: EmptyColumnComponent;
  let fixture: ComponentFixture<EmptyColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmptyColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
