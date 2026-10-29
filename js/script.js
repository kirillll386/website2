// Данные для каталога велосипедов и мотоциклов
const bikes = [
    {
        name: 'Santa Cruz V10',
        type: 'Велосипед',
        image: 'images/santacruz-v10.png',
        description: 'Беспощадный поглотитель спусков. Самый успешный даунхилл-велосипед в истории Santa Cruz с подвеской VPP™. Карбоновая рама CC, ход задней подвески 215 мм.',
        price: '899 000 ₽',
        link: 'santa-cruz-v10.html',
        specs: {
            'Рама': 'Carbon CC',
            'Ход спереди': '200 мм',
            'Ход сзади': '215 мм',
            'Размеры колёс': '27.5", MX, 29"',
            'Класс': 'Downhill',
            'Подвеска': 'VPP™'
        }
    },
    {
        name: 'Trek Slash 9.9',
        type: 'Велосипед',
        image: 'images/trek-slash-99.jpg',
        description: 'Двухподвесный эндуро-велосипед для агрессивного трейла и технических спусков. Карбоновая рама, регулируемая геометрия.',
        price: '699 000 ₽',
        link: 'trek-slash-99.html',
        specs: {
            'Рама': 'OCLV Mountain Carbon',
            'Ход спереди': '160 мм',
            'Ход сзади': '150 мм',
            'Колёса': '29"',
            'Класс': 'Enduro/Trail',
            'Тип': 'Двухподвес'
        }
    },
    {
        name: 'Cannondale Jekyll 1',
        type: 'Велосипед',
        image: 'images/cannondale-jekyll-1.jpg',
        description: 'Универсальный двухподвесный велосипед для эндуро. Система Gemini задней подвески, отличная управляемость в самых разных условиях.',
        price: '579 000 ₽',
        link: 'cannondale-jekyll-1.html',
        specs: {
            'Рама': 'SmartForm C1 Alloy',
            'Ход спереди': '165 мм',
            'Ход сзади': '165 мм',
            'Колёса': '29"',
            'Класс': 'Enduro',
            'Тип': 'Двухподвес'
        }
    },
    {
        name: 'Giant XTC Advanced SL 29',
        type: 'Велосипед',
        image: 'images/giant-xtc-advanced-sl-29.jpg',
        description: 'Лёгкий кросс-кантри велосипед на карбоновой раме. Оптимизирован для гонок и скоростных заездов по пересечённой местности.',
        price: '649 000 ₽',
        link: 'giant-xtc-advanced-sl-29.html',
        specs: {
            'Рама': 'Advanced SL Composite',
            'Вилка': 'RockShox SID Ultimate',
            'Колёса': '29"',
            'Класс': 'Cross-Country',
            'Тип': 'Хардтейл',
            'Вес': '9.8 кг'
        }
    },
    {
        name: 'Scott Spark RC 900 World Cup',
        type: 'Велосипед',
        image: 'images/scott-spark-rc-900-world-cup.jpg',
        description: 'Профессиональный кросс-кантри велосипед. Топовая модель для гонок World Cup с минимальным весом и максимальной эффективностью.',
        price: '729 000 ₽',
        link: 'scott-spark-rc-900-world-cup.html',
        specs: {
            'Рама': 'HMX Carbon',
            'Ход спереди': '100 мм',
            'Ход сзади': '100 мм',
            'Колёса': '29"',
            'Класс': 'Cross-Country',
            'Тип': 'Двухподвес',
            'Вес': '10.2 кг'
        }
    }
];

