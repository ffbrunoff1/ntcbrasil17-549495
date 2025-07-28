import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="relative bg-neutral overflow-hidden pt-24 sm:pt-32 lg:pt-40">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-neutral to-neutral"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center lg:text-left">
            <motion.h1
              className="text-4xl font-bold tracking-tight text-secondary sm:text-5xl md:text-6xl"
              variants={itemVariants}
            >
              <span className="block">Construindo o futuro</span>
              <span className="block gradient-text mt-2">
                com excelência e confiança.
              </span>
            </motion.h1>
            <motion.p
              className="mt-6 text-lg leading-8 text-gray-600 max-w-lg mx-auto lg:mx-0"
              variants={itemVariants}
            >
              Na NTC Brasil, transformamos sua visão em realidade. Oferecemos
              soluções completas em construção, garantindo qualidade, inovação e
              compromisso em cada projeto.
            </motion.p>
            <motion.div
              className="mt-10 flex items-center justify-center lg:justify-start gap-x-6"
              variants={itemVariants}
            >
              <a
                href="#contact"
                className="btn btn-secondary shadow-lg shadow-slate-500/30"
              >
                Inicie seu Projeto
                <ArrowRight className="inline-block ml-2 h-5 w-5" />
              </a>
              <a
                href="#services"
                className="font-semibold leading-6 text-secondary hover:text-primary transition-colors"
              >
                Nossos Serviços <span aria-hidden="true">→</span>
              </a>
            </motion.div>
          </div>
          <motion.div
            className="relative"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="aspect-w-16 aspect-h-9 lg:aspect-none lg:h-full">
              <img
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/construction-hero-image.jpg"
                alt="Equipe de construção trabalhando em um projeto moderno"
                className="w-full h-auto object-cover rounded-2xl shadow-2xl shadow-primary/20"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-secondary/10 rounded-full blur-2xl"></div>
          </motion.div>
        </motion.div>
      </div>
      <div className="h-20 sm:h-32 lg:h-40"></div>
    </div>
  );
}
