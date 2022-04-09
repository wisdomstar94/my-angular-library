import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionBoxPageComponent } from './accordion-box-page.component';

describe('AccordionBoxPageComponent', () => {
  let component: AccordionBoxPageComponent;
  let fixture: ComponentFixture<AccordionBoxPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionBoxPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionBoxPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