const motos = [
    {
        name: 'Yamaha YZ125 (2023)',
        type: 'Мотоцикл',
        image: 'images/yamaha-yz125-2023.webp',
        description: 'Гоночный мотоцикл для мотокросса с двухтактным двигателем жидкостного охлаждения. Модель 2022 года впервые за 17 лет получила полную смену поколения: новый двигатель с задним прямым впуском, оптимизированная рама и обновлённые тормоза.',
        price: '649 000 ₽',
        specs: {
            'Год выпуска': '2023',
            'Двигатель': '2-тактный, 1 цилиндр, 124 см³',
            'Охлаждение': 'Жидкостное',
            'Коробка передач': '6-ступенчатая',
            'Снаряжённая масса': '95 кг',
            'Высота по седлу': '980 мм',
            'Класс': 'Motocross'
        }
    },
    {
        name: 'Kawasaki KX450 (2025)',
        type: 'Мотоцикл',
        image: 'images/kawasaki-kx450-2025.webp',
        description: 'Флагманский 4-тактный гоночный мотоцикл для мотокросса. Модель 2024 года получила полную смену поколения, а версия 2025 года — обновлённую графику. Оснащён системой управления запуском, трекшн-контролем, электростартером и гидравлическим сцеплением.',
        price: '799 000 ₽',
        specs: {
            'Год выпуска': '2025',
            'Двигатель': '4-тактный, 1 цилиндр, 449 см³',
            'Охлаждение': 'Жидкостное',
            'Коробка передач': '5-ступенчатая',
            'Снаряжённая масса': '112,6 кг',
            'Электроника': 'Трекшн-контроль',
            'Класс': 'Motocross'
        }
    },
    {
        name: 'Honda CRF250R (2012)',
        type: 'Мотоцикл',
        image: 'images/honda-crf250r-2012.webp',
        description: 'Гоночный мотоцикл для мотокросса 250cc с 4-тактным двигателем PGM-FI. Для модели 2012 года изменили диаметр дроссельной заслонки, доработали впуск/выпуск и установили более широкие подножки для лучшей управляемости.',
        price: '399 000 ₽',
        specs: {
            'Год выпуска': '2012',
            'Двигатель': '4-тактный, 1 цилиндр, 249,4 см³',
            'Охлаждение': 'Жидкостное',
            'Коробка передач': '5-ступенчатая',
            'Снаряжённая масса': '104,7 кг',
            'Рама': 'Алюминиевая',
            'Класс': 'Motocross'
        }
    },
    {
        name: 'Suzuki RM-Z250 (2022)',
        type: 'Мотоцикл',
        image: 'images/suzuki-rmz250-2022.webp',
        description: '4-тактный гоночный мотоцикл для мотокросса класса 250сс. Модель 2022 года с обновлённой электронной системой впрыска топлива, улучшенной управляемостью и настроенной подвеской для максимальной производительности на трассе.',
        price: '679 000 ₽',
        specs: {
            'Год выпуска': '2022',
            'Двигатель': '4-тактный, 1 цилиндр, 249 см³',
            'Охлаждение': 'Жидкостное',
            'Коробка передач': '5-ступенчатая',
            'Снаряжённая масса': '106,8 кг',
            'Система питания': 'Впрыск топлива',
            'Класс': 'Motocross'
        }
    },
    {
        name: 'KTM 300 XC-W (2008)',
        type: 'Мотоцикл',
        image: 'images/ktm-300-xcw-2008-new.webp',
        description: 'Лёгкий двухтактный эндуро-мотоцикл с отличной тяговитостью и манёвренностью. Классика для внедорожных соревнований и активного катания.',
        price: '449 000 ₽',
        specs: {
            'Год выпуска': '2008',
            'Двигатель': '2-тактный, 1 цилиндр, 293 см³',
            'Охлаждение': 'Жидкостное',
            'Коробка передач': '5-ступенчатая',
            'Сухая масса': '103,1 кг',
            'Высота по седлу': '925 мм',
            'Класс': 'Enduro'
        }
    },
    {
        name: 'KTM 300 XC-W (2011)',
        type: 'Мотоцикл',
        image: 'images/ktm-300-xcw-2011.webp',
        description: 'Эндуро-мотоцикл KTM 300 XC-W 2011 года. Лёгкий двухтактный мотоцикл с отличной тяговитостью и манёвренностью для сложного внедорожного катания.',
        price: '479 000 ₽',
        specs: {
            'Год выпуска': '2011',
            'Двигатель': '2-тактный, 1 цилиндр, 293 см³',
            'Охлаждение': 'Водяное',
            'Система подачи': 'Карбюратор',
            'Коробка передач': '6-ступенчатая',
            'Сухая масса': '100,4 кг',
            'Высота по седлу': '985 мм',
            'Дорожный просвет': '385 мм',
            'Класс': 'Enduro'
        }
    }
];

// Техника вне каталога — для подбора по бюджету
const extraBikes = [
    {
        name: 'Forward Apache 2.0',
        type: 'Велосипед',
        description: 'Горный велосипед начального уровня для города и лёгкого бездорожья. Надёжная рама и дисковые тормоза.',
        priceValue: 32000,
        offCatalog: true
    },
    {
        name: 'Stels Navigator 800',
        type: 'Велосипед',
        description: 'Практичный горный велосипед для повседневных поездок и прогулок за городом.',
        priceValue: 42000,
        offCatalog: true
    },
    {
        name: 'Format 1414',
        type: 'Велосипед',
        description: 'Городской велосипед с удобной посадкой, крыльями и багажником — готов к ежедневным маршрутам.',
        priceValue: 56000,
        offCatalog: true
    },
    {
        name: 'GT Avalanche Comp',
        type: 'Велосипед',
        description: 'Универсальный горный велосипед с алюминиевой рамой и воздушной вилкой для активного катания.',
        priceValue: 74000,
        offCatalog: true
    },
    {
        name: 'Merida Big.Nine 300',
        type: 'Велосипед',
        description: 'Кросс-кантрийный велосипед на больших колёсах 29" — быстрый и уверенный на грунте.',
        priceValue: 94000,
        offCatalog: true
    },
    {
        name: 'Specialized Rockhopper',
        type: 'Велосипед',
        description: 'Проверенный горный велосипед для трейлов и городских поездок, лёгкая алюминиевая рама.',
        priceValue: 118000,
        offCatalog: true
    },
    {
        name: 'Orbea Alma H50',
        type: 'Велосипед',
        description: 'Спортивный кросс-кантри хардтейл для гонок и скоростных заездов по пересечённой местности.',
        priceValue: 156000,
        offCatalog: true
    },
    {
        name: 'Cannondale Trail SE 4',
        type: 'Велосипед',
        description: 'Агрессивный трейловый хардтейл с современной геометрией и надёжными компонентами.',
        priceValue: 198000,
        offCatalog: true
    }
];

