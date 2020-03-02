import { Component, OnInit, ViewChild } from '@angular/core';
import { ServicioService } from '../../services/servicio.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-olimpics',
  templateUrl: './olimpics.component.html',
  styles: []
})
export class OlimpicsComponent implements OnInit {

    pruebas = [
      {
        id: 1118870522,
        skills: [{
          id: 1,
          name: 'Java',
          type: 'BE'
      },
      {
          id: 2,
          name: 'PHP',
          type: 'BE'
      },
      {
          id: 3,
          name: 'Python',
          type: 'BE'
      },
      {
          id: 4,
          name: 'Angular',
          type: 'BE'
      }]}];

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['fullname', 'age', 'country', 'year', 'date', 'sport', 'total', 'actions'];

  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  constructor(private servicioService: ServicioService) {
    for (const prueba of this.pruebas) {
      console.log(prueba.skills);
    }
    console.log(this.pruebas[0].skills);
  }

  ngOnInit() {
    this.servicioService.getOlimpics().subscribe((resp: any) => {
      const list = resp;

      // Angular Material properties
      this.listData = new MatTableDataSource(list);
      this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;
    });
  }

  // Print in console the row's object
  onEdit(element) {
    console.log(element);
  }

  // General filter.
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.listData.filter = filterValue.trim().toLowerCase();
    console.log('Filtro1');
  }
}
