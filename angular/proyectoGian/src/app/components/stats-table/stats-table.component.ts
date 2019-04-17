import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-stats-table',
  templateUrl: './stats-table.component.html',
  styleUrls: ['./stats-table.component.css']
})

export class StatsTableComponent implements OnInit {
  displayedColumns: string[] = ['stat', 'value'];
  @Input() dataSource;
  constructor() { }

  ngOnInit() {
  }

}
