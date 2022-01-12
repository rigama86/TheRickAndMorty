import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCharacterDescriptionComponent } from './view-character-description.component';

describe('ViewCharacterDescriptionComponent', () => {
  let component: ViewCharacterDescriptionComponent;
  let fixture: ComponentFixture<ViewCharacterDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCharacterDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCharacterDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
