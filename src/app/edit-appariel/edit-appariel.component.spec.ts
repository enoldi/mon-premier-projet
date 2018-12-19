import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditApparielComponent } from './edit-appariel.component';

describe('EditApparielComponent', () => {
  let component: EditApparielComponent;
  let fixture: ComponentFixture<EditApparielComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditApparielComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditApparielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
