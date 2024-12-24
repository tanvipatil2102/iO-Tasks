import { Component, Input, OnInit } from '@angular/core';
import { Istd } from '../../models/std';

@Component({
  selector: 'app-sts-table',
  templateUrl: './sts-table.component.html',
  styleUrls: ['./sts-table.component.scss']
})
export class StsTableComponent implements OnInit {

  @Input()
  getStdArr!: Array<Istd>;
  constructor() { }

  ngOnInit(): void {
  }

}
