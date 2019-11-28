import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammeAcheteComponent } from './programme-achete.component';

describe('ProgrammeAcheteComponent', () => {
  let component: ProgrammeAcheteComponent;
  let fixture: ComponentFixture<ProgrammeAcheteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgrammeAcheteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammeAcheteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