const extraMotos = [
    {
        name: 'Irbis TT250',
        type: 'Мотоцикл',
        description: 'Доступный эндуро-мотоцикл для дачи и лёгкого бездорожья. Простая конструкция и недорогое обслуживание.',
        priceValue: 135000,
        offCatalog: true
    },
    {
        name: 'Regulmoto Sport 003',
        type: 'Мотоцикл',
        description: 'Мотоцикл для начинающих райдеров: уверенная тяга и комфортная посадка.',
        priceValue: 148000,
        offCatalog: true
    },
    {
        name: 'Racer RC300',
        type: 'Мотоцикл',
        description: 'Лёгкий эндуро для тренировок и выездов на природу с надёжным двигателем.',
        priceValue: 175000,
        offCatalog: true
    },
    {
        name: 'Motoland XR250',
        type: 'Мотоцикл',
        description: 'Универсальный мотоцикл двойного назначения: город, грунтовки и лёгкое бездорожье.',
        priceValue: 210000,
        offCatalog: true
    },
    {
        name: 'Kayo T2 250',
        type: 'Мотоцикл',
        description: 'Спортивный эндуро с современной подвеской для активного катания по пересечённой местности.',
        priceValue: 265000,
        offCatalog: true
    },
    {
        name: 'Honda CB400 Super Four',
        type: 'Мотоцикл',
        description: 'Классический городской мотоцикл с надёжным рядным двигателем и комфортной посадкой.',
        priceValue: 430000,
        offCatalog: true
    },
    {
        name: 'BMW G 310 R',
        type: 'Мотоцикл',
        description: 'Лёгкий дорожный мотоцикл для города и трассы с фирменной управляемостью BMW.',
        priceValue: 590000,
        offCatalog: true
    },
    {
        name: 'Kawasaki Ninja 400',
        type: 'Мотоцикл',
        description: 'Спортивный мотоцикл начального уровня: дружелюбный характер и яркая динамика.',
        priceValue: 640000,
        offCatalog: true
    },
    {
        name: 'Yamaha MT-07',
        type: 'Мотоцикл',
        description: 'Популярный нейкед с мощным двигателем и лёгким управлением для города и выходных.',
        priceValue: 850000,
        offCatalog: true
    },
    {
        name: 'Harley-Davidson Iron 883',
        type: 'Мотоцикл',
        description: 'Круизер с узнаваемым характером V-Twin — для неспешных поездок и стиля.',
        priceValue: 980000,
        offCatalog: true
    }
];

const electricMotos = [
    {
        name: 'Segway X260',
        image: 'images/electric/segway-x260.jpg',
        type: 'Электро-мотоцикл',
        description: 'Электрический dirt bike с мощным мотором и спортивной подвеской для трейлов.',
        priceValue: 330000,
        offCatalog: true
    },
    {
        name: 'Sur-Ron Light Bee X',
        image: 'images/electric/sur-ron-light-bee-x.jpg',
        type: 'Электро-мотоцикл',
        description: 'Лёгкий электрический мотоцикл для трейлов и города — тихий, манёвренный и без лишнего обслуживания.',
        priceValue: 360000,
        offCatalog: true
    },
    {
        name: 'Talaria Sting R MX4',
        image: 'images/electric/talaria-sting-r-mx4.jpg',
        type: 'Электро-мотоцикл',
        description: 'Электро-эндуро с увеличенным запасом хода и улучшенной подвеской для активного катания.',
        priceValue: 495000,
        offCatalog: true
    },
    {
        name: 'Zero FX',
        image: 'images/electric/zero-fx.jpg',
        type: 'Электро-мотоцикл',
        description: 'Дорожный электро-мотоцикл с мгновенной тягой и возможностью езды по грунтовкам.',
        priceValue: 890000,
        offCatalog: true
    },
    {
        name: 'KTM Freeride E-XC',
        image: 'images/electric/ktm-freeride-e-xc.jpg',
        type: 'Электро-мотоцикл',
        description: 'Спортивный электрический эндуро от KTM для техничных трейлов и тренировок.',
        priceValue: 990000,
        offCatalog: true
    },
    {
        name: 'Cake Kalk OR',
        image: 'images/electric/cake-kalk-or.jpg',
        type: 'Электро-мотоцикл',
        description: 'Минималистичный шведский электро-мотоцикл для бездорожья с лёгкой рамой.',
        priceValue: 1050000,
        offCatalog: true
    },
    {
        name: 'LiveWire S2 Del Mar',
        image: 'images/electric/livewire-s2-del-mar.jpg',
        type: 'Электро-мотоцикл',
        description: 'Городской электро-мотоцикл с современным дизайном и уверенной динамикой.',
        priceValue: 1290000,
        offCatalog: true
    },
    {
        name: 'Stark Varg',
        image: 'images/electric/stark-varg.png',
        type: 'Электро-мотоцикл',
        description: 'Высокотехнологичный электрический мотокросс-мотоцикл с настраиваемой мощностью.',
        priceValue: 1390000,
        offCatalog: true
    }
];

