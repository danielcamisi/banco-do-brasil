import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
})
export class MenubarComponent implements OnInit{
  items:MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
        {
            label: 'Conta',
            icon: 'pi pi-fw pi-bookmark',
            items: [       
                {
                    label: 'Área Financeira',
                    icon: 'pi pi-fw pi-user-minus'
                },        
                {
                    separator: true
                },
                {
                    label: 'Export',
                    icon: 'pi pi-fw pi-external-link'
                }
            ]
        },
        {
            label: 'Editar dados da conta',
            icon: 'pi pi-fw pi-pencil',
            items: [
                {
                    label: 'Dados pessoais',
                    icon: 'pi pi-fw pi-align-left'
                },
                {
                    label: 'Dados de residência',
                    icon: 'pi pi-fw pi-align-right'
                },
                {
                    label: 'Foto de perfil',
                    icon: 'pi pi-fw pi-align-center'
                },
            ]
        },
        {
            label: 'Seu Perfil',
            icon: 'pi pi-fw pi-user',
            items: [
                {
                    label: 'Cartões',
                    icon: 'pi pi-fw pi-user-plus'
                },
                {
                    label: 'Informações da conta',
                    icon: 'pi pi-fw pi-user-minus'
                },
                {
                    label: 'procurar',
                    icon: 'pi pi-fw pi-users',
                    items: [
                        {
                            label: 'Filter',
                            icon: 'pi pi-fw pi-filter',
                            items: [
                                {
                                    label: 'Print',
                                    icon: 'pi pi-fw pi-print'
                                }
                            ]
                        },
                        {
                            icon: 'pi pi-fw pi-bars',
                            label: 'List'
                        }
                    ]
                }
            ]
        },
        {
            label: 'Novidades',
            icon: 'pi pi-fw pi-calendar',
            items: [
                {
                    label: 'Fale com um especialista',
                    icon: 'pi pi-fw pi-pencil',
                    items: [
                        {
                            label: 'Problemas com compras?',
                            icon: 'pi pi-fw pi-calendar-plus'
                        },
                        {
                            label: 'Problemas com acessos ou cartões?',
                            icon: 'pi pi-fw pi-calendar-minus'
                        }
                    ]
                },
                {
                    label: 'Notificações em conta',
                    icon: 'pi pi-fw pi-calendar-times',
                    items: [
                        {
                            label: 'Acessar',
                            icon: 'pi pi-fw pi-calendar-minus'
                        }
                    ]
                }
            ]
        },
        {
            label: 'Sair',
            icon: 'pi pi-fw pi-power-off'
        }
    ];
}
}

