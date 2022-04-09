import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementSizePositionInfoPageComponent } from './element-size-position-info-page.component';

describe('ElementSizePositionInfoPageComponent', () => {
  let component: ElementSizePositionInfoPageComponent;
  let fixture: ComponentFixture<ElementSizePositionInfoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementSizePositionInfoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementSizePositionInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
