import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [calculatorData, setCalculatorData] = useState({
    area: '',
    room_type: '',
    floor: '',
    windows: '',
    insulation: ''
  });

  const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null);

  const calculatePrice = () => {
    const area = parseInt(calculatorData.area) || 0;
    let basePrice = area * 2500; // базовая цена за м²
    
    // Коэффициенты в зависимости от параметров
    const coefficients = {
      room_type: {
        living: 1.0,
        bedroom: 1.1,
        office: 1.2,
        server: 1.5
      },
      floor: {
        ground: 1.0,
        middle: 1.1,
        top: 1.2
      },
      windows: {
        north: 1.0,
        south: 1.3,
        east: 1.1,
        west: 1.2
      },
      insulation: {
        good: 1.0,
        average: 1.2,
        poor: 1.5
      }
    };

    let finalPrice = basePrice;
    if (calculatorData.room_type) finalPrice *= coefficients.room_type[calculatorData.room_type as keyof typeof coefficients.room_type] || 1;
    if (calculatorData.floor) finalPrice *= coefficients.floor[calculatorData.floor as keyof typeof coefficients.floor] || 1;
    if (calculatorData.windows) finalPrice *= coefficients.windows[calculatorData.windows as keyof typeof coefficients.windows] || 1;
    if (calculatorData.insulation) finalPrice *= coefficients.insulation[calculatorData.insulation as keyof typeof coefficients.insulation] || 1;

    setCalculatedPrice(Math.round(finalPrice));
  };

  const airConditioners = [
    {
      id: 1,
      name: "Mitsubishi Electric MSZ-LN25VG",
      power: "2.5 кВт",
      area: "до 25 м²",
      price: "45 000",
      features: ["Инверторный", "WiFi управление", "Самоочистка"],
      efficiency: "A+++",
      image: "/img/21073410-a200-443b-b89b-72df0e015730.jpg"
    },
    {
      id: 2,
      name: "Daikin FTXM25R",
      power: "2.5 кВт", 
      area: "до 25 м²",
      price: "38 000",
      features: ["Инверторный", "Тихая работа", "Фильтр PM2.5"],
      efficiency: "A++",
      image: "/img/21073410-a200-443b-b89b-72df0e015730.jpg"
    },
    {
      id: 3,
      name: "LG Standard Plus P12SP",
      power: "3.5 кВт",
      area: "до 35 м²", 
      price: "32 000",
      features: ["Быстрое охлаждение", "Золотое покрытие", "Dual Cool"],
      efficiency: "A+",
      image: "/img/21073410-a200-443b-b89b-72df0e015730.jpg"
    },
    {
      id: 4,
      name: "Haier Tibio HSU-09HTT03/R2",
      power: "2.6 кВт",
      area: "до 25 м²",
      price: "18 500",
      features: ["Базовая модель", "Простое управление", "Надёжность"],
      efficiency: "A",
      image: "/img/28ddeb08-3ff8-4d76-a17f-9688351fcabd.jpg"
    },
    {
      id: 5,
      name: "Ballu BSWI-09HN1/EP",
      power: "2.6 кВт",
      area: "до 26 м²",
      price: "16 900",
      features: ["Инверторный", "Бюджетная модель", "Энергосбережение"],
      efficiency: "A",
      image: "/img/560e5148-b65a-4130-8290-241bb4df8b1a.jpg"
    },
    {
      id: 6,
      name: "Centek CT-65A09",
      power: "2.6 кВт",
      area: "до 25 м²",
      price: "14 500",
      features: ["Оконная модель", "Быстрый монтаж", "Экономия места"],
      efficiency: "B+",
      image: "/img/c556a09e-e850-445a-9020-1a0497f3625b.jpg"
    }
  ];

  const services = [
    {
      icon: "Wrench",
      title: "Установка кондиционеров",
      description: "Профессиональный монтаж любой сложности с гарантией качества",
      price: "от 8 000 ₽"
    },
    {
      icon: "Settings",
      title: "Техническое обслуживание",
      description: "Регулярная чистка, заправка фреоном, диагностика",
      price: "от 3 500 ₽"
    },
    {
      icon: "Tool",
      title: "Ремонт и диагностика",
      description: "Быстрое устранение неисправностей, замена запчастей",
      price: "от 2 500 ₽"
    }
  ];

  const reviews = [
    {
      name: "Александр М.",
      rating: 5,
      text: "Отличная работа! Установили кондиционер быстро и качественно. Мастера очень аккуратные.",
      date: "2 недели назад"
    },
    {
      name: "Елена К.",
      rating: 5,
      text: "Заказывала установку Mitsubishi. Все сделали на высшем уровне, объяснили как пользоваться.",
      date: "1 месяц назад"
    },
    {
      name: "Дмитрий В.",
      rating: 5,
      text: "Регулярно обслуживаем кондиционеры в офисе. Всегда приезжают вовремя, работают профессионально.",
      date: "3 недели назад"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Snowflake" size={32} className="text-blue-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">КлиматСервис</h1>
                <p className="text-sm text-gray-600">Продажа и установка кондиционеров</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#catalog" className="text-gray-700 hover:text-blue-600">Каталог</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600">Услуги</a>
              <a href="#calculator" className="text-gray-700 hover:text-blue-600">Калькулятор</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600">О компании</a>
              <a href="#contacts" className="text-gray-700 hover:text-blue-600">Контакты</a>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-blue-600">+7 (989) 260-61-58</div>
              <div className="text-sm text-gray-600">Ежедневно 8:00-20:00</div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Профессиональная установка кондиционеров в Краснодаре
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Более 10 лет опыта. Гарантия качества. Быстрый монтаж за 1 день.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Icon name="Calculator" className="mr-2" size={20} />
                  Рассчитать стоимость
                </Button>
                <Button variant="outline" size="lg">
                  <Icon name="Phone" className="mr-2" size={20} />
                  Заказать звонок
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/4f6b6a24-77c9-457b-98e8-eb88f8ae7d52.jpg" 
                alt="Установка кондиционера"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Калькулятор стоимости установки</h2>
            <p className="text-gray-600">Рассчитайте примерную стоимость установки кондиционера</p>
          </div>
          
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="Calculator" className="mr-2" />
                Параметры помещения
              </CardTitle>
              <CardDescription>Заполните данные для точного расчета</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="area">Площадь помещения (м²)</Label>
                  <Input
                    id="area"
                    type="number"
                    placeholder="25"
                    value={calculatorData.area}
                    onChange={(e) => setCalculatorData({...calculatorData, area: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="room_type">Тип помещения</Label>
                  <Select value={calculatorData.room_type} onValueChange={(value) => setCalculatorData({...calculatorData, room_type: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите тип" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="living">Жилая комната</SelectItem>
                      <SelectItem value="bedroom">Спальня</SelectItem>
                      <SelectItem value="office">Офис</SelectItem>
                      <SelectItem value="server">Серверная</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="floor">Этаж</Label>
                  <Select value={calculatorData.floor} onValueChange={(value) => setCalculatorData({...calculatorData, floor: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите этаж" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ground">1-2 этаж</SelectItem>
                      <SelectItem value="middle">3-7 этаж</SelectItem>
                      <SelectItem value="top">8+ этаж</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="windows">Сторона окон</Label>
                  <Select value={calculatorData.windows} onValueChange={(value) => setCalculatorData({...calculatorData, windows: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите сторону" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="north">Север</SelectItem>
                      <SelectItem value="south">Юг</SelectItem>
                      <SelectItem value="east">Восток</SelectItem>
                      <SelectItem value="west">Запад</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="insulation">Качество теплоизоляции</Label>
                <Select value={calculatorData.insulation} onValueChange={(value) => setCalculatorData({...calculatorData, insulation: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите качество" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="good">Хорошая (новый дом)</SelectItem>
                    <SelectItem value="average">Средняя</SelectItem>
                    <SelectItem value="poor">Плохая (старый дом)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button onClick={calculatePrice} className="w-full bg-blue-600 hover:bg-blue-700">
                <Icon name="Calculator" className="mr-2" />
                Рассчитать стоимость
              </Button>

              {calculatedPrice && (
                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-2">
                        {calculatedPrice.toLocaleString()} ₽
                      </div>
                      <p className="text-gray-600">Примерная стоимость установки</p>
                      <p className="text-sm text-gray-500 mt-2">
                        * Итоговая стоимость может отличаться в зависимости от модели кондиционера и сложности монтажа
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Популярные модели кондиционеров</h2>
            <p className="text-gray-600">Широкий выбор кондиционеров от ведущих производителей</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {airConditioners.map((ac) => (
              <Card key={ac.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                    <img 
                      src={ac.image} 
                      alt={ac.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <CardTitle className="text-lg">{ac.name}</CardTitle>
                  <CardDescription className="space-y-1">
                    <div className="flex justify-between">
                      <span>Мощность:</span>
                      <span>{ac.power}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Площадь:</span>
                      <span>{ac.area}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-blue-600">{ac.price} ₽</div>
                    <Badge variant="secondary">{ac.efficiency}</Badge>
                  </div>
                  <div className="space-y-2 mb-4">
                    {ac.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <Icon name="Check" size={16} className="mr-2 text-green-600" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Icon name="ShoppingCart" className="mr-2" size={16} />
                    Заказать с установкой
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => {
                const catalogSection = document.getElementById('catalog');
                if (catalogSection) {
                  window.scrollTo({
                    top: catalogSection.offsetTop - 100,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              Посмотреть весь каталог
              <Icon name="ArrowRight" className="ml-2" size={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-gray-600">Полный комплекс работ с кондиционерами</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} size={32} className="text-blue-600" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600 mb-4">{service.price}</div>
                  <Button className="w-full">Заказать услугу</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Отзывы клиентов</h2>
            <p className="text-gray-600">Что говорят о нас наши клиенты</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="font-semibold">{review.name}</div>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">{review.date}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">О компании КлиматСервис</h2>
              <p className="text-gray-600 mb-4">
                Мы работаем на рынке климатической техники более 10 лет и являемся официальными дилерами 
                ведущих производителей кондиционеров.
              </p>
              <p className="text-gray-600 mb-6">
                Наши специалисты имеют все необходимые сертификаты и регулярно проходят обучение. 
                Гарантируем качественную установку и сервисное обслуживание.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">1000+</div>
                  <div className="text-sm text-gray-600">Установок в год</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">5 лет</div>
                  <div className="text-sm text-gray-600">Гарантия на монтаж</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">24/7</div>
                  <div className="text-sm text-gray-600">Сервисная поддержка</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">100%</div>
                  <div className="text-sm text-gray-600">Довольных клиентов</div>
                </div>
              </div>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Наши преимущества</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="Shield" className="text-green-600" />
                    <span>Официальная гарантия на все работы</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Clock" className="text-blue-600" />
                    <span>Быстрая установка за 1 день</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Users" className="text-purple-600" />
                    <span>Опытные сертифицированные мастера</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Truck" className="text-orange-600" />
                    <span>Бесплатная доставка по городу</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Headphones" className="text-red-600" />
                    <span>Круглосуточная поддержка</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Часто задаваемые вопросы</h2>
            <p className="text-gray-600">Ответы на популярные вопросы о кондиционерах</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Сколько времени занимает установка кондиционера?</AccordionTrigger>
                <AccordionContent>
                  Стандартная установка кондиционера занимает 3-6 часов, в зависимости от сложности монтажа. 
                  Если требуется штробление стен или длинная трасса, время может увеличиться до 8 часов.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Какая гарантия на установку?</AccordionTrigger>
                <AccordionContent>
                  Мы предоставляем 5 лет гарантии на монтажные работы и 1-3 года гарантии на оборудование 
                  (в зависимости от производителя). Гарантийное обслуживание включает бесплатный ремонт и замену.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Нужно ли обслуживать кондиционер?</AccordionTrigger>
                <AccordionContent>
                  Да, регулярное обслуживание необходимо для продления срока службы кондиционера. 
                  Рекомендуется проводить чистку и диагностику 1-2 раза в год: перед началом и после окончания сезона.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Можно ли установить кондиционер зимой?</AccordionTrigger>
                <AccordionContent>
                  Установку внутреннего блока можно проводить круглый год. Наружный блок устанавливается при температуре 
                  не ниже -15°C. При более низких температурах монтаж переносится на более теплое время.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Контакты</h2>
            <p className="text-gray-600">Свяжитесь с нами любым удобным способом</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-4">
                    <Icon name="Phone" className="text-blue-600" size={24} />
                    <div>
                      <div className="font-semibold">Телефон</div>
                      <div className="text-gray-600">+7 (989) 260-61-58</div>
                      <div className="text-sm text-gray-500">Ежедневно 8:00-20:00</div>
                    </div>
                  </div>
                </CardContent>
              </Card>



              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-4">
                    <Icon name="MapPin" className="text-blue-600" size={24} />
                    <div>
                      <div className="font-semibold">Адрес</div>
                      <div className="text-gray-600">г. Краснодар, ул. Красная, 123</div>
                      <div className="text-sm text-gray-500">Офис и склад</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Заказать звонок</CardTitle>
                <CardDescription>Оставьте заявку и мы перезвоним в течение 5 минут</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="name">Имя</Label>
                  <Input id="name" placeholder="Ваше имя" />
                </div>
                <div>
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" placeholder="+7 (___) ___-__-__" />
                </div>
                <div>
                  <Label htmlFor="service">Интересующая услуга</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите услугу" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="installation">Установка кондиционера</SelectItem>
                      <SelectItem value="maintenance">Техническое обслуживание</SelectItem>
                      <SelectItem value="repair">Ремонт</SelectItem>
                      <SelectItem value="consultation">Консультация</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Icon name="Phone" className="mr-2" size={16} />
                  Заказать звонок
                </Button>
                <p className="text-xs text-gray-500">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Snowflake" size={24} className="text-blue-400" />
                <div className="font-bold">КлиматСервис</div>
              </div>
              <p className="text-gray-400 text-sm">
                Профессиональная установка и обслуживание кондиционеров в Краснодаре
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Установка кондиционеров</li>
                <li>Техническое обслуживание</li>
                <li>Ремонт и диагностика</li>
                <li>Чистка и заправка</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Бренды</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Mitsubishi Electric</li>
                <li>Daikin</li>
                <li>LG</li>
                <li>Samsung</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div>+7 (989) 260-61-58</div>
                <div>г. Краснодар, ул. Красная, 123</div>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-gray-700" />
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div>© 2024 КлиматСервис. Все права защищены.</div>
            <div>Политика конфиденциальности • Договор оферты</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;