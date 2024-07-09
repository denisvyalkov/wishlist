import { Component, SimpleChanges } from '@angular/core';
import { Good, Goods, User } from '../../shared/models/models';
import { GoodsService } from '../../services/goods.service';
import { Router } from '@angular/router';

@Component({
  selector: 'wish-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  selectedGood: Good | null = null;

  

  get user() {
    return this.goodsService.selectedUser;
  }
  constructor(private goodsService: GoodsService, private router: Router) {}

  selectGood(good: Good): void {
    this.selectedGood = good;
  }

  toggleGoodsList(good: Goods): void {
    good.opened = !good.opened;
  }
  backToUsers() {
    this.goodsService.selectedUser = null;
    this.router.navigateByUrl('/users');
  }
}
