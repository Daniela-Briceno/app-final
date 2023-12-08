import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncriptacionTutorialComponent } from './encriptacion-tutorial.component';

describe('EncriptacionTutorialComponent', () => {
  let component: EncriptacionTutorialComponent;
  let fixture: ComponentFixture<EncriptacionTutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncriptacionTutorialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncriptacionTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
