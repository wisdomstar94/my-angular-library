import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivPageComponent } from './div-page.component';

describe('DivPageComponent', () => {
  let component: DivPageComponent;
  let fixture: ComponentFixture<DivPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DivPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
