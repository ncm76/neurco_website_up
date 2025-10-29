import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Headernav } from './headernav';

describe('Headernav', () => {
  let component: Headernav;
  let fixture: ComponentFixture<Headernav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Headernav]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Headernav);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
