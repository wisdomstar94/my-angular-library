import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionBoxComponent } from './accordion-box.component';

describe('AccordionBoxComponent', () => {
  let component: AccordionBoxComponent;
  let fixture: ComponentFixture<AccordionBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
