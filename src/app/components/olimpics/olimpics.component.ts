import { Component, OnInit, ViewChild } from '@angular/core';
import { ServicioService } from '../../services/servicio.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-olimpics',
  templateUrl: './olimpics.component.html',
  styles: []
})
export class OlimpicsComponent implements OnInit {

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['fullname', 'age', 'country', 'year', 'date', 'sport', 'total', 'actions'];

  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  constructor(private servicioService: ServicioService) { }

  ngOnInit() {
    this.servicioService.getOlimpics().subscribe((resp: any) => {
      const list = resp;
      // const list = [
      //   {
      //     athlete: 'Michael Phelps',
      //     age: 23,
      //     country: 'United States',
      //     year: 2008,
      //     date: '24/08/2008',
      //     sport: 'Swimming',
      //     gold: 8,
      //     silver: 0,
      //     bronze: 0,
      //     total: 8
      //   }
      // ];
      this.listData = new MatTableDataSource(list);
      // console.log(this.listData);
      this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;
    });
  }

  onEdit(element) {
    console.log(element);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.listData.filter = filterValue.trim().toLowerCase();
    console.log('Filtro1');
  }
}
