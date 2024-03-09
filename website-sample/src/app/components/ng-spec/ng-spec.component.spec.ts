import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSpecComponent } from './ng-spec.component';

describe('NgSpecComponent', () => {
  let component: NgSpecComponent;
  let fixture: ComponentFixture<NgSpecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgSpecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgSpecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
