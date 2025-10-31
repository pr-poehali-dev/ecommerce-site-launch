import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: 1,
    name: 'Беспроводные наушники',
    price: 12990,
    category: 'Аудио',
    image: 'https://cdn.poehali.dev/projects/668aae89-1a1b-46c2-a441-3a599136289e/files/538e082c-e46e-4941-a8ec-227fee48b3df.jpg',
    description: 'Премиум качество звука',
    brand: 'TechSound',
    material: 'Алюминий, эко-кожа',
    size: '18 x 15 x 8 см',
    weight: '250 г',
    color: 'Черный матовый',
    additionalImages: [
      'https://cdn.poehali.dev/projects/668aae89-1a1b-46c2-a441-3a599136289e/files/538e082c-e46e-4941-a8ec-227fee48b3df.jpg',
      'https://cdn.poehali.dev/projects/668aae89-1a1b-46c2-a441-3a599136289e/files/b28143f8-a600-4efb-b181-80e4eec349e5.jpg',
      'https://cdn.poehali.dev/projects/668aae89-1a1b-46c2-a441-3a599136289e/files/92038cd1-f886-47aa-aa91-c960ff29caef.jpg'
    ],
    detailedDescription: 'Беспроводные наушники премиум-класса с активным шумоподавлением. Обеспечивают кристально чистый звук и комфорт при длительном использовании. Идеальны для работы, путешествий и повседневного использования.',
    specifications: [
      { label: 'Тип подключения', value: 'Bluetooth 5.2' },
      { label: 'Время работы', value: 'До 30 часов' },
      { label: 'Шумоподавление', value: 'Активное ANC' },
      { label: 'Микрофон', value: 'Встроенный' },
      { label: 'Гарантия', value: '2 года' }
    ]
  },
  {
    id: 2,
    name: 'Ноутбук ProBook',
    price: 89990,
    category: 'Компьютеры',
    image: 'https://cdn.poehali.dev/projects/668aae89-1a1b-46c2-a441-3a599136289e/files/b28143f8-a600-4efb-b181-80e4eec349e5.jpg',
    description: 'Мощный и элегантный',
    brand: 'ProTech',
    material: 'Алюминиевый корпус',
    size: '35.6 x 24 x 1.6 см',
    weight: '1.4 кг',
    color: 'Серебристый',
    additionalImages: [
      'https://cdn.poehali.dev/projects/668aae89-1a1b-46c2-a441-3a599136289e/files/b28143f8-a600-4efb-b181-80e4eec349e5.jpg',
      'https://cdn.poehali.dev/projects/668aae89-1a1b-46c2-a441-3a599136289e/files/92038cd1-f886-47aa-aa91-c960ff29caef.jpg',
      'https://cdn.poehali.dev/projects/668aae89-1a1b-46c2-a441-3a599136289e/files/538e082c-e46e-4941-a8ec-227fee48b3df.jpg'
    ],
    detailedDescription: 'Производительный ноутбук для работы и развлечений. Тонкий корпус, яркий дисплей и мощная начинка обеспечат комфортную работу с любыми задачами.',
    specifications: [
      { label: 'Процессор', value: 'Intel Core i7 12-го поколения' },
      { label: 'Оперативная память', value: '16 ГБ DDR4' },
      { label: 'Накопитель', value: 'SSD 512 ГБ' },
      { label: 'Дисплей', value: '14" Full HD IPS' },
      { label: 'Видеокарта', value: 'Встроенная Intel Iris Xe' },
      { label: 'Гарантия', value: '1 год' }
    ]
  },
  {
    id: 3,
    name: 'Умные часы',
    price: 24990,
    category: 'Гаджеты',
    image: 'https://cdn.poehali.dev/projects/668aae89-1a1b-46c2-a441-3a599136289e/files/92038cd1-f886-47aa-aa91-c960ff29caef.jpg',
    description: 'Следи за здоровьем',
    brand: 'SmartTime',
    material: 'Нержавеющая сталь, силикон',
    size: '4.4 x 3.8 x 1.1 см',
    weight: '45 г',
    color: 'Черный',
    additionalImages: [
      'https://cdn.poehali.dev/projects/668aae89-1a1b-46c2-a441-3a599136289e/files/92038cd1-f886-47aa-aa91-c960ff29caef.jpg',
      'https://cdn.poehali.dev/projects/668aae89-1a1b-46c2-a441-3a599136289e/files/538e082c-e46e-4941-a8ec-227fee48b3df.jpg',
      'https://cdn.poehali.dev/projects/668aae89-1a1b-46c2-a441-3a599136289e/files/b28143f8-a600-4efb-b181-80e4eec349e5.jpg'
    ],
    detailedDescription: 'Современные умные часы с множеством функций для здоровья и фитнеса. Отслеживайте сон, пульс, активность и получайте уведомления прямо на запястье.',
    specifications: [
      { label: 'Дисплей', value: 'AMOLED 1.4"' },
      { label: 'Время работы', value: 'До 7 дней' },
      { label: 'Защита', value: 'IP68 (влагозащита)' },
      { label: 'Датчики', value: 'Пульс, кислород, GPS' },
      { label: 'Совместимость', value: 'iOS и Android' },
      { label: 'Гарантия', value: '1 год' }
    ]
  },
  {
    id: 4,
    name: 'Беспроводная мышь',
    price: 3990,
    category: 'Аксессуары',
    image: 'https://cdn.poehali.dev/projects/668aae89-1a1b-46c2-a441-3a599136289e/files/538e082c-e46e-4941-a8ec-227fee48b3df.jpg',
    description: 'Эргономичная и точная',
    brand: 'ErgoMouse',
    material: 'Пластик с софт-тач покрытием',
    size: '11 x 6 x 4 см',
    weight: '85 г',
    color: 'Черный',
    additionalImages: [
      'https://cdn.poehali.dev/projects/668aae89-1a1b-46c2-a441-3a599136289e/files/538e082c-e46e-4941-a8ec-227fee48b3df.jpg',
      'https://cdn.poehali.dev/projects/668aae89-1a1b-46c2-a441-3a599136289e/files/92038cd1-f886-47aa-aa91-c960ff29caef.jpg'
    ],
    detailedDescription: 'Эргономичная беспроводная мышь для комфортной работы. Точный сенсор и удобная форма обеспечивают максимальный комфорт при длительном использовании.',
    specifications: [
      { label: 'Тип подключения', value: 'Bluetooth / USB-приёмник' },
      { label: 'DPI', value: 'До 3200' },
      { label: 'Батарея', value: 'До 6 месяцев (AA)' },
      { label: 'Кнопки', value: '6 программируемых' },
      { label: 'Гарантия', value: '1 год' }
    ]
  },
  {
    id: 5,
    name: 'Механическая клавиатура',
    price: 8990,
    category: 'Аксессуары',
    image: 'https://cdn.poehali.dev/projects/668aae89-1a1b-46c2-a441-3a599136289e/files/b28143f8-a600-4efb-b181-80e4eec349e5.jpg',
    description: 'Тактильные переключатели',
    brand: 'MechType',
    material: 'Алюминиевый корпус, PBT-клавиши',
    size: '36 x 13 x 3.5 см',
    weight: '780 г',
    color: 'Черный',
    additionalImages: [
      'https://cdn.poehali.dev/projects/668aae89-1a1b-46c2-a441-3a599136289e/files/b28143f8-a600-4efb-b181-80e4eec349e5.jpg',
      'https://cdn.poehali.dev/projects/668aae89-1a1b-46c2-a441-3a599136289e/files/538e082c-e46e-4941-a8ec-227fee48b3df.jpg'
    ],
    detailedDescription: 'Профессиональная механическая клавиатура для геймеров и программистов. Качественные переключатели и RGB-подсветка создают идеальные условия для работы.',
    specifications: [
      { label: 'Переключатели', value: 'Blue Switch (тактильные)' },
      { label: 'Подсветка', value: 'RGB с настройкой' },
      { label: 'Подключение', value: 'USB Type-C' },
      { label: 'Макросы', value: 'Поддержка программирования' },
      { label: 'Гарантия', value: '2 года' }
    ]
  },
  {
    id: 6,
    name: 'Портативная колонка',
    price: 5990,
    category: 'Аудио',
    image: 'https://cdn.poehali.dev/projects/668aae89-1a1b-46c2-a441-3a599136289e/files/92038cd1-f886-47aa-aa91-c960ff29caef.jpg',
    description: 'Звук на ходу',
    brand: 'SoundGo',
    material: 'Пластик с прорезиненным покрытием',
    size: '18 x 6 x 6 см',
    weight: '420 г',
    color: 'Черный',
    additionalImages: [
      'https://cdn.poehali.dev/projects/668aae89-1a1b-46c2-a441-3a599136289e/files/92038cd1-f886-47aa-aa91-c960ff29caef.jpg',
      'https://cdn.poehali.dev/projects/668aae89-1a1b-46c2-a441-3a599136289e/files/b28143f8-a600-4efb-b181-80e4eec349e5.jpg'
    ],
    detailedDescription: 'Мощная портативная колонка с чистым звуком и длительным временем работы. Влагозащищенный корпус позволяет использовать на природе и у воды.',
    specifications: [
      { label: 'Мощность', value: '20 Вт' },
      { label: 'Bluetooth', value: '5.0' },
      { label: 'Время работы', value: 'До 12 часов' },
      { label: 'Защита', value: 'IPX7 (водонепроницаемость)' },
      { label: 'Микрофон', value: 'Встроенный для звонков' },
      { label: 'Гарантия', value: '1 год' }
    ]
  }
];
