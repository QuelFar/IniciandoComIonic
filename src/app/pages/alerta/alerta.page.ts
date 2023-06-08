import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.page.html',
  styleUrls: ['./alerta.page.scss'],
})
export class AlertaPage implements OnInit {

  constructor(private alertCtrl : AlertController) { }

  ngOnInit() {
  }

  async alert()
  {
    const alert = await this.alertCtrl.create
    ({
      header: 'Conectado',
      message: 'Conexão com o banco realizado com sucesso',
      buttons: ['Sair']
    })

  alert.present();
  }

  async multiplo()
  {
    const multiplo = await this.alertCtrl.create
    ({
      header: 'Conectar',
      message: 'Deseja conectar com o banco de dados ?',
      buttons: ['Sair','Conectar']
    })

    multiplo.present();
  }
}
