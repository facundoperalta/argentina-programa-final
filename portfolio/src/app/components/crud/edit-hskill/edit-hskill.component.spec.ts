import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHskillComponent } from './edit-hskill.component';

describe('EditHskillComponent', () => {
  let component: EditHskillComponent;
  let fixture: ComponentFixture<EditHskillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditHskillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditHskillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
