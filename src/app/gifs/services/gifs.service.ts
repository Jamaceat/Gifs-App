import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GifsService {
  private apiKey = '1Uds1iLnJTFlyxD7WONMcp9QWOAeXln0';
  private _tagsHistory: string[] = [];

  get tagHistory() {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }
  }

  searchTag(tag: string) {
    if (tag.length === 0) return;
    this.organizeHistory(tag);
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0, 10);
  }
}
