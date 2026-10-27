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

function renderCards(items, containerId, type) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    if (items.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #666; grid-column: 1/-1;">Информация будет добавлена</p>';
        return;
    }
    
    container.innerHTML = items.map(item => `
        <div class="card animate-on-scroll" ${item.link ? `onclick="window.location.href='${escapeHtml(item.link)}'" style="cursor:pointer;"` : ''}>
            <div class="card__image">
                ${item.image ? `<img src="${item.image}" alt="${item.name}" onerror="this.parentElement.innerHTML='<div style=\\'padding:2rem;text-align:center;color:#666;\\'><i class=\\'fas fa-image\\' style=\\'font-size:2rem;margin-bottom:0.5rem;display:block;\\'></i>Фото не добавлено</div>'">` : '<div style="padding:2rem;text-align:center;color:#666;"><i class="fas fa-image" style="font-size:2rem;margin-bottom:0.5rem;display:block;"></i>Фото не добавлено</div>'}
            </div>
            <div class="card__content">
                <h3 class="card__title">${escapeHtml(item.name)}</h3>
                <span class="card__type ${type === 'bike' ? 'card__type--bike' : 'card__type--moto'}">${escapeHtml(item.type || (type === 'bike' ? 'Велосипед' : 'Мотоцикл'))}</span>
                ${item.description ? `<p class="card__description">${escapeHtml(item.description)}</p>` : ''}
                ${item.specs && Object.keys(item.specs).length > 0 ? `
                    <ul class="card__specs">
                        ${Object.entries(item.specs).map(([key, value]) => 
                            `<li class="card__spec"><span>${escapeHtml(key)}</span><span>${escapeHtml(value)}</span></li>`
                        ).join('')}
                    </ul>
                ` : ''}
                ${item.price ? `<div class="card__price"><i class="fas fa-tag"></i> ${escapeHtml(item.price)}</div>` : ''}
                ${item.link ? `<div class="card__more" style="margin-top:0.5rem;color:#eb0c25;font-weight:600;"><i class="fas fa-arrow-right"></i> Подробнее</div>` : ''}
            </div>
        </div>
    `).join('');
    
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
    renderCards(bikes, 'bikes-list', 'bike');
    renderCards(motos, 'motos-list', 'moto');
    initMobileMenu();
    initScrollAnimations();
    initCounters();
    initSmoothScroll();
    
    // Re-init animations after cards are rendered
    setTimeout(() => {
        initScrollAnimations();
    }, 500);
});
