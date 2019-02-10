import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  exports: [CommonModule, IonicModule]
})
export class SharedModule {
}
