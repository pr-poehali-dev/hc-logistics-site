import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const Career = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: '',
    resume: null as File | null
  });

  const positions = [
    {
      title: 'Менеджер по логистике',
      department: 'Операции',
      location: 'Москва',
      type: 'Полная занятость',
      description: 'Управление логистическими операциями, координация с партнерами'
    },
    {
      title: 'Специалист по ВЭД',
      department: 'Внешнеэкономическая деятельность',
      location: 'Москва',
      type: 'Полная занятость',
      description: 'Таможенное оформление, работа с международными контрактами'
    },
    {
      title: 'Аналитик данных',
      department: 'IT / Аналитика',
      location: 'Москва / Удаленно',
      type: 'Полная занятость',
      description: 'Анализ логистических данных, оптимизация маршрутов'
    },
    {
      title: 'Руководитель склада',
      department: 'Складская логистика',
      location: 'Московская область',
      type: 'Полная занятость',
      description: 'Управление складским комплексом, контроль операций'
    }
  ];

  const benefits = [
    { icon: 'Wallet', title: 'Конкурентная зарплата', description: 'Официальное трудоустройство и бонусы' },
    { icon: 'GraduationCap', title: 'Обучение и развитие', description: 'Тренинги и курсы повышения квалификации' },
    { icon: 'Heart', title: 'Медицинская страховка', description: 'ДМС для сотрудников и их семей' },
    { icon: 'Plane', title: 'Отпуск 28 дней', description: 'Оплачиваемый отпуск и гибкий график' },
    { icon: 'Coffee', title: 'Комфортный офис', description: 'Современные офисы и удобная инфраструктура' },
    { icon: 'Users', title: 'Сильная команда', description: 'Профессиональная и дружная команда' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Резюме отправлено!',
      description: 'Мы свяжемся с вами в ближайшее время.',
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      message: '',
      resume: null
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, resume: e.target.files[0] });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <span className="text-white font-heading font-bold text-xl">H&C</span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg leading-tight">H&CLogistics</span>
              <span className="text-xs text-muted-foreground">H&CGroup</span>
            </div>
          </Link>
          <Link to="/">
            <Button variant="outline">
              <Icon name="ArrowLeft" size={16} className="mr-2" />
              На главную
            </Button>
          </Link>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-7xl text-center">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
            Карьера в H&CLogistics
          </div>
          <h1 className="font-heading font-bold text-5xl lg:text-7xl mb-6">
            Присоединяйтесь к нашей команде
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Мы ищем талантливых специалистов, готовых развивать глобальную логистику вместе с лидером рынка
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-card/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-4">
              Почему H&CLogistics?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <Card key={idx} className="p-6 hover:bg-card/80 transition-all group">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name={benefit.icon} size={28} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-4">
              Открытые вакансии
            </h2>
            <p className="text-xl text-muted-foreground">
              Найдите позицию, которая соответствует вашим навыкам
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            {positions.map((position, idx) => (
              <Card key={idx} className="p-6 hover:bg-card/80 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-heading font-semibold text-2xl mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Icon name="Building" size={14} />
                        {position.department}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Icon name="MapPin" size={14} />
                        {position.location}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Icon name="Clock" size={14} />
                        {position.type}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">{position.description}</p>
                <Button className="w-full" onClick={() => {
                  setFormData({ ...formData, position: position.title });
                  document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  Откликнуться на вакансию
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="application-form" className="py-20 px-6 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-4">
              Отправить резюме
            </h2>
            <p className="text-xl text-muted-foreground">
              Заполните форму, и мы свяжемся с вами в ближайшее время
            </p>
          </div>
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Имя и фамилия *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Иван Иванов"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ivan@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="position">Желаемая позиция *</Label>
                  <Input
                    id="position"
                    required
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    placeholder="Менеджер по логистике"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">Опыт работы *</Label>
                <Textarea
                  id="experience"
                  required
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  placeholder="Расскажите о вашем опыте работы..."
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Дополнительная информация</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Расскажите о ваших достижениях и мотивации..."
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="resume">Прикрепить резюме (PDF, DOC, DOCX)</Label>
                <div className="flex items-center gap-4">
                  <Input
                    id="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="cursor-pointer"
                  />
                  {formData.resume && (
                    <span className="text-sm text-muted-foreground flex items-center gap-2">
                      <Icon name="FileText" size={16} />
                      {formData.resume.name}
                    </span>
                  )}
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full">
                <Icon name="Send" size={18} className="mr-2" />
                Отправить резюме
              </Button>
            </form>
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
                <li><Link to="/#about" className="hover:text-primary transition-colors">О холдинге</Link></li>
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

export default Career;