const electricMTBs = [
    {
        name: 'Stels e-MTB 27.5',
        image: 'images/electric/stels-e-mtb-27-5.jpg',
        type: 'Электро-МТБ',
        description: 'Доступный электро-велосипед для города и лёгких грунтовых маршрутов.',
        priceValue: 98000,
        offCatalog: true
    },
    {
        name: 'Forward e-bike 3.0',
        image: 'images/electric/forward-e-bike-3-0.jpg',
        type: 'Электро-МТБ',
        description: 'Электро-МТБ с мотором в задней втулке и батареей для повседневных поездок.',
        priceValue: 138000,
        offCatalog: true
    },
    {
        name: 'Merida eOne-Sixty 500',
        image: 'images/electric/merida-eone-sixty-500.jpg',
        type: 'Электро-МТБ',
        description: 'Трейловый электро-велосипед с мощным мотором и сбалансированной подвеской.',
        priceValue: 320000,
        offCatalog: true
    },
    {
        name: 'Trek Rail 7',
        image: 'images/electric/trek-rail-7.jpg',
        type: 'Электро-МТБ',
        description: 'Электро-МТБ для агрессивного трейла: уверенная тяга и современная геометрия.',
        priceValue: 390000,
        offCatalog: true
    },
    {
        name: 'Giant Trance X E+ 2',
        image: 'images/electric/giant-trance-x-e-plus-2.jpg',
        type: 'Электро-МТБ',
        description: 'Универсальный электро-двухподвес для техничных трейлов и длинных подъёмов.',
        priceValue: 420000,
        offCatalog: true
    },
    {
        name: 'Cannondale Moterra Neo 3',
        image: 'images/electric/cannondale-moterra-neo-3.jpg',
        type: 'Электро-МТБ',
        description: 'Мощный электро-МТБ с интегрированной батареей и уверенным ходом подвески.',
        priceValue: 450000,
        offCatalog: true
    },
    {
        name: 'Haibike AllMtn 6',
        image: 'images/electric/haibike-allmtn-6.jpg',
        type: 'Электро-МТБ',
        description: 'Электро-двухподвес для горных маршрутов с большим запасом хода.',
        priceValue: 490000,
        offCatalog: true
    },
    {
        name: 'Specialized Turbo Levo',
        image: 'images/electric/specialized-turbo-levo.jpg',
        type: 'Электро-МТБ',
        description: 'Легендарный электро-МТБ с плавной тягой и отточенной управляемостью.',
        priceValue: 540000,
        offCatalog: true
    },
    {
        name: 'Scott Patron eRide 900',
        image: 'images/electric/scott-patron-eride-900.jpg',
        type: 'Электро-МТБ',
        description: 'Премиальный электро-МТБ с интегрированным мотором и продвинутой подвеской.',
        priceValue: 620000,
        offCatalog: true
    },
    {
        name: 'Orbea Wild H10',
        image: 'images/electric/orbea-wild-h10.jpg',
        type: 'Электро-МТБ',
        description: 'Спортивный электро-МТБ для скоростного трейла и сложных подъёмов.',
        priceValue: 680000,
        offCatalog: true
    },
    {
        name: 'Santa Cruz Heckler 9',
        image: 'images/electric/santa-cruz-heckler-9.jpg',
        type: 'Электро-МТБ',
        description: 'Премиальный электро-двухподвес с карбоновой рамой и мощным мотором.',
        priceValue: 850000,
        offCatalog: true
    }
];

