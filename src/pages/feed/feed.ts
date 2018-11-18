import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
 public nome_usuario:string ="Rafael Souza - do código";

  constructor(public navCtrl: NavController) {

  }

  public somarDoisNumeros():void{
    alert("Minha função funcionou");

  }
  
  ionViewDidLoad() {
    console.log("I'm alive!");
    this.somarDoisNumeros();
  }

}
