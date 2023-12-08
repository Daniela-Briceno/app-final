import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderOutComponent } from './header-out.component';

describe('HeaderOutComponent', () => {
  let component: HeaderOutComponent;
  let fixture: ComponentFixture<HeaderOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderOutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
