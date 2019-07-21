import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {path: 'tab1',
        children: [
          { path: '', loadChildren: './tab1/tab1.module#Tab1PageModule' }
        ]
      },
      {path: 'store',
        children: [
          { path: '', loadChildren: './store/store.module#StorePageModule' }
        ]
      },
      { path: 'tab3',
        children: [
          { path: '', loadChildren: './tab3/tab3.module#Tab3PageModule' }
        ]
      },
      { path: '',
        redirectTo: 'store',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'home',
    redirectTo: 'store',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
