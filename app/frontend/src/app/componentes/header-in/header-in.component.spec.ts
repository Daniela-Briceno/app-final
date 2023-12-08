import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderInComponent } from './header-in.component';

describe('HeaderInComponent', () => {
  let component: HeaderInComponent;
  let fixture: ComponentFixture<HeaderInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderInComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
