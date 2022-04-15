import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfinityScrollPageComponent } from './infinity-scroll-page.component';

describe('InfinityScrollPageComponent', () => {
  let component: InfinityScrollPageComponent;
  let fixture: ComponentFixture<InfinityScrollPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfinityScrollPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfinityScrollPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
