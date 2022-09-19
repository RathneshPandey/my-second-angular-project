import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideAssetsComponent } from './side-assets.component';

describe('SideAssetsComponent', () => {
  let component: SideAssetsComponent;
  let fixture: ComponentFixture<SideAssetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideAssetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
