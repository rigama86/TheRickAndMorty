import { Component, OnInit } from '@angular/core';
import { AppState } from '../../../../store/app.reducers';
import { Store } from '@ngrx/store';

import { Location } from '../../../../models/location.model';
import { getLocations } from '../../../../store/actions/locations.actions';
@Component({
  selector: 'app-view-locations',
  templateUrl: './view-locations.component.html',
  styleUrls: ['./view-locations.component.scss']
})
export class ViewLocationsComponent implements OnInit {
  locations : Location[] = [];
  constructor( private store: Store<AppState> ) { }

  ngOnInit(): void {
    this.store.select('locations').subscribe(({ locations }) => {
      this.locations = locations;
    });
    this.store.dispatch( getLocations() );
  }

}
