import { NgModule } from '@angular/core';
import { LibrosComponent } from './libros/libros.component';
import { NavbarComponent } from './navbar/navbar.component';
import { JobsComponent } from './jobs/jobs.component';
import { CarroComponent } from './carro/carro.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { SmarttableComponent } from './smarttable/smarttable.component';
import { OlimpicsComponent } from './olimpics/olimpics.component';
import { PrimengComponent } from './primeng/primeng.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ServicesModule } from '../services/services.module';
import {StepsModule} from 'primeng/steps';
import { StepperComponent } from './stepper/stepper.component';
import {MatStepperModule} from '@angular/material/stepper';

// Dialog
import {DialogModule} from 'primeng/dialog';
import { FeedbackComponent } from './feedback/feedback.component';

@NgModule({

    declarations: [
    LibrosComponent,
    NavbarComponent,
    JobsComponent,
    CarroComponent,
    UsuarioComponent,
    SmarttableComponent,
    OlimpicsComponent,
    PrimengComponent,
    NgStyleComponent,
    NgClassComponent,
    NgSwitchComponent,
    StepperComponent,
    FeedbackComponent
    ],

    imports: [
        AppRoutingModule,
        BrowserModule,
        CommonModule,
        BrowserAnimationsModule,
        ScrollingModule,
        FormsModule,
        Ng2SmartTableModule,
        MatTableModule,
        MatIconModule,
        MatPaginatorModule,
        MatSortModule,
        MatFormFieldModule,
        MatInputModule,
        TableModule,
        MultiSelectModule,
        ConfirmDialogModule,
        ServicesModule,
        StepsModule,
        MatStepperModule,
        ReactiveFormsModule,
        DialogModule
    ],

    exports: [
        LibrosComponent,
        FormsModule,
        NavbarComponent,
        JobsComponent,
        CarroComponent,
        UsuarioComponent,
        SmarttableComponent,
        OlimpicsComponent,
        PrimengComponent,
        NgStyleComponent,
        NgClassComponent,
        NgSwitchComponent,
        ReactiveFormsModule
    ]
})

export class ComponentsModule {}
