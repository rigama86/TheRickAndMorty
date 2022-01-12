import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLocationDescriptionComponent } from './view-location-description.component';

describe('ViewLocationDescriptionComponent', () => {
  let component: ViewLocationDescriptionComponent;
  let fixture: ComponentFixture<ViewLocationDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewLocationDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLocationDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
