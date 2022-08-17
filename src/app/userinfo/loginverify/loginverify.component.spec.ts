import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginverifyComponent } from './loginverify.component';

describe('LoginverifyComponent', () => {
  let component: LoginverifyComponent;
  let fixture: ComponentFixture<LoginverifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginverifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginverifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
