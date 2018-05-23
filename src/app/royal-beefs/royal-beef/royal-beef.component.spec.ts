import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoyalBeefComponent } from './royal-beef.component';

describe('RoyalBeefComponent', () => {
  let component: RoyalBeefComponent;
  let fixture: ComponentFixture<RoyalBeefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoyalBeefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoyalBeefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
