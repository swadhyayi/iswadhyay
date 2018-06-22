import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProfileItemComponent } from './single-profile-item.component';

describe('SingleProfileItemComponent', () => {
  let component: SingleProfileItemComponent;
  let fixture: ComponentFixture<SingleProfileItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleProfileItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleProfileItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
