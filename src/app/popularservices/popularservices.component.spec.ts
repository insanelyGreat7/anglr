import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularservicesComponent } from './popularservices.component';

describe('PopularservicesComponent', () => {
  let component: PopularservicesComponent;
  let fixture: ComponentFixture<PopularservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularservicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
