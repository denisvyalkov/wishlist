import { Injectable } from '@angular/core';
import { User } from '../shared/models/models';

@Injectable({
  providedIn: 'root',
})
export class GoodsService {
  users: User[] = [];
  selectedUser: User | null = null;

  constructor() {
    this.#initUserGoods();
  }

  #initUserGoods() {
    const userData = localStorage.getItem('users');

    if (!userData) {
      this.users = [
        {
          id: 1,
          fio: 'Vyalkov Denis Andreevich',
          picture: 'https://i.ibb.co/SfKBPVx/image.jpg',
          info: '23 июля 1996г',
          goods: [
            {
              name: 'Мыши',
              opened: false,
              items: [
                {
                  name: 'Имя',
                  photo: 'https://string',
                  cost: 1399,
                  description: 'Первая мышь',
                  link: 'ссылка',
                },
                {
                  name: 'Имя',
                  photo: 'https://string',
                  cost: 1399,
                  description: 'Вторая мышь',
                  link: 'ссылка',
                },
                {
                  name: 'Имя',
                  photo: 'https://string',
                  cost: 1399,
                  description: 'Первая мышь',
                  link: 'ссылка',
                },
                {
                  name: 'Имя',
                  photo: 'https://string',
                  cost: 1399,
                  description: 'Вторая мышь',
                  link: 'ссылка',
                },
              ],
            },
            {
              name: 'Коврик',
              opened: false,
              items: [
                {
                  selected: false,
                  name: 'Имя',
                  photo: 'https://string',
                  cost: 1399,
                  description: 'Крутой очень сильно коврик',
                  link: 'ссылка',
                },
              ],
            },
          ],
        },
        {
          id: 2,
          fio: 'Vyalkov Denis Andreevich',
          picture: '',
          info: '23 июля 1996г',
          goods: [],
        },
        {
          id: 3,
          fio: 'Vyalkov Denis Andreevich',
          picture: '',
          info: '23 июля 1996г',
          goods: [],
        },
      ];
      return;
    }
    const users = JSON.parse(userData);
    this.users = users;
  }

  selectUser(user: User): void {
    this.selectedUser = user;
  }
}
