import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperPageComponent } from './swiper-page.component';

describe('SwiperPageComponent', () => {
  let component: SwiperPageComponent;
  let fixture: ComponentFixture<SwiperPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwiperPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwiperPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
