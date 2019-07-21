import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides} from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})

export class WelcomePage implements OnInit {

  slide = [
    {
      img: 'assets/icon/shopping-bag.svg',
      title: 'Tanpa Stock & Modal',
// tslint:disable-next-line: max-line-length
      desc: '<strong>Nabiilahstore</strong> menggunakan sistem dropshiper; yakni semua stock barang, packing hingga pengiriman kami yg melakukan, dan reseller hanya tinggal menjualkan barang',
      button: 'Selanjutnya',
      act: 'next()'
    },
    {
      img: 'assets/icon/dress.svg',
      title: 'Barang Original',
// tslint:disable-next-line: max-line-length
      desc: '<strong>Nabillahstore</strong> menjual produk gamis syar’i, dress, kaftan dan hijab branded yang original langsung dari produsen dengan bahan berkualitas dan harga yang murah',
      button: 'Selanjutnya',
      act: 'next()'
    },
    {
      img: 'assets/icon/mobile.svg',
      title: 'Order Cepat!',
// tslint:disable-next-line: max-line-length
      desc: '<strong>Nabiilahstore</strong> menggunakan sistem order berbasis aplikasi sehingga reseller dengan cepat dapat memesan setiap barang tanpa harus menunggu balasan dari cs kami',
      button: 'DAFTAR SEKARANG',
      act: 'reg()'
    }
  ];

  constructor(private router: Router) {}

  @ViewChild('mySlider')  slides: IonSlides;

  next() {
    this.slides.slideNext();
  }

  reg() {
    this.router.navigate(['/register']);
  }

  ngOnInit() {
  }

}
