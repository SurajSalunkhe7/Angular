import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveXComponent } from './directive-x.component';

describe('DirectiveXComponent', () => {
  let component: DirectiveXComponent;
  let fixture: ComponentFixture<DirectiveXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectiveXComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectiveXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
