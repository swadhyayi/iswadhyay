import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCardItenComponent } from './profile-card-iten.component';

describe('ProfileCardItenComponent', () => {
  let component: ProfileCardItenComponent;
  let fixture: ComponentFixture<ProfileCardItenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileCardItenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileCardItenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
