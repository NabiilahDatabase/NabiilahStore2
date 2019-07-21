import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  loading: any;

  constructor(
    public loadingController: LoadingController
  ) { }

  async showLoading() {
    console.log('Show Loading');
    this.loading = await this.loadingController.create({
      message: 'Sedang memuat konten...',
      spinner: 'lines',
      duration: 2000
    });
    return await this.loading.present();
  }

  hideLoading() {
    console.log('Loading Hide');
    setTimeout(() => {
      this.loadingController.dismiss();
    }, 4000);
  }
}
