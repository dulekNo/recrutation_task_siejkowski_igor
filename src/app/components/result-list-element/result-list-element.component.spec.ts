import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultListElementComponent } from './result-list-element.component';

describe('ResultListElementComponent', () => {
  let component: ResultListElementComponent;
  let fixture: ComponentFixture<ResultListElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultListElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
