import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../services/servicio.service';

@Component({
  selector: 'app-primeng',
  templateUrl: './primeng.component.html',
  styles: []
})
export class PrimengComponent implements OnInit {

  // Data list (see OnInit)
  listData: [];

  // Paginator control
  first = 0;

  // Header array
  cols = [
    { field: 'athlete', header: 'Athlete' },
    { field: 'age', header: 'Age' },
    { field: 'country', header: 'Country' },
    { field: 'year', header: 'Year' },
    { field: 'date', header: 'Date' },
    { field: 'sport', header: 'Sport' },
    { field: 'total', header: 'Total' },
];

  constructor(private servicioService: ServicioService) { }

  ngOnInit() {
    this.servicioService.getOlimpics().subscribe((resp: any) => {
      this.listData = resp;
    });
  }


  // Filter method
FilterUtils = (value, filter): boolean => {
    if (filter === undefined || filter === null || filter.trim() === '') {
        return true;
    }

    if (value === undefined || value === null) {
        return false;
    }
    return parseInt(filter) > value;
  }

  // reset() {
  //   this.first = 0;
  // }
}
