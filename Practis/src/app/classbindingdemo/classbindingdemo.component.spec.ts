import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassbindingdemoComponent } from './classbindingdemo.component';

describe('ClassbindingdemoComponent', () => {
  let component: ClassbindingdemoComponent;
  let fixture: ComponentFixture<ClassbindingdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassbindingdemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassbindingdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
