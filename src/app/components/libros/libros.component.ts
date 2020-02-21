import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../services/servicio.service';


@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styles: []
})
export class LibrosComponent implements OnInit {
  books: any[] = [];
    constructor(private servicioService: ServicioService) { }
    ngOnInit() {
      this.servicioService.getBooks().subscribe((resp: any) => {
        // console.log(resp);
        this.books = resp.entries;
    });
 }
}
