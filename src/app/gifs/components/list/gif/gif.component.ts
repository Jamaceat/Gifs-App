import { Component, Input } from '@angular/core';
import { Gif } from '../../../interfaces/SearchResponse.interfaces';

@Component({
  selector: 'list-item-gif',
  templateUrl: './gif.component.html',
  styleUrl: './gif.component.css',
})
export class GifComponent {
  @Input()
  public gif?: Gif;
}
