import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';
import { MessagesHandlingService } from './messages-handling.service';
import { ClickService } from './click.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [HttpService, MessagesHandlingService, ClickService]
})
export class CoreModule {
}
