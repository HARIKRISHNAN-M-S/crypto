import { Component } from '@angular/core';
import {AfterViewInit,  ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator:any;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'bitcoin', weight: 10079, symbol: '280B'},
  {position: 2, name: 'xrp', weight: 4026, symbol: '125B'},
  {position: 3, name: 'Lithium', weight: -6.941, symbol: '180B'},
  {position: 4, name: 'dogecoin', weight: -9.0122, symbol: '100B'},
  {position: 5, name: 'pepe', weight: 10.811, symbol: '78B'},

 
];