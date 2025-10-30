import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Index = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

  const services = [
    {
      icon: 'Network',
      title: '5PL Координация',
      description: 'Полное управление логистическими цепочками с интеграцией всех участников процесса'
    },
    {
      icon: 'Handshake',
      title: 'Контракты с 3PL/2PL',
      description: 'Проверенные партнерства с крупными операторами по всему миру'
    },
    {
      icon: 'Warehouse',
      title: 'Распределительные комплексы',
      description: 'Современная складская инфраструктура с автоматизированными системами'
    },
    {
      icon: 'Globe',
      title: 'ВЭД и таможня',
      description: 'Полный цикл внешнеэкономической деятельности и таможенного оформления'
    },
    {
      icon: 'ShieldCheck',
      title: 'Вооруженное сопровождение',
      description: 'Безопасная транспортировка ценных и особо важных грузов'
    },
    {
      icon: 'TrendingUp',
      title: 'Крупные возможности',
      description: 'Масштабируемые решения для проектов любой сложности'
    }
  ];

  const stats = [
    { value: '500+', label: 'Партнёров по всему миру' },
    { value: '99.8%', label: 'Точность доставки' },
    { value: '24/7', label: 'Поддержка клиентов' },
    { value: '15+', label: 'Лет на рынке' }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <span className="text-white font-heading font-bold text-xl">H&C</span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg leading-tight">H&CLogistics</span>
              <span className="text-xs text-muted-foreground">H&CGroup</span>
            </div>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#about" className="hover:text-primary transition-colors">О холдинге</a>
            <a href="#stats" className="hover:text-primary transition-colors">Преимущества</a>
            <Link to="/career" className="hover:text-primary transition-colors">Карьера</Link>
          </div>
          <Button className="hidden md:flex">
            <Icon name="Phone" size={16} className="mr-2" />
            Связаться
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
                5PL-оператор логистики
              </div>
              <h1 className="font-heading font-bold text-5xl lg:text-7xl leading-tight">
                Глобальная логистика нового поколения
              </h1>
              <p className="text-xl text-muted-foreground">
                H&CLogistics — премиальный 5PL-оператор холдинга H&CGroup. Управляем полным циклом логистических операций с использованием передовых технологий и глобальной сети партнёров.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="group">
                  Начать работу
                  <Icon name="ArrowRight" size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="PlayCircle" size={18} className="mr-2" />
                  О компании
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl animate-pulse-glow" />
              <div className="relative grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <Card key={item} className="p-6 bg-card hover:bg-card/80 transition-all hover:scale-105 animate-float" style={{ animationDelay: `${item * 0.2}s` }}>
                    <Icon name={item === 1 ? 'Truck' : item === 2 ? 'Package' : item === 3 ? 'Globe' : 'Zap'} size={32} className="text-primary mb-3" />
                    <div className="text-2xl font-heading font-bold mb-1">
                      {item === 1 ? '500+' : item === 2 ? '99.8%' : item === 3 ? '24/7' : '15+'}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {item === 1 ? 'Партнёров' : item === 2 ? 'Точность' : item === 3 ? 'Поддержка' : 'Лет опыта'}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-card/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-4">
              Комплексные логистические решения
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр услуг для управления глобальными поставками
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <Card 
                key={idx}
                className="p-6 hover:bg-card/80 transition-all cursor-pointer group relative overflow-hidden"
                onMouseEnter={() => setActiveService(idx)}
                onMouseLeave={() => setActiveService(null)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 transition-opacity ${activeService === idx ? 'opacity-100' : 'opacity-0'}`} />
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={service.icon} size={28} className="text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Icon name="Building2" size={80} className="text-primary/50 mx-auto mb-4" />
                    <div className="font-heading font-bold text-6xl text-primary">H&C</div>
                    <div className="text-xl text-muted-foreground mt-2">Group</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="font-heading font-bold text-4xl lg:text-5xl">
                Часть крупного холдинга H&CGroup
              </h2>
              <p className="text-lg text-muted-foreground">
                H&CLogistics — ключевое подразделение международного холдинга H&CGroup, специализирующееся на высокотехнологичных логистических решениях уровня 5PL.
              </p>
              <div className="space-y-4">
                {[
                  { icon: 'CheckCircle2', text: 'Контракты с ведущими 3PL и 2PL операторами' },
                  { icon: 'CheckCircle2', text: 'Собственная сеть распределительных комплексов' },
                  { icon: 'CheckCircle2', text: 'Полный спектр услуг ВЭД и таможенного оформления' },
                  { icon: 'CheckCircle2', text: 'Вооруженное сопровождение особо важных грузов' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Icon name={item.icon} size={24} className="text-primary flex-shrink-0 mt-1" />
                    <span className="text-lg">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="stats" className="py-20 px-6 bg-card/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-4">
              Наши достижения в цифрах
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center space-y-2">
                <div className="font-heading font-bold text-5xl lg:text-6xl text-primary">
                  {stat.value}
                </div>
                <div className="text-lg text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <Card className="p-12 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-4">
              Готовы оптимизировать вашу логистику?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Свяжитесь с нами для консультации и узнайте, как H&CLogistics может трансформировать ваши логистические процессы
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg">
                <Icon name="Mail" size={18} className="mr-2" />
                Связаться с нами
              </Button>
              <Link to="/career">
                <Button size="lg" variant="outline">
                  <Icon name="Briefcase" size={18} className="mr-2" />
                  Вакансии
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <span className="text-white font-heading font-bold text-xl">H&C</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-heading font-bold text-lg leading-tight">H&CLogistics</span>
                  <span className="text-xs text-muted-foreground">H&CGroup</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Премиальный 5PL-оператор логистики
              </p>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">5PL Координация</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">3PL/2PL Контракты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Складская логистика</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">ВЭД</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#about" className="hover:text-primary transition-colors">О холдинге</a></li>
                <li><Link to="/career" className="hover:text-primary transition-colors">Карьера</Link></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Новости</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (495) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@hclogistics.com
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва, Россия
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2024 H&CLogistics. Часть холдинга H&CGroup. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
