import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-actionsheet',
  templateUrl: './actionsheet.page.html',
  styleUrls: ['./actionsheet.page.scss'],
})
export class ActionsheetPage implements OnInit {

  constructor(private actionSheetCtrl : ActionSheetController) { }

  ngOnInit() {
  }

  async actionSheet()
  {
    const actionSheet = await this.actionSheetCtrl.create(
    {
      header: 'Escolha a opção desejada.',
      buttons: 
      [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          handler: () =>
          {
            console.log('Delete Clicked')
          }
        },
        {
          text: 'Share',
          icon: 'share',
          handler: () =>
          {
            console.log('Share Clicked')
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ]
    });

    await actionSheet.present();
  }

}
