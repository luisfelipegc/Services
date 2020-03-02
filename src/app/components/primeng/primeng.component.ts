import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../services/servicio.service';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-primeng',
  templateUrl: './primeng.component.html',
  styles: [
    `
        /* .ui-steps .ui-steps-item {
            width: 25%;
        }

        .ui-steps.steps-custom {
            margin-bottom: 30px;
        }

        .ui-steps.steps-custom .ui-steps-item .ui-menuitem-link {
            padding: 0 1em;
            overflow: visible;
        }

        .ui-steps.steps-custom .ui-steps-item .ui-steps-number {
            background-color: #0081c2;
            color: #FFFFFF;
            display: inline-block;
            width: 36px;
            border-radius: 50%;
            margin-top: -14px;
            margin-bottom: 10px;
        }

        .ui-steps.steps-custom .ui-steps-item .ui-steps-title {
            color: #555555;
        } */
    `
  ]
  // encapsulation: ViewEncapsulation.None
})
export class PrimengComponent implements OnInit {

  // For steps
  activeIndex = 1;
  items: any[];

  // Data list (see OnInit)
  listData: [];

  // Paginator control
  first = 0;

  // Export
  columns: any[];

  // Multiselect

  cities1: SelectItem[];
  selectedCities1: any[];

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

exportColumns = this.cols.map(col => ({title: col.header, dataKey: col.field}));

  constructor(private servicioService: ServicioService
              ) {

    // Prueba de multiselects
    this.cities1 = [
      {label: 'New York', value: {id: 1, name: 'New York', code: 'NY'}},
      {label: 'Rome', value: {id: 2, name: 'Rome', code: 'RM'}},
      {label: 'London', value: {id: 3, name: 'London', code: 'LDN'}},
      {label: 'Istanbul', value: {id: 4, name: 'Istanbul', code: 'IST'}},
      {label: 'Paris', value: {id: 5, name: 'Paris', code: 'PRS'}}
  ];
  }

  ngOnInit() {
    this.servicioService.getOlimpics().subscribe((resp: any) => {
      this.listData = resp;
    });
    this.items = [{
      label: 'Personal',
      command: (event: any) => {
          this.activeIndex = 0;
          // this.messageService.add({severity: 'info', summary: 'First Step', detail: event.item.label});
      }
  },
  {
      label: 'Seat',
      command: (event: any) => {
          this.activeIndex = 1;
          // this.messageService.add({severity: 'info', summary: 'Seat Selection', detail: event.item.label});
      }
  },
  {
      label: 'Payment',
      command: (event: any) => {
          this.activeIndex = 2;
          // this.messageService.add({severity: 'info', summary: 'Pay with CC', detail: event.item.label});
      }
  },
  {
      label: 'Confirmation',
      command: (event: any) => {
          this.activeIndex = 3;
          // this.messageService.add({severity: 'info', summary: 'Last Step', detail: event.item.label});
      }
  }
];
  }

  // Confirmation service
//   confirm() {
//     this.confirmationService.confirm({
//         message: 'Are you sure that you want to perform this action?',
//         accept: () => {
//             // Actual logic to perform a confirmation
//         }
//     });
// }


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
}
