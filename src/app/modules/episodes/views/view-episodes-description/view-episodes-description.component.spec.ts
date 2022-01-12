import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEpisodesDescriptionComponent } from './view-episodes-description.component';

describe('ViewEpisodesDescriptionComponent', () => {
  let component: ViewEpisodesDescriptionComponent;
  let fixture: ComponentFixture<ViewEpisodesDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEpisodesDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEpisodesDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
