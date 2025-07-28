import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Loader,
  CheckCircle,
  AlertTriangle,
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(null);

    try {
      const response = await fetch('/.netlify/functions/send-contact-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || 'Ocorreu uma falha ao enviar a mensagem.'
        );
      }

      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      setSubmitError(error.message);
      setTimeout(() => setSubmitError(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Phone, text: '+55 44 99104-0774', href: 'tel:+5544991040774' },
    {
      icon: Mail,
      text: 'ffbrunoff@yahoo.com.br',
      href: 'mailto:ffbrunoff@yahoo.com.br',
    },
    { icon: MapPin, text: 'Padre Lebret 801, G05 Bloco 03', href: '#' },
  ];

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
            Fale Conosco
          </h2>
          <p className="section-title">Vamos Construir Algo Incrível Juntos</p>
          <p className="section-subtitle">
            Tem uma ideia ou um projeto em mente? Preencha o formulário abaixo
            ou entre em contato por um de nossos canais. Nossa equipe está
            pronta para atendê-lo.
          </p>
        </motion.div>

        <div className="mt-20 grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-secondary"
                >
                  Nome Completo
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-md border-0 py-2.5 px-3.5 text-secondary shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 transition"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-secondary"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-md border-0 py-2.5 px-3.5 text-secondary shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 transition"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium leading-6 text-secondary"
                >
                  Sua Mensagem
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-md border-0 py-2.5 px-3.5 text-secondary shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 transition"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-secondary w-full flex items-center justify-center disabled:bg-slate-500"
                >
                  {isSubmitting ? (
                    <>
                      <Loader className="animate-spin mr-2" /> Enviando...
                    </>
                  ) : (
                    <>
                      Enviar Mensagem <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>
              </div>
              {submitSuccess && (
                <div className="flex items-center p-4 text-sm text-green-800 rounded-lg bg-green-100">
                  <CheckCircle className="mr-2" /> Mensagem enviada com sucesso!
                  Entraremos em contato em breve.
                </div>
              )}
              {submitError && (
                <div className="flex items-center p-4 text-sm text-red-800 rounded-lg bg-red-100">
                  <AlertTriangle className="mr-2" /> Erro: {submitError}
                </div>
              )}
            </form>
          </motion.div>

          <motion.div
            className="bg-neutral p-8 lg:p-12 rounded-2xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h3 className="text-2xl font-bold text-secondary">
              Informações de Contato
            </h3>
            <p className="mt-3 text-gray-600">
              Estamos sempre disponíveis para conversar sobre seu próximo grande
              projeto.
            </p>
            <ul className="mt-8 space-y-6">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-primary/20 text-primary p-3 rounded-full">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <a
                      href={item.href}
                      className="text-lg text-secondary hover:text-primary transition-colors duration-300"
                    >
                      {item.text}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
