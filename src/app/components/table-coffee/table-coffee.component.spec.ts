import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCoffeeComponent } from './table-coffee.component';

describe('TableCoffeeComponent', () => {
  let component: TableCoffeeComponent;
  let fixture: ComponentFixture<TableCoffeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableCoffeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableCoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
