import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FastFreeComponent } from './fast-free.component';

describe('FastFreeComponent', () => {
  let component: FastFreeComponent;
  let fixture: ComponentFixture<FastFreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FastFreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FastFreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
