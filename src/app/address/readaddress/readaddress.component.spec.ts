import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadaddressComponent } from './readaddress.component';

describe('ReadaddressComponent', () => {
  let component: ReadaddressComponent;
  let fixture: ComponentFixture<ReadaddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadaddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadaddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
