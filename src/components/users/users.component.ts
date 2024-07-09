import { Component } from '@angular/core';
import { User } from '../../shared/models/models';
import { GoodsService } from '../../services/goods.service';

@Component({
  selector: 'wish-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class MainPageComponent {
  get users() {
    return this.goodsService.users;
  }

  get selectedUser() {
    return this.goodsService.selectedUser;
  }

  constructor(private goodsService: GoodsService) {}

  selectUser(user: User): void {
    this.goodsService.selectUser(user);
  }
}
