import { NgModule } from '@angular/core';
import { ListComponent } from './list-component/list.component';
import { DbModule } from '../../db/db.module';
import { SharedModule } from '../../shared/shared.module';
import { CardGroupComponent } from './card-group/card-group-component/card-group.component';
import { CardComponent } from './card-group/card-component/card.component';
import { ListService } from './list.service';
import { ListRoutingModule } from './list-routing.module';
import { CardService } from './card-group/card-component/card.service';

const components = [
  CardComponent,
  CardGroupComponent,
  ListComponent
];

@NgModule({
  declarations: [components],
  exports: [components],
  imports: [SharedModule, DbModule, ListRoutingModule],
  providers: [ListService, CardService]
})
export class ListModule {
}
