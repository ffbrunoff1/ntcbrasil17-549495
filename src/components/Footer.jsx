import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const logoUrl =
    'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1753722349605_0.png';

  const navLinks = [
    { name: 'Sobre Nós', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Contato', href: '#contact' },
  ];

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <motion.footer
      className="bg-secondary text-accent"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <a href="#home">
              <img
                className="h-16 w-auto"
                src={logoUrl}
                alt="NTC Brasil Logo"
              />
            </a>
            <p className="mt-4 text-base text-gray-400 max-w-xs">
              Construindo o futuro com excelência e confiança desde o primeiro
              tijolo.
            </p>
          </div>

          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-accent">
                Navegação
              </h3>
              <ul className="mt-6 space-y-4">
                {navLinks.map(item => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm leading-6 text-gray-300 hover:text-primary transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-accent">
                Legal
              </h3>
              <ul className="mt-6 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-sm leading-6 text-gray-300 hover:text-primary transition-colors"
                  >
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm leading-6 text-gray-300 hover:text-primary transition-colors"
                  >
                    Termos de Serviço
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-accent">
                Contato
              </h3>
              <ul className="mt-6 space-y-4">
                <li className="text-sm leading-6 text-gray-300">
                  +55 44 99104-0774
                </li>
                <li className="text-sm leading-6 text-gray-300">
                  ffbrunoff@yahoo.com.br
                </li>
                <li className="text-sm leading-6 text-gray-300">
                  Padre Lebret 801, G05
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center">
          <p className="text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} NTC Brasil. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
