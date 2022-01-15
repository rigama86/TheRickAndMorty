import { Component, OnInit } from '@angular/core';
import { Episodes } from '../../../../models/episodes.model';
import { getEpisodes } from '../../../../store/actions/episodes.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-view-episodes',
  templateUrl: './view-episodes.component.html',
  styleUrls: ['./view-episodes.component.scss']
})
export class ViewEpisodesComponent implements OnInit {

  episodes : Episodes[] = [];

  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('episodes').subscribe(({ episodes }) => {
      this.episodes = episodes;
    });
    this.store.dispatch( getEpisodes() );
  }

}
