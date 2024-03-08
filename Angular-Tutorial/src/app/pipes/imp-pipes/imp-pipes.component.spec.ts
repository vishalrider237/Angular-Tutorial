import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpPipesComponent } from './imp-pipes.component';

describe('ImpPipesComponent', () => {
  let component: ImpPipesComponent;
  let fixture: ComponentFixture<ImpPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpPipesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImpPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
