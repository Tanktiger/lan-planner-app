import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoyalBeefsComponent } from './royal-beefs.component';

describe('RoyalBeefsComponent', () => {
  let component: RoyalBeefsComponent;
  let fixture: ComponentFixture<RoyalBeefsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoyalBeefsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoyalBeefsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
