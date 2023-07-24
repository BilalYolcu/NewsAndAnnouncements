import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDuyurularComponent } from './home-duyurular.component';

describe('HomeDuyurularComponent', () => {
  let component: HomeDuyurularComponent;
  let fixture: ComponentFixture<HomeDuyurularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeDuyurularComponent]
    });
    fixture = TestBed.createComponent(HomeDuyurularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
