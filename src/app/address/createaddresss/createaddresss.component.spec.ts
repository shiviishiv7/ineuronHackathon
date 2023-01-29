import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateaddresssComponent } from './createaddresss.component';

describe('CreateaddresssComponent', () => {
  let component: CreateaddresssComponent;
  let fixture: ComponentFixture<CreateaddresssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateaddresssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateaddresssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
