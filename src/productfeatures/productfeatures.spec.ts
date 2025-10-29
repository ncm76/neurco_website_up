import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Productfeatures } from './productfeatures';

describe('Productfeatures', () => {
  let component: Productfeatures;
  let fixture: ComponentFixture<Productfeatures>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Productfeatures]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Productfeatures);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
