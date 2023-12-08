import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRequieLoginComponent } from './dialog-requie-login.component';

describe('DialogRequieLoginComponent', () => {
  let component: DialogRequieLoginComponent;
  let fixture: ComponentFixture<DialogRequieLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogRequieLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogRequieLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
