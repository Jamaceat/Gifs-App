import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [HomePageComponent, SearchBoxComponent, ListComponent],
  exports: [HomePageComponent],
  imports: [CommonModule],
})
export class GifsModule {}
