import {
  Component,
  OnInit
} from '@angular/core';
import {
  MenuItem
} from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: ``
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[] = [];

  ngOnInit(): void {
    this.menuItems = [{
        label: 'Pipes de Angular',
        icon: 'pi pi-fw pi-desktop',
        items: [{
            label: 'Textos y Fechas',
            icon: 'pi pi-align-left',
            routerLink: '/'
          },
          {
            label: 'Números',
            icon: 'pi pi-calculator',
            routerLink: 'numbers'
          },
          {
            label: 'No comunes',
            icon: 'pi pi-box',
            routerLink: 'uncommon'
          }
        ]
      },
      {
        label: 'Pipes personalizados',
        icon: 'pi pi-cog',
        items: [{
          label: 'No comunes',
          icon: 'pi pi-globe',
          routerLink: '/'
        }]
      }
    ]
  }

}
