import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerAppComponent } from './components/pages/container-app/container-app.component';
import { DetailsPostComponent } from './components/posts/details-post/details-post.component';

const routes: Routes = [
  { path: '', component: ContainerAppComponent,
    children: [
      { path: 'home', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule) },
      { path: 'post/:id', component: DetailsPostComponent },
      { path: 'about', loadChildren: () => import('./components/pages/about/about.module').then(m => m.AboutModule) },
      { path: '', redirectTo: 'home', pathMatch: 'full'}
    ]
  },
  { path: 'admin', loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule) },
  { path: 'login', loadChildren: () => import('./components/auth/login/login.module').then(m => m.LoginModule) }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
