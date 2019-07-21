import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides} from '@ionic/angular';
import { Router } from '@angular/router';
import { PopupService } from 'src/app/services/popup.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})

export class WelcomePage implements OnInit {

  slider = 1;
  regButton = false;

  constructor(private router: Router, public popupService: PopupService) {}

  @ViewChild('mySlider') slides: IonSlides;

  next() {
    this.slides.slideNext();
    if (this.slider !== 2) {
      this.regButton = false;
      this.slider++;
    } else {
      this.slider = 1;
      this.regButton = true;
    }
  }

  reg() {
    this.popupService.showLoading();
    this.router.navigate(['/register']);
  }

  ngOnInit() {
  }

}
