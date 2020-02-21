import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicioService } from '../../services/servicio.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styles: []
})
export class CarroComponent implements OnInit {
  @Input() nombrecarro: string;
  codigo: any;
  modeloscarro: any[] = [];
  constructor(private activatedRouter: ActivatedRoute,
              private servicioService: ServicioService,
              private http: HttpClient) {}

  ngOnInit() {
    this.activatedRouter.params.subscribe(params => {
      this.codigo = params['codigo'];
      // console.log(this.codigo);
    });
    this.http.get(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${this.codigo}/modelos`).subscribe((resp: any) => {
      // console.log(resp);
      this.modeloscarro = resp.modelos;
      // console.log(this.modeloscarro);
    });
  }
}
