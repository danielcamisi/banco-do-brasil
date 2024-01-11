import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MenubarComponent } from './menubar/menubar.component';

const routes: Routes = [
 
  {
    path: 'app',
    component: AppComponent  ,
    data: { pageTitle: 'App' }
  },
  {
    path: 'app-menubar',
    component:MenubarComponent,
    data:{ pageTitle: 'app-menubar'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }

