import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { ChartModule } from 'angular2-highcharts';

import { AppRoutingModule } from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './moke/in-memory-data.service';

import { AppComponent }   from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { FormNovoComponent }      from './cadastro/form.novo.component';
import { DetalheComponent }      from './detalhe/detalhe.component';
import { TabelasComponent }      from './tabelas/tabelas.component';

import { AnimalService }          from './service/animal.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ChartModule,
        //InMemoryWebApiModule.forRoot(InMemoryDataService),
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        FormNovoComponent,
        TabelasComponent,
        DetalheComponent
    ],
    providers: [ AnimalService ],
    bootstrap: [AppComponent]
})
export class AppModule { }


