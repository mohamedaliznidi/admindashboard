import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardPageComponent } from './pages/dashboard/containers';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AdminGuard, AuthGuard, ManagerGuard } from './pages/auth/guards';

const routes: Routes = [
  {
    path: 'dashboard',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    component: DashboardPageComponent,
  },

  {
    path: 'notification',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/notification/notification.module').then(
        (m) => m.NotificationModule
      ),
  },
  {
    path: 'calender',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/calender/calenderr.module').then(
        (m) => m.CalenderrModule
      ),
  },

  {
    path: 'users',
    canActivate: [AdminGuard],
    loadChildren: () =>
      import('./pages/users/users.module').then((m) => m.UsersModule),
  },
  {
    path: 'claim',
    canActivate: [AdminGuard],
    loadChildren: () =>
      import('./pages/claim/claim.module').then((m) => m.ClaimModule),
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
