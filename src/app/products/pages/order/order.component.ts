import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/heroe.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: ``
})
export class OrderComponent {

  public isUpperCase: boolean = false;
  public orderBy?: keyof Hero;

  public heroes: Hero[] = [
     {
      name: 'Superman',
      canFly: true,
      color: Color.blue
     },
     {
      name: 'Black Panther',
      canFly: false,
      color: Color.black
     },     {
      name: 'Robin',
      canFly: false,
      color: Color.green
     },     {
      name: 'Hellboy',
      canFly: false,
      color: Color.red
     },     {
      name: 'Thor',
      canFly: true,
      color: Color.blue
     }
  ]

  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder(value: keyof Hero) {
    this.orderBy = value;
  }

}
