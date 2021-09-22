import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'DreamTeam-Tech';
  constructor(private _location: Location) { }

  ngOnInit(): void {
  }

  onClick()
  {
    this._location.back();
  }

}
