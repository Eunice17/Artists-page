import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaleroComponent } from './metalero.component';

describe('MetaleroComponent', () => {
  let component: MetaleroComponent;
  let fixture: ComponentFixture<MetaleroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetaleroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaleroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
