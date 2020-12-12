import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {DeviceDetectorService} from 'ngx-device-detector';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  authForm: FormGroup;
  isMobile: boolean;
  isDesktop: boolean;

  constructor(private deviceDetector: DeviceDetectorService) {
  }

  ngOnInit(): void {
    this.isMobile = this.deviceDetector.isMobile();
    this.isDesktop = this.deviceDetector.isDesktop();

    this.authForm = new FormGroup({});
  }

}
