import { NgModule } from '@angular/core';
import { ShowMoreComponent } from './show-more.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [ShowMoreComponent],
  exports: [ShowMoreComponent],
  imports: [SharedModule]
})
export class ShowMoreModule {
}
