import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './layouts/layouts.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
  const routes: Routes = [
  {
    path: '', component: LayoutsComponent , loadChildren: () =>
      import('./panel/panel.module').then(m => m.PanelModule),
    data: {
      breadcrumb: {
        label: 'خانه',
        id: 'dashboard',
      },
    },
  },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/404' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
