import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloaraComponent } from './floara.component';

describe('FloaraComponent', () => {
  let component: FloaraComponent;
  let fixture: ComponentFixture<FloaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloaraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
