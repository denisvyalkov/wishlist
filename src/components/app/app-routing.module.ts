import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from '../users/users.component';
import { UserComponent } from '../user/user.component';

const routes: Routes = [
  { path: 'users', component: MainPageComponent },
  { path: 'users/:userId', component: UserComponent },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
