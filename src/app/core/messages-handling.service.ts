import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable()
export class MessagesHandlingService {
  constructor(public toastController: ToastController) {
  }

  async showMessage(message: string, color: string) {
    const toast = await this.toastController.create({
      message: message,
      showCloseButton: true,
      position: 'top',
      closeButtonText: 'Done',
      color: color
    });
    toast.present();
  }
}
