import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Store, Wrench } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Construção Residencial',
      description:
        'Criamos lares que combinam design moderno, conforto e funcionalidade. Do projeto à entrega das chaves, cuidamos de cada etapa com precisão.',
      icon: Building2,
      imageUrl:
        'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/service-residential.jpg',
    },
    {
      title: 'Projetos Comerciais',
      description:
        'Desenvolvemos espaços comerciais e corporativos que impulsionam negócios. Soluções inteligentes para lojas, escritórios e complexos industriais.',
      icon: Store,
      imageUrl:
        'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/service-commercial.jpg',
    },
    {
      title: 'Reformas e Manutenção',
      description:
        'Modernizamos e revitalizamos ambientes com serviços de reforma de alto padrão, garantindo a valorização e a durabilidade do seu patrimônio.',
      icon: Wrench,
      imageUrl:
        'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/service-renovation.jpg',
    },
  ];

  const cardVariants = {
    offscreen: {
      scale: 0.9,
      opacity: 0,
    },
    onscreen: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        duration: 0.8,
      },
    },
  };

  return (
    <div className="bg-neutral section-padding">
      <div className="container mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-base font-semibold leading-7 text-primary">
            Nossas Especialidades
          </h2>
          <p className="section-title">Soluções Completas em Construção</p>
          <p className="section-subtitle">
            Oferecemos uma gama completa de serviços para atender às diversas
            necessidades do mercado, sempre com o selo de qualidade e confiança
            da NTC Brasil.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
            >
              <img
                src={service.imageUrl}
                alt={service.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary">
                    {service.title}
                  </h3>
                </div>
                <p className="mt-5 text-gray-600 flex-grow">
                  {service.description}
                </p>
                <div className="mt-auto pt-6">
                  <a
                    href="#contact"
                    className="font-semibold text-primary hover:text-blue-500 transition-colors"
                  >
                    Solicitar Orçamento &rarr;
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
