import { Component } from '@angular/core';
import { resolve } from 'path';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  //i18n Select
  public name: string = 'Anna';
  public gender: 'male' | 'female' = 'female';
  public invitationMap =  {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

    //i18n Plural
  public clients: string[] = ['María', 'Pepe', 'Fernando','Anna','Eric','Lara'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  //keyValue Pipe
  public person = {
    name: 'Anna',
    age: 23,
    addres: 'Valencia, España'
  }

      //i18n Select
  changeClient(): void {
    this.name = 'Fernando';
    this.gender = 'male';
  }

      //i18n Plural
  deleteClient(): void {
    this.clients.shift();
  }

    //Async Pipe
    /* public myObservableTimer: Observable<number> = interval(2000).pipe(
      tap( value => console.log('tap:', value)),
    );

    public promiseValue: Promise<string> = new Promise( (resolve, reject) => {
      setTimeout(() => {
        resolve( 'Tenemos data en la promesa.' );
        console.log( 'Tenemos data en la promesa.' );
        this.person.name = 'Otro nombre'
      }, 3500);
    }) */
}
