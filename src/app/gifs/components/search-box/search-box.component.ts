import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  templateUrl: 'search-box.component.html',
  styleUrl: 'search-box.component.css',
})
export class SearchBoxComponent {
  // @ViewChild('txtTagInput')
  // tagInput!: ElementRef<HTMLInputElement>;

  SearchTag(newTag: string) {
    console.log(newTag);
  }
}