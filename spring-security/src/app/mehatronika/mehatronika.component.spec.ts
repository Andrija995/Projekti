import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MehatronikaComponent } from './mehatronika.component';

describe('MehatronikaComponent', () => {
  let component: MehatronikaComponent;
  let fixture: ComponentFixture<MehatronikaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MehatronikaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MehatronikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
