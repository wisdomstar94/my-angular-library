import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollCheckPageComponent } from './scroll-check-page.component';

describe('ScrollCheckPageComponent', () => {
  let component: ScrollCheckPageComponent;
  let fixture: ComponentFixture<ScrollCheckPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollCheckPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollCheckPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