const electricScooters = [
    {
        name: 'Kugoo M4 Pro',
        image: 'images/electric/kugoo-m4-pro.jpg',
        type: 'Электросамокат',
        description: 'Практичный электросамокат для города с хорошим запасом хода и амортизацией.',
        priceValue: 48000,
        offCatalog: true
    },
    {
        name: 'Xiaomi Electric Scooter 4 Pro',
        image: 'images/electric/xiaomi-electric-scooter-4-pro.jpg',
        type: 'Электросамокат',
        description: 'Городской электросамокат с удобной складной конструкцией и надёжной электроникой.',
        priceValue: 55000,
        offCatalog: true
    },
    {
        name: 'Ninebot KickScooter F2 Pro',
        image: 'images/electric/ninebot-kickscooter-f2-pro.jpg',
        type: 'Электросамокат',
        description: 'Электросамокат для ежедневных поездок с большими колёсами и уверенным ходом.',
        priceValue: 68000,
        offCatalog: true
    },
    {
        name: 'Ninebot KickScooter Max G2',
        image: 'images/electric/ninebot-kickscooter-max-g2.jpg',
        type: 'Электросамокат',
        description: 'Дальнобойный электросамокат с амортизацией и комфортной посадкой.',
        priceValue: 88000,
        offCatalog: true
    },
    {
        name: 'Dualtron Mini',
        image: 'images/electric/dualtron-mini.jpg',
        type: 'Электросамокат',
        description: 'Компактный, но мощный электросамокат для города с хорошей динамикой.',
        priceValue: 125000,
        offCatalog: true
    },
    {
        name: 'Segway P100S',
        image: 'images/electric/segway-p100s.jpg',
        type: 'Электросамокат',
        description: 'Скоростной городской электросамокат с большим запасом хода и устойчивостью.',
        priceValue: 135000,
        offCatalog: true
    },
    {
        name: 'Kaabo Mantis 10',
        image: 'images/electric/kaabo-mantis-10.jpg',
        type: 'Электросамокат',
        description: 'Мощный двухмоторный электросамокат для быстрых городских маршрутов.',
        priceValue: 145000,
        offCatalog: true
    },
    {
        name: 'Apollo Phantom',
        image: 'images/electric/apollo-phantom.jpg',
        type: 'Электросамокат',
        description: 'Спортивный электросамокат с плавным ходом и высокой максимальной скоростью.',
        priceValue: 175000,
        offCatalog: true
    },
    {
        name: 'Kaabo Wolf Warrior 11',
        image: 'images/electric/kaabo-wolf-warrior-11.jpg',
        type: 'Электросамокат',
        description: 'Внедорожный двухмоторный электросамокат для динамичной езды по городу и грунту.',
        priceValue: 295000,
        offCatalog: true
    },
    {
        name: 'Dualtron Thunder 2',
        image: 'images/electric/dualtron-thunder-2.jpg',
        type: 'Электросамокат',
        description: 'Флагманский электросамокат с огромной мощностью и запасом хода.',
        priceValue: 360000,
        offCatalog: true
    },
    {
        name: 'Kugoo F1 Pro',
        image: 'images/electric/kugoo-f1-pro.jpg',
        type: 'Электросамокат',
        description: 'Лёгкий городской электросамокат для ежедневных поездок с удобной складной рамой.',
        priceValue: 59000,
        offCatalog: true
    },
    {
        name: 'Kugoo F3 Pro Max',
        image: 'images/electric/kugoo-f3-pro-max.jpg',
        type: 'Электросамокат',
        description: 'Мощный электросамокат с увеличенной батареей и амортизацией для города и грунта.',
        priceValue: 119000,
        offCatalog: true
    },
    {
        name: 'Kugoo G2 Ultra',
        image: 'images/electric/kugoo-g2-ultra.jpg',
        type: 'Электросамокат',
        description: 'Двухмоторный электросамокат повышенной мощности для быстрых и длинных маршрутов.',
        priceValue: 159000,
        offCatalog: true
    }
];

const compareGroups = {
    emoto: { items: electricMotos, label: 'Электро-мото' },
    emtb: { items: electricMTBs, label: 'Электро-МТБ' },
    escooter: { items: electricScooters, label: 'Электросамокаты' }
};

const compareState = {
    emoto: [],
    emtb: [],
    escooter: []
};

const compareLimit = 3;
let activeCompareType = 'emoto';

function getPriceValue(item) {
    if (typeof item.priceValue === 'number') return item.priceValue;
    if (typeof item.price === 'string') {
        const digits = item.price.replace(/[^\d]/g, '');
        return digits ? parseInt(digits, 10) : 0;
    }
    return 0;
}

function formatPrice(value) {
    return new Intl.NumberFormat('ru-RU').format(value) + ' ₽';
}

const typeConfig = {
    bike: { label: 'Велосипед', icon: 'bicycle', tagClass: 'picker-item__tag--bike', cardClass: 'card__type--bike' },
    moto: { label: 'Мотоцикл', icon: 'motorcycle', tagClass: 'picker-item__tag--moto', cardClass: 'card__type--moto' },
    emoto: { label: 'Электро-мотоцикл', icon: 'motorcycle', tagClass: 'picker-item__tag--emoto', cardClass: 'card__type--emoto' },
    emtb: { label: 'Электро-МТБ', icon: 'bicycle', tagClass: 'picker-item__tag--emtb', cardClass: 'card__type--emtb' },
    escooter: { label: 'Электросамокат', icon: 'bolt', tagClass: 'picker-item__tag--escooter', cardClass: 'card__type--escooter' }
};

function getPickerPool(type) {
    switch (type) {
        case 'moto':
            return motos.concat(extraMotos);
        case 'emoto':
            return electricMotos;
        case 'emtb':
            return electricMTBs;
        case 'escooter':
            return electricScooters;
        default:
            return bikes.concat(extraBikes);
    }
}

function normalizeModelName(name) {
    return String(name).toLowerCase().replace(/[^a-zа-яё0-9]+/gi, ' ').trim();
}

function findCandidates(type, budget) {
    const source = getPickerPool(type);
    const seen = new Set();

    const pool = source
        .map(item => ({ ...item, priceValue: getPriceValue(item) }))
        .filter(item => item.priceValue > 0)
        .filter(item => {
            const key = normalizeModelName(item.name);
            if (seen.has(key)) return false;
            seen.add(key);
            return true;
        })
        .sort((a, b) => a.priceValue - b.priceValue);

    const affordable = pool.filter(item => item.priceValue <= budget);

    if (affordable.length === 0) {
        return pool.slice(0, 4);
    }

    const result = affordable.slice().reverse();

    if (result.length < 4) {
        const extra = pool
            .filter(item => item.priceValue > budget)
            .slice(0, 4 - result.length);
        return result.concat(extra);
    }

    return result;
}

