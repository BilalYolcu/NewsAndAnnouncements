import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHaberlerComponent } from './admin-haberler.component';

describe('AdminHaberlerComponent', () => {
  let component: AdminHaberlerComponent;
  let fixture: ComponentFixture<AdminHaberlerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminHaberlerComponent]
    });
    fixture = TestBed.createComponent(AdminHaberlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
