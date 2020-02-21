import { Component, OnInit, ViewChild } from '@angular/core';
import { ServicioService } from '../../services/servicio.service';
import { Router } from '@angular/router';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styles: []
})
export class JobsComponent implements OnInit {
  @ViewChild(CdkVirtualScrollViewport, {static: false}) viewport: CdkVirtualScrollViewport;
  carros: any[] = [];
  constructor(private servicioService: ServicioService,
              private router: Router) {}

  ngOnInit() {
    this.servicioService.getCars().subscribe((resp: any) => {
      console.log(resp);
      this.carros = resp;
    // console.log(this.carros);
    });
  }

  atras() {

  }

  siguiente() {

  }

  final() {
    this.viewport.scrollToIndex(this.carros.length);
  }


  verCarro(codigo: number) {
    // console.log(codigo);
    this.router.navigate(['/carro', codigo]);
  }
}
