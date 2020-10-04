import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetalerosComponent } from './metaleros.component';

describe('MetalerosComponent', () => {
  let component: MetalerosComponent;
  let fixture: ComponentFixture<MetalerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetalerosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetalerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