function renderPickerResult() {
    const result = document.getElementById('pickerResult');
    if (!result) return;

    const { candidates, type, budget } = pickerState;
    if (!candidates.length) return;

    const config = typeConfig[type] || typeConfig.bike;
    const isCatalogGroup = ['emoto', 'emtb', 'escooter'].includes(type);
    const aboveCount = candidates.filter(item => getPriceValue(item) > budget).length;
    const inBudgetCount = candidates.length - aboveCount;

    const itemsHtml = candidates.map((item, i) => {
        const priceValue = getPriceValue(item);
        const typeLabel = item.type || config.label;
        const diff = budget - priceValue;
        const diffLabel = diff >= 0 ? `Запас ${formatPrice(diff)}` : `Дороже на ${formatPrice(-diff)}`;
        const typeClass = config.tagClass;

        const specsHtml = item.specs && Object.keys(item.specs).length
            ? `<ul class="picker-item__specs">
                    ${Object.entries(item.specs).slice(0, 3).map(([key, value]) =>
                        `<li><strong>${escapeHtml(key)}:</strong> ${escapeHtml(value)}</li>`
                    ).join('')}
                </ul>`
            : '';

        return `
            <article class="picker-item" style="animation-delay: ${Math.min(i * 45, 450)}ms">
                <div class="picker-item__top">
                    <div class="picker-item__image">
                        <i class="fas fa-${config.icon} picker-item__placeholder"></i>
                        ${item.image ? `<img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.name)}" loading="lazy" onerror="this.style.display='none'">` : ''}
                    </div>
                    <div class="picker-item__heading">
                        <div class="picker-item__badges">
                            <span class="picker-item__tag ${typeClass}">${escapeHtml(typeLabel)}</span>
                            ${item.offCatalog && !isCatalogGroup ? '<span class="picker-item__tag picker-item__tag--off">Вне каталога</span>' : ''}
                        </div>
                        <h3 class="picker-item__title">${escapeHtml(item.name)}</h3>
                    </div>
                </div>
                ${item.description ? `<p class="picker-item__desc">${escapeHtml(item.description)}</p>` : ''}
                ${specsHtml}
                <div class="picker-item__bottom">
                    <div>
                        <div class="picker-item__price">${escapeHtml(item.price || formatPrice(priceValue))}</div>
                        <div class="picker-item__diff${diff < 0 ? ' picker-item__diff--warn' : ''}">${escapeHtml(diffLabel)}</div>
                    </div>
                    ${item.link ? `<a href="${escapeHtml(item.link)}" class="picker-item__more">Подробнее <i class="fas fa-arrow-right"></i></a>` : ''}
                </div>
            </article>
        `;
    }).join('');

    let summary;
    if (inBudgetCount === 0) {
        summary = `В бюджет ${formatPrice(budget)} точных совпадений нет — вот ближайшие варианты:`;
    } else if (aboveCount > 0) {
        summary = `В бюджете ${formatPrice(budget)} — <strong>${inBudgetCount}</strong>, плюс ${aboveCount} чуть дороже`;
    } else {
        summary = `Найдено вариантов: <strong>${candidates.length}</strong> — всё в пределах ${formatPrice(budget)}`;
    }

    result.innerHTML = `
        <div class="picker-results">
            <div class="picker-results__head">
                <span>${summary}</span>
                <span class="picker-results__hint">Каталог и модели вне его</span>
            </div>
            <div class="picker-grid">${itemsHtml}</div>
        </div>
    `;
}

function initPicker() {
    const form = document.getElementById('pickerForm');
    const input = document.getElementById('budgetInput');
    const result = document.getElementById('pickerResult');
    const typeSwitch = document.getElementById('typeSwitch');

    if (!form || !input || !result || !typeSwitch) return;

    typeSwitch.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-type]');
        if (!btn) return;

        pickerType = btn.dataset.type;
        typeSwitch.querySelectorAll('[data-type]').forEach((el) => {
            const active = el === btn;
            el.classList.toggle('active', active);
            el.setAttribute('aria-pressed', String(active));
        });
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const budget = Math.round(Number(input.value));
        if (!Number.isFinite(budget) || budget <= 0) {
            result.innerHTML = `
                <div class="picker__empty picker__empty--error">
                    <i class="fas fa-exclamation-circle"></i>
                    <p>Введите сумму больше нуля — и мы подберём технику под ваш бюджет.</p>
                </div>
            `;
            return;
        }

        pickerState.candidates = findCandidates(pickerType, budget);
        pickerState.type = pickerType;
        pickerState.budget = budget;

        renderPickerResult();
    });
}

let pickerType = 'bike';
const pickerState = {
    candidates: [],
    type: 'bike',
    budget: 0
};

function renderCards(items, containerId, type) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    if (items.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #666; grid-column: 1/-1;">Информация будет добавлена</p>';
        return;
    }
    
    const cardType = typeConfig[type] || typeConfig.bike;

    container.innerHTML = items.map(item => {
        const priceLabel = item.price || (typeof item.priceValue === 'number' ? formatPrice(item.priceValue) : '');

        return `
        <div class="card animate-on-scroll" ${item.link ? `onclick="window.location.href='${escapeHtml(item.link)}'" style="cursor:pointer;"` : ''}>
            <div class="card__image">
                ${item.image ? `<img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.name)}" loading="lazy" onerror="this.parentElement.innerHTML='<div style=\\'padding:2rem;text-align:center;color:#666;\\'><i class=\\'fas fa-image\\' style=\\'font-size:2rem;margin-bottom:0.5rem;display:block;\\'></i>Фото не добавлено</div>'">` : `<div class="card__image-placeholder"><i class="fas fa-${cardType.icon}"></i><span>${escapeHtml(cardType.label)}</span></div>`}
            </div>
            <div class="card__content">
                <h3 class="card__title">${escapeHtml(item.name)}</h3>
                <span class="card__type ${cardType.cardClass}">${escapeHtml(item.type || cardType.label)}</span>
                ${item.description ? `<p class="card__description">${escapeHtml(item.description)}</p>` : ''}
                ${item.specs && Object.keys(item.specs).length > 0 ? `
                    <ul class="card__specs">
                        ${Object.entries(item.specs).map(([key, value]) => 
                            `<li class="card__spec"><span>${escapeHtml(key)}</span><span>${escapeHtml(value)}</span></li>`
                        ).join('')}
                    </ul>
                ` : ''}
                ${priceLabel ? `<div class="card__price"><i class="fas fa-tag"></i> ${escapeHtml(priceLabel)}</div>` : ''}
                ${['emoto', 'emtb', 'escooter'].includes(type) ? `
                    <button type="button" class="card__compare" data-compare-type="${type}" data-compare-name="${escapeHtml(item.name)}" aria-pressed="false">
                        <i class="fas fa-plus"></i><span>Сравнить</span>
                    </button>
                ` : ''}
                ${item.link ? `<div class="card__more" style="margin-top:0.5rem;color:#eb0c25;font-weight:600;"><i class="fas fa-arrow-right"></i> Подробнее</div>` : ''}
            </div>
        </div>
    `;
    }).join('');
    
    // Trigger animation for newly added cards
    setTimeout(() => {
        const cards = container.querySelectorAll('.card.animate-on-scroll');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('visible');
            }, index * 100);
        });
    }, 100);
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function getCompareItems(type) {
    const group = compareGroups[type];
    if (!group) return [];

    return compareState[type]
        .map(name => group.items.find(item => item.name === name))
        .filter(Boolean);
}

function updateCompareUI() {
    document.querySelectorAll('[data-compare-type][data-compare-name]').forEach((btn) => {
        const active = compareState[btn.dataset.compareType].includes(btn.dataset.compareName);
        btn.classList.toggle('is-active', active);
        btn.setAttribute('aria-pressed', String(active));
        btn.querySelector('i').className = active ? 'fas fa-check' : 'fas fa-plus';
        btn.querySelector('span').textContent = active ? 'В сравнении' : 'Сравнить';
    });

    if (!compareState[activeCompareType].length) {
        const fallback = Object.keys(compareState).find(type => compareState[type].length);
        if (fallback) activeCompareType = fallback;
    }

    const items = compareState[activeCompareType];
    const navCount = document.getElementById('navCompareCount');
    const navBtn = document.getElementById('navCompare');
    const clearBtn = document.getElementById('compareClear');

    if (navCount) {
        navCount.textContent = items.length;
        navCount.hidden = items.length === 0;
    }

    if (navBtn) {
        navBtn.classList.toggle('has-selection', items.length > 0);
        navBtn.setAttribute('aria-label', items.length
            ? `Сравнить: выбрано ${items.length}`
            : 'Сравнить выбранные модели');
        navBtn.title = items.length
            ? `${compareGroups[activeCompareType].label}: выбрано ${items.length} из ${compareLimit}`
            : 'Сравнить выбранные модели';
    }

    if (clearBtn) clearBtn.disabled = items.length === 0;
}

function toggleCompare(type, name) {
    if (!compareGroups[type]) return;

    const list = compareState[type];
    const index = list.indexOf(name);

    if (index >= 0) {
        list.splice(index, 1);
    } else {
        if (list.length >= compareLimit) {
            activeCompareType = type;
            updateCompareUI();
            const navBtn = document.getElementById('navCompare');
            if (navBtn) {
                navBtn.classList.add('nav__compare--limit');
                setTimeout(() => navBtn.classList.remove('nav__compare--limit'), 450);
            }
            return;
        }
        list.push(name);
    }

    activeCompareType = type;
    updateCompareUI();
}

function removeCompareItem(type, name) {
    const list = compareState[type];
    if (!list) return;

    const index = list.indexOf(name);
    if (index >= 0) list.splice(index, 1);

    activeCompareType = type;
    updateCompareUI();

    if (getCompareItems(type).length >= 2) {
        openCompare();
    } else {
        closeCompare();
    }
}

function openCompare() {
    const items = getCompareItems(activeCompareType);
    if (items.length < 2) return;

    const modal = document.getElementById('compareModal');
    const body = document.getElementById('compareModalBody');
    if (!modal || !body) return;

    const specKeys = [...new Set(items.flatMap(item => item.specs ? Object.keys(item.specs) : []))];

    const headers = items.map(item => `
        <th>
            <button type="button" class="compare-table__remove" data-compare-remove="${escapeHtml(item.name)}" data-compare-type="${activeCompareType}" aria-label="Убрать ${escapeHtml(item.name)} из сравнения">
                <i class="fas fa-times"></i>
            </button>
            <span>${escapeHtml(item.name)}</span>
        </th>
    `).join('');

    const photoRow = items.map(item => `
        <td>
            ${item.image
                ? `<img class="compare-table__photo" src="${escapeHtml(item.image)}" alt="${escapeHtml(item.name)}" loading="lazy">`
                : '<div class="compare-table__photo-placeholder"><i class="fas fa-image"></i></div>'}
        </td>
    `).join('');

    const priceRow = items.map(item => `
        <td><span class="compare-table__price">${escapeHtml(formatPrice(getPriceValue(item)))}</span></td>
    `).join('');

    const typeRow = items.map(item => `<td>${escapeHtml(item.type || compareGroups[activeCompareType].label)}</td>`).join('');
    const descriptionRow = items.map(item => `<td>${escapeHtml(item.description || '—')}</td>`).join('');

    const specRows = specKeys.map(key => `
        <tr>
            <th>${escapeHtml(key)}</th>
            ${items.map(item => `<td>${escapeHtml(item.specs && item.specs[key] ? item.specs[key] : '—')}</td>`).join('')}
        </tr>
    `).join('');

    document.getElementById('compareModalTitle').textContent = `Сравнение: ${compareGroups[activeCompareType].label}`;
    body.innerHTML = `
        <div class="compare-table-wrap">
            <table class="compare-table">
                <thead><tr><th></th>${headers}</tr></thead>
                <tbody>
                    <tr><th>Фото</th>${photoRow}</tr>
                    <tr><th>Цена</th>${priceRow}</tr>
                    <tr><th>Тип</th>${typeRow}</tr>
                    <tr><th>Описание</th>${descriptionRow}</tr>
                    ${specRows}
                </tbody>
            </table>
        </div>
    `;

    modal.hidden = false;
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('compare-modal-open');
    const closeBtn = modal.querySelector('.compare-modal__close');
    if (closeBtn) closeBtn.focus();
}

function closeCompare() {
    const modal = document.getElementById('compareModal');
    if (!modal || modal.hidden) return;

    modal.hidden = true;
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('compare-modal-open');
}

function clearCompare(type) {
    if (!compareState[type]) return;

    compareState[type] = [];
    updateCompareUI();
    closeCompare();
}

function initCompare() {
    const dock = document.getElementById('compareDock');
    if (!dock) return;

    document.addEventListener('click', (e) => {
        const compareBtn = e.target.closest('[data-compare-type][data-compare-name]');
        if (compareBtn) {
            e.preventDefault();
            e.stopPropagation();
            toggleCompare(compareBtn.dataset.compareType, compareBtn.dataset.compareName);
            return;
        }

        const removeBtn = e.target.closest('[data-compare-remove]');
        if (removeBtn) {
            e.preventDefault();
            e.stopPropagation();
            removeCompareItem(removeBtn.dataset.compareType, removeBtn.dataset.compareRemove);
            return;
        }

        if (e.target.closest('[data-compare-open]')) {
            e.preventDefault();
            openCompare();
            return;
        }

        if (e.target.closest('[data-compare-clear]')) {
            e.preventDefault();
            clearCompare(activeCompareType);
            return;
        }

        if (e.target.closest('[data-compare-close]')) {
            e.preventDefault();
            closeCompare();
        }
    }, true);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeCompare();
    });
}

// Mobile menu toggle
function initMobileMenu() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav__link');
    
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// Counter animation
function initCounters() {
    const counters = document.querySelectorAll('.stat__number');
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-count'));
                const duration = 2000;
                const step = target / (duration / 16);
                let current = 0;
                
                const updateCounter = () => {
                    current += step;
                    if (current < target) {
                        counter.textContent = Math.floor(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target + '+';
                    }
                };
                
                updateCounter();
                observer.unobserve(counter);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
}

// Smooth scroll for anchor links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderCards(electricMotos, 'emotos-list', 'emoto');
    renderCards(electricMTBs, 'emtb-list', 'emtb');
    renderCards(electricScooters, 'escooters-list', 'escooter');
    renderCards(bikes, 'bikes-list', 'bike');
    renderCards(motos, 'motos-list', 'moto');
    initCompare();
    updateCompareUI();
    initMobileMenu();
    initScrollAnimations();
    initCounters();
    initSmoothScroll();
    initPicker();
    
    // Re-init animations after cards are rendered
    setTimeout(() => {
        initScrollAnimations();
    }, 500);
});
