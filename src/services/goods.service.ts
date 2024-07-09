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
                  name: 'ARDOR GAMING Agile PRO',
                  photo:
                    'https://c.dns-shop.ru/thumb/st4/fit/500/500/bfaad065cf02d1db94b3aaaeac03333f/d3ab51ca96f5d9bde6c596f218997e0e20bd901b87f56abe97b785334169ba20.jpg.webp',
                  cost: '4 999 ₽',
                  description: 'Длина 120 мм',
                  link: 'https://www.dns-shop.ru/product/8542123599f6bec1/mys-besprovodnaa-ardor-gaming-agile-pro-ardw-ag3395-wt-belyj/characteristics/',
                },
                {
                  name: 'ARDOR GAMING Phantom PRO V2',
                  photo:
                    'https://c.dns-shop.ru/thumb/st4/fit/500/500/391c01adff57327bb0543dd424861036/cc60243fe6b780d072bfb6575c1a71bdd6743997a4c45cc0f14eac0a63493632.jpg.webp',
                  cost: '5 299 ₽',
                  description: 'Длина 125 мм',
                  link: 'https://www.dns-shop.ru/product/c251f0deddb0ed20/mys-besprovodnaaprovodnaa-ardor-gaming-phantom-pro-v2-ardw-ph3395-wt-belyj/characteristics/',
                },
                {
                  name: 'Razer DeathAdder V3 Pro',
                  photo:
                    'https://c.dns-shop.ru/thumb/st4/fit/500/500/2ee68a760e17021f7bb62fefed995f6a/c23a6bd9c79cfb1ea93bbf371727f66a71c98e1fdfa23a39be54a750ad4f508b.jpg.webp',
                  cost: '13 899 ₽',
                  description: 'Длина 128 мм',
                  link: 'https://www.dns-shop.ru/product/39e593bc22b7ed20/mys-besprovodnaaprovodnaa-razer-deathadder-v3-pro-rz01-04630200-r3g1-belyj/characteristics/',
                },
                {
                  name: 'ARDOR GAMING Fury',
                  photo:
                    'https://c.dns-shop.ru/thumb/st4/fit/500/500/554e077065ae183a21d7c5b5e248030b/63bdb82893aa7f3fbaa06e277175de8e7e57ebe86a7436619da62b8d30075616.jpg.webp',
                  cost: '2 450 ₽',
                  description: 'Длина 130 мм, тяжелая',
                  link: 'https://www.dns-shop.ru/product/474a97bd0d8aed20/mys-besprovodnaaprovodnaa-ardor-gaming-fury-ardw-fury3325-wt-belyj/characteristics/',
                },
                {
                  name: 'ARDOR GAMING Edge Air Ultra',
                  photo:
                    'https://c.dns-shop.ru/thumb/st1/fit/500/500/48d57a60066814524e966bae94fd2c81/7641c68ad72a2e761e4f5c1d2547e81fb99763f2a276c017f6af66c91c44abe4.jpg.webp',
                  cost: '3 699 ₽',
                  description: 'Длина 122 мм',
                  link: 'https://www.dns-shop.ru/product/8c73fa1e0d7eed20/mys-besprovodnaaprovodnaa-ardor-gaming-edge-air-ultra-ardw-ega3370-wt-belyj/characteristics/',
                },
              ],
            },
            {
              name: 'Коврик',
              opened: false,
              items: [
                {
                  selected: false,
                  name: 'Коврик ARDOR GAMING XL (White)',
                  photo:
                    'https://c.dns-shop.ru/thumb/st1/fit/500/500/65c1c1609a10a7c5a0d3889f31f92021/f4e167d895e0fbab34a2bb16b593ad4454365ad8c07ec7b0878c85adbeb01f9c.jpg.webp',
                  cost: '1 099 ₽',
                  description: 'Коврик DNS (DESCRIPTION)',
                  link: 'https://www.dns-shop.ru/product/229ab211f2a3ed20/kovrik-ardor-gaming-gm-xl-white-xl-belyj/',
                },
              ],
            },
            {
              name: 'Часы',
              opened: false,
              items: [
                {
                  selected: false,
                  name: 'Смарт-часы Xiaomi Redmi Watch 3 Active',
                  photo:
                    'https://c.dns-shop.ru/thumb/st4/fit/500/500/28f574802dfcd1d51db67808669b6b73/8e1e94ff3208a2570ea65978eb7768e6f47239b59ac64529396e89bc969c99dc.jpg.webp',
                  cost: '3 999 ₽',
                  description: 'Описание не выгрузилось, ай-ай-ай, DNS',
                  link: 'https://www.dns-shop.ru/product/4e766ede0a8fed20/smart-casy-xiaomi-redmi-watch-3-active/',
                },
              ],
            },
            {
              name: 'Рюкзаки',
              opened: false,
              items: [
                {
                  selected: false,
                  name: 'Рюкзак Termit персиковый',
                  photo:
                    'https://cdn.sportmaster.ru/upload/mdm/media_content/resize/416/1008_800_5683/83064700299.jpg',
                  cost: '749 ₽',
                  description:
                    'Функциональный рюкзак Termit — отличный вариант для активного отдыха. В модели предусмотрено отделение для ноутбука. Передний карман на молнии позволяет хранить нужные мелочи. Лямки регулируются по длине. Объем 15 л.',
                  link: 'https://www.sportmaster.ru/product/29401690299/',
                },
                {
                  selected: false,
                  name: 'Рюкзак Demix',
                  photo:
                    'https://cdn.sportmaster.ru/upload/mdm/media_content/resize/cbc/1008_800_9b52/109971540299.jpg',
                  cost: '1 599 ₽',
                  description:
                    'Рюкзак Demix объемом 15 л. Вместительное основное отделение с отсеком для ноутбука позволит взять с собой все необходимое. Для мелких вещей предусмотрено 2 кармана по бокам и 1 фронтальный карман на молнии. Водоотталкивающая пропитка защитит содержимое рюкзака от мелкого дождя.',
                  link: 'https://www.sportmaster.ru/product/29747970299/',
                },
                {
                  selected: false,
                  name: 'Рюкзак школьный с ручками для подростков',
                  photo:
                    'https://content-01.wbbasket.ru/d6c91788-1ec3-4735-a5c6-aca1f7060ad7/4.webp',
                  cost: '1 143 ₽',
                  description: 'Описание не найдено',
                  link: 'https://www.wildberries.ru/catalog/146425421/detail.aspx',
                },
                {
                  selected: false,
                  name: 'Рюкзак сумка для мамы малыша на коляску для путешествий',
                  photo:
                    'https://feedback06.wbbasket.ru/vol1923/part192361/192361852/photos/fs.webp',
                  cost: '2 950 ₽',
                  description:
                    'Водонепроницаемая ткань из полиэстера; полиэстер; Влагостойкая ткань; высокопрочная ткань',
                  link: 'https://www.wildberries.ru/catalog/134939832/detail.aspx',
                },
                {
                  selected: false,
                  name: 'Рюкзак городской унисекс бежевый мужской женский',
                  photo:
                    'https://ir-3.ozone.ru/s3/multimedia-1-u/wc1000/6948315534.jpg',
                  cost: '907 ₽',
                  description:
                    'Функциональный рюкзак Termit — отличный вариант для активного отдыха. В модели предусмотрено отделение для ноутбука. Передний карман на молнии позволяет хранить нужные мелочи. Лямки регулируются по длине. Объем 15 л.',
                  link: 'https://www.ozon.ru/product/ryukzak-gorodskoy-uniseks-bezhevyy-muzhskoy-zhenskiy-podrostkovyy-sportivnyy-portfel-dlya-1259136426/?asb=ANyt%252FgwLx82vtAFARgxcnmBMFZVM6hHidU2olfjprSQ%253D&asb2=zhWajnOxwMSFQlYpcfjBiTLfq7oFtfSHPJN2Yhfoi9MH2iqLeAhOH3HM0yF8SOfnMZR0qC66bIoqkL3xuCgvRw&avtc=1&avte=2&avts=1720532301&from_sku=1259136500&from_url=https%253A%252F%252Fwww.ozon.ru%252Fcategory%252Faksessuary-7697%252F%253Fcategory_was_predicted%253Dtrue%2526deny_category_prediction%253Dtrue%2526from_global%253Dtrue%2526text%253D%2525D1%252580%2525D1%25258E%2525D0%2525BA%2525D0%2525B7%2525D0%2525B0%2525D0%2525BA&keywords=%D1%80%D1%8E%D0%BA%D0%B7%D0%B0%D0%BA&oos_search=false',
                },
              ],
            },
            {
              name: 'Кофеварки',
              opened: false,
              items: [
                {
                  selected: false,
                  name: 'Кофеварка рожковая Libhof CCM-320 бежевая',
                  photo:
                    'https://ir-3.ozone.ru/s3/multimedia-1-w/wc1000/7049917760.jpg',
                  cost: '6 112 ₽',
                  description:
                    'Кофеварка Libhof CCM-320 – это отличное решение для любителей настоящего эспрессо и капучино. Она имеет стильный бежевый цвет и металлический корпус, который придает ей элегантный вид. Кофеварка рожковая, что означает, что она использует молотый кофе для приготовления напитка. Капучинатор Панарелло позволяет приготовить вкусный капучино вручную, а мощность 1200 Вт обеспечивает быстрое и качественное приготовление кофе. Объем кофеварки составляет 1,8 литра, что позволяет приготовить до двух порций капучино или эспрессо одновременно',
                  link: 'https://www.ozon.ru/product/kofevarka-rozhkovaya-libhof-ccm-320-bezhevaya-kapuchinator-zashchita-ot-peregreva-20-bar-1-8-l-1237452232/?advert=_3qe3AS7g4zYKm3ViTbM16hcZYR2URNEUly-JYZ9OLedcoytfIvdHxllSw2L6TQfRvC-_4Qouz24kkdDDt_Uuh0qnQASOE-ctrFMPyh0fAWruTBD7UbH1GtEs2hOrid_MhZ2eO5-sbGjgc6qDXLUld70N6JBmcVD98NWSFa3bSBDCIftFCOzIbs6cqumn8bJIL0hkkZ9IQAGyyeQxQs0OicsgvuD7yS3vWZg2_molz8S6ENH_e2fQ5jfHYM78Z65bF1U_A3QiWGj81PgifxIh2_ACcVLPc4G4yfRqi5TUE_OKyaqFIPKrPg49_cgcRGRnwcxWP2Kb7j2gvIiaDm_0kHOpp8&avtc=1&avte=4&avts=1720518418&keywords=%D0%BA%D0%BE%D1%84%D0%B5%D0%B2%D0%B0%D1%80%D0%BA%D0%B0',
                },
                {
                  selected: false,
                  name: 'Капсульная кофемашина KaringBee ST-510',
                  photo:
                    'https://ir-3.ozone.ru/s3/multimedia-1-9/wc1000/7026246225.jpg',
                  cost: '5 760 ₽',
                  description:
                    'Приготовьте ароматный эспрессо за считанные секунды с помощью универсальной кофемашины "4-в-1" Karingbee ST-510. Поставляется с несколькими адаптерами, позволяющими заваривать капсульный и молотый кофе. Легкая и компактная, с элегантным дизайном, эта кофемашина идеально впишется в интерьер вашей кухни или офиса.',
                  link: 'https://www.ozon.ru/product/kapsulnaya-kofemashina-karingbee-st-510-4-v-1-nespresso-dolce-gusto-ese-44mm-molotnyy-1263530327/?advert=CpmL9jWH0qFb47ZyO0JbECN7PhCigXw1L7dAamQ8ugkEBbXVvjMHHFNWguVU4dFC1By6nCWobNZlfj5jLBAK3pwec_taY8nUa9jKNODK81oCeamqqC75tr46cJMe-ElxpAAQfbJz5CdwgVQiFEGW3vd2Vl--FZx1dSPOeK_b_KldD3jN_aRtkUOuN2a5PE9qfcpkAEAhT-uuAmj9XG1Jc57D3rnZPkD6VAMl72g6A1dKKUvuARWk55gDkzciPS3e67k_UflUxUZSHDzpsglvW6WJ3hSiVefHEgF17P7k_vMV5WvxJLozUrW1u_zukGirCzI_p6I7GwY78A&avtc=1&avte=2&avts=1720518418&keywords=%D0%BA%D0%BE%D1%84%D0%B5%D0%B2%D0%B0%D1%80%D0%BA%D0%B0',
                },
                {
                  selected: false,
                  name: 'Кофеварка капельная Redmond CM708 серебристый',
                  photo:
                    'https://c.dns-shop.ru/thumb/st1/fit/500/500/c3d40e15bd927e9a88a53dcd1f9bbb17/b915cbd7650d1a969722c184bf145c4aeb7f80d022b5ab9a64e3f9c1ff3d70be.jpg.webp',
                  cost: '4 499 ₽',
                  description:
                    'Кофеварка капельная Redmond CM708 выполнена в металлическом корпусе. Она оснащена кувшином из прозрачного термостойкого стекла вместимостью 1.5 л. В режиме «Арома» кофеварка медленно пропускает воду через фильтр с молотым кофе, благодаря чему раскрывается вкус и аромат. Напиток получается насыщенным. Многоразовый съемный фильтр очищается от остатков кофе под проточной водой. После приготовления включается плита автоподогрева, которая сохраняет напиток горячим до 35 минут. Противокапельная система останавливает подачу кофе при извлечении кувшина. Поворотный регулятор с дисплеем позволяет настраивать время приготовления напитка и управлять таймером отложенного запуска. На основании кофеварки Redmond CM708 расположены нескользящие ножки.',
                  link: 'https://www.dns-shop.ru/product/f08279824f9b674d/kofevarka-kapelnaa-redmond-cm708-serebristyj/',
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
