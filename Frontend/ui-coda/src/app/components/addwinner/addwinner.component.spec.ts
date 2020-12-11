import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddwinnerComponent } from './addwinner.component';

describe('AddwinnerComponent', () => {
  let component: AddwinnerComponent;
  let fixture: ComponentFixture<AddwinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddwinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddwinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
