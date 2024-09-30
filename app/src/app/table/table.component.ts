// import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface EMpData {
  Date: string;
  Objective: string;
}

const Employee_Data: EMpData[] = [
  {Date: '8/21/2024', Objective: 'O&T BRCC Meeting'},
  {Date: '8/22/2024', Objective: 'Risk BRCC Meeting'},
  {Date: '8/27/2024', Objective: 'ICRM BRCC Meeting'}
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  data = new MatTableDataSource(Employee_Data);

  displayedColumns: string [] = ['Date','Objective'];
  constructor() { }

  ngOnInit(): void {
  }

}
