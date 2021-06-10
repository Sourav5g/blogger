import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridstersComponent } from './gridsters.component';

describe('GridstersComponent', () => {
  let component: GridstersComponent;
  let fixture: ComponentFixture<GridstersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridstersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridstersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
