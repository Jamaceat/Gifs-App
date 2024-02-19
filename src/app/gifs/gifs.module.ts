import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { ListComponent } from './components/list/list.component';
import { GifComponent } from './components/list/gif/gif.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    ListComponent,
    GifComponent,
  ],
  exports: [HomePageComponent],
  imports: [CommonModule, SharedModule],
})
export class GifsModule {}
