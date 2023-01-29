import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerorderdetailsComponent } from './sellerorderdetails.component';

describe('SellerorderdetailsComponent', () => {
  let component: SellerorderdetailsComponent;
  let fixture: ComponentFixture<SellerorderdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerorderdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerorderdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
