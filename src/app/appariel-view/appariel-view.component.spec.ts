import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApparielViewComponent } from './appariel-view.component';

describe('ApparielViewComponent', () => {
  let component: ApparielViewComponent;
  let fixture: ComponentFixture<ApparielViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApparielViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApparielViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
