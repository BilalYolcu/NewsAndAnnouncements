import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHaberlerComponent } from './home-haberler.component';

describe('HomeHaberlerComponent', () => {
  let component: HomeHaberlerComponent;
  let fixture: ComponentFixture<HomeHaberlerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeHaberlerComponent]
    });
    fixture = TestBed.createComponent(HomeHaberlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
