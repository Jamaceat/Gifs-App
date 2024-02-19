import { Component, Input } from '@angular/core';

import { Gif } from '../../interfaces/SearchResponse.interfaces';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input()
  public gifs: Gif[] = [];
}
