import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullsleevetshirtComponent } from './fullsleevetshirt.component';

describe('FullsleevetshirtComponent', () => {
  let component: FullsleevetshirtComponent;
  let fixture: ComponentFixture<FullsleevetshirtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FullsleevetshirtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullsleevetshirtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
