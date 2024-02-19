import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: 'search-box.component.html',
  styleUrl: 'search-box.component.css',
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput')
  tagInput!: ElementRef<HTMLInputElement>;

  @Output()
  LookingForGif: EventEmitter<string> = new EventEmitter();

  constructor(private gifsService: GifsService) {}

  SearchTag() {
    let newTag: string = this.tagInput.nativeElement.value;
    this.gifsService.searchTag(newTag);

    console.log(this.tagInput.nativeElement.value);
    this.tagInput.nativeElement.value = '';
  }
}
