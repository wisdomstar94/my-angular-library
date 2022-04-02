import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableStylePageComponent } from './table-style-page.component';

describe('TableStylePageComponent', () => {
  let component: TableStylePageComponent;
  let fixture: ComponentFixture<TableStylePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableStylePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableStylePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
