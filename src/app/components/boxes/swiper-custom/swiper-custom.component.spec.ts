import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperCustomComponent } from './swiper-custom.component';

describe('SwiperCustomComponent', () => {
  let component: SwiperCustomComponent;
  let fixture: ComponentFixture<SwiperCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwiperCustomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwiperCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
