import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: 'home', icon: 'home'},
    { title: 'Action Sheet', url: 'actionsheet', icon: 'code'},
    { title: 'Alertas', url: 'alerta', icon: 'alert'},
    { title: 'Botões', url: 'botao', icon: 'albums' },
    { title: 'Navegação', url: 'navegacao', icon: 'globe'},
  ];
  constructor() {}
}
