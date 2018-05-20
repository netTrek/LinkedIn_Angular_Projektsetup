import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetTrekLibComponent } from './net-trek-lib.component';

describe('NetTrekLibComponent', () => {
  let component: NetTrekLibComponent;
  let fixture: ComponentFixture<NetTrekLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetTrekLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetTrekLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
