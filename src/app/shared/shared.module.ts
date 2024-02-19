import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { LazyImagesComponent } from './lazy-images/lazy-images.component';

@NgModule({
  declarations: [SidebarComponent, LazyImagesComponent],
  exports: [SidebarComponent, LazyImagesComponent],
  imports: [CommonModule],
})
export class SharedModule {}
