import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDuyurularComponent } from './admin-duyurular.component';

describe('AdminDuyurularComponent', () => {
  let component: AdminDuyurularComponent;
  let fixture: ComponentFixture<AdminDuyurularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminDuyurularComponent]
    });
    fixture = TestBed.createComponent(AdminDuyurularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
