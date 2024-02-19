import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/SearchResponse.interfaces';

@Injectable({ providedIn: 'root' })
export class GifsService {
  constructor(private http: HttpClient) {
    this.lookLocalStorage();
    this.setFirstTag();
  }

  private apiKey = '1Uds1iLnJTFlyxD7WONMcp9QWOAeXln0';
  private _tagsHistory: string[] = [];
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs/search';

  public gifList: Gif[] = [];

  get tagHistory() {
    return [...this._tagsHistory];
  }

  setFirstTag(): void {
    if (this._tagsHistory.length > 0) {
      this.searchTag(this.tagHistory[0]);
    }
  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }
    this._tagsHistory.unshift(tag);
  }

  searchTag(tag: string) {
    if (tag.length === 0) return;
    this.organizeHistory(tag);

    this._tagsHistory = this._tagsHistory.splice(0, 10);

    this.searchTagAPI(tag);

    this.saveLocalStorage();
    this.lookLocalStorage();
  }

  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }

  private lookLocalStorage(): void {
    if (!localStorage.getItem('history')) {
      this.saveLocalStorage();
    } else {
      this._tagsHistory = JSON.parse(localStorage.getItem('history')!);
    }
  }

  private async searchTagAPI(tag: string): Promise<void> {
    if (tag.length === 0) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', tag);

    this.http
      .get<SearchResponse>(`${this.serviceUrl}`, { params: params })
      .subscribe((resp) => {
        this.gifList = resp.data;
        console.log({ gifs: this.gifList });
      });
    //
  }
}
function getItem(
  arg0: string
): ((this: any, key: string, value: any) => any) | undefined {
  throw new Error('Function not implemented.');
}
