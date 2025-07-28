import React from 'react';
import { motion } from 'framer-motion';
import { Building, Target, ShieldCheck } from 'lucide-react';

export default function About() {
  const features = [
    {
      name: 'Nossa Missão',
      description:
        'Entregar projetos de construção que superem as expectativas, combinando inovação, sustentabilidade e a mais alta qualidade em cada detalhe.',
      icon: Target,
    },
    {
      name: 'Nossa Visão',
      description:
        'Ser a construtora de referência no Brasil, reconhecida pela excelência, integridade e pela capacidade de transformar desafios em marcos de sucesso.',
      icon: Building,
    },
    {
      name: 'Nossos Valores',
      description:
        'Compromisso com o cliente, segurança em primeiro lugar, qualidade intransigente e respeito ao meio ambiente são os pilares que guiam nosso trabalho.',
      icon: ShieldCheck,
    },
  ];

  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <div className="bg-white section-padding">
      <div className="container mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-base font-semibold leading-7 text-primary">
            Sobre a NTC Brasil
          </h2>
          <p className="section-title">Transformando Projetos em Realidade</p>
          <p className="section-subtitle">
            Com anos de experiência no setor de construção, a NTC Brasil se
            orgulha de um portfólio diversificado que demonstra nossa capacidade
            técnica e compromisso com a satisfação do cliente. Cada projeto é
            uma parceria, construída sobre uma base de confiança e
            transparência.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              className="text-center p-8 bg-neutral rounded-xl shadow-lg hover:shadow-primary/20 transition-shadow duration-300"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              custom={index}
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-accent">
                <feature.icon className="h-8 w-8" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-7 text-secondary">
                {feature.name}
              </h3>
              <p className="mt-4 text-base leading-7 text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
