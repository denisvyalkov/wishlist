import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../components/app/app.component';
import { MainPageComponent } from '../components/users/users.component';
import { Router, RouterModule } from '@angular/router';
import { AppRoutingModule } from '../components/app/app-routing.module';
import { UserComponent } from '../components/user/user.component';
import { GoodsService } from '../services/goods.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { WishGoodDescription } from '../components/good-description/good-description-component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    UserComponent,
    WishGoodDescription,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [GoodsService],
  bootstrap: [AppComponent],
})
export class AppModule {
  isUserLogged = true;

  constructor(private router: Router) {
    if (this.isUserLogged) this.router.navigateByUrl('/users');
  }
}
