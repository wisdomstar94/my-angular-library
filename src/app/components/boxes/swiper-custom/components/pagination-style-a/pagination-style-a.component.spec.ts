import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationStyleAComponent } from './pagination-style-a.component';

describe('PaginationStyleAComponent', () => {
  let component: PaginationStyleAComponent;
  let fixture: ComponentFixture<PaginationStyleAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationStyleAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationStyleAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
