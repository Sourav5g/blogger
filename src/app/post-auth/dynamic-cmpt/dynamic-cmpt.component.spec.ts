import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicCmptComponent } from './dynamic-cmpt.component';

describe('DynamicCmptComponent', () => {
  let component: DynamicCmptComponent;
  let fixture: ComponentFixture<DynamicCmptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicCmptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicCmptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
