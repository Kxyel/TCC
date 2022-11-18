import { Component, OnInit } from '@angular/core';
import { AppSettings } from '../../global/app-settings';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  public isOpened: boolean = false;

  constructor(public appSettings: AppSettings ) { }

  ngOnInit(): void {
  }

  close(): void {
    this.isOpened = !this.isOpened
  }

}
