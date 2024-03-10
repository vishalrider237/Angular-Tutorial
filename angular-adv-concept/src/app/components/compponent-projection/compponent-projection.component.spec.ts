import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompponentProjectionComponent } from './compponent-projection.component';

describe('CompponentProjectionComponent', () => {
  let component: CompponentProjectionComponent;
  let fixture: ComponentFixture<CompponentProjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompponentProjectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompponentProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
