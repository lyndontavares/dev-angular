import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { PermissionGuard } from './_helpers/permission.guard';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)  },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)  },
  { path: 'register', loadChildren: () => import('./register/Register.module').then(m => m.RegisterModule) },
  { path: 'profile', loadChildren: () => import('./profile/Profile.module').then(m => m.ProfileModule) },
  { path: 'user', component: BoardUserComponent, canActivate: [PermissionGuard]},
  { path: 'mod', component: BoardModeratorComponent, canActivate: [PermissionGuard] },
  { path: 'admin', component: BoardAdminComponent, canActivate: [PermissionGuard] },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
