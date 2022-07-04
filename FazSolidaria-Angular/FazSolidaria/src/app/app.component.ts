import { Component } from '@angular/core';
import { ActivationStart, Router } from '@angular/router';
import { AuthService } from './service/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // permitir acesso no html que gerencia os componentes app.component.html', aos metodos(funções)

  isShowHeader: boolean = false;

  constructor(public auth: AuthService,
    private router: Router){}

  title = 'FazSolidaria';

  ngOnInit() {
    this.observeRouterEvents();
  }

  observeRouterEvents(){
    this.router.events.subscribe(data => this.onRoutingChange(data));
  }

  onRoutingChange(data: any){
    if (data instanceof ActivationStart && data.snapshot.data){
      const dataRoute = data.snapshot.data;
      this.isShowHeader = dataRoute['isHeader'] || false;
    }
  }










}


