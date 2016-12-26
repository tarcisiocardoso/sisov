import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { Hero } from './hero';
//import { HeroService } from './hero.service';

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    template: `
<!-- Page Heading -->
                <div class="row">
                    <div class="col-lg-12">
                        <h1 class="page-header">
                            Dashboard <small>Statistics Overview</small>
                        </h1>
                        <ol class="breadcrumb">
                            <li class="active">
                                <i class="fa fa-dashboard"></i> Dashboard
                            </li>
                        </ol>
                    </div>
                </div>
    <h1>conteudo do dashboard</h1>
`
    //styleUrls: [ 'dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {

//    heroes: Hero[] = [];
//
//    constructor(
//        private router: Router,
//        private heroService: HeroService) {
//    }
//    
    ngOnInit(): void {
        console.log('xxxx');
        //this.heroService.getHeroes()
        //    .then(heroes => this.heroes = heroes.slice(1, 5));
    }
//
//    gotoDetail(hero: Hero): void {
//        let link = ['/detail', hero.id];
//        this.router.navigate(link);
//    }
}