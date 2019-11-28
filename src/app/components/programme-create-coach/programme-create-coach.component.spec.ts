import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammeCreateCoachComponent } from './programme-create-coach.component';

describe('ProgrammeCreateCoachComponent', () => {
  let component: ProgrammeCreateCoachComponent;
  let fixture: ComponentFixture<ProgrammeCreateCoachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgrammeCreateCoachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammeCreateCoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
