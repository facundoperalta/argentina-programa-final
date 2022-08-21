import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHskillComponent } from './create-hskill.component';

describe('CreateHskillComponent', () => {
  let component: CreateHskillComponent;
  let fixture: ComponentFixture<CreateHskillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateHskillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateHskillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
