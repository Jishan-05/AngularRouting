import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HalfsleevetshirtComponent } from './halfsleevetshirt.component';

describe('HalfsleevetshirtComponent', () => {
  let component: HalfsleevetshirtComponent;
  let fixture: ComponentFixture<HalfsleevetshirtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HalfsleevetshirtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HalfsleevetshirtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
