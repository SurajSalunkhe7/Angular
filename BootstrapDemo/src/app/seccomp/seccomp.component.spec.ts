import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccompComponent } from './seccomp.component';

describe('SeccompComponent', () => {
  let component: SeccompComponent;
  let fixture: ComponentFixture<SeccompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [SeccompComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(SeccompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
