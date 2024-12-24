import { Component, Input, OnInit } from '@angular/core';
import { Istd } from '../../models/std';

@Component({
  selector: 'app-std-dashboard',
  templateUrl: './std-dashboard.component.html',
  styleUrls: ['./std-dashboard.component.scss']
})
export class StdDashboardComponent implements OnInit {

    stdArray: Array<Istd> = [
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onStdEve(std : Istd){
    this.stdArray.push(std);
  }

}
