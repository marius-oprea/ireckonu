import { NgModule } from '@angular/core';
import { DetailsComponent } from './details-component/details.component';
import { DetailsRoutingModule } from './details-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { DbModule } from '../../db/db.module';
import { PostComponent } from './post-component/post.component';
import { ShowMoreModule } from './show-more/show-more.module';
import { DetailsService } from './details.service';

const components = [DetailsComponent, PostComponent];

@NgModule({
  declarations: [components],
  exports: [components],
  imports: [
    DetailsRoutingModule,
    SharedModule,
    DbModule,
    ShowMoreModule
  ],
  providers: [DetailsService]
})
export class DetailsModule {
}
