"use client";

import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Mail, Phone, Clock, Send, CheckCircle2 } from 'lucide-react';
import { useState, FormEvent } from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-20 overflow-hidden bg-white">
      {/* Dynamic Header */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-brand-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white tracking-tighter mb-6 md:mb-8 leading-[0.9]">
              Parlons <br />
              <span className="text-brand-accent">Stratégie</span>.
            </h1>
            <p className="text-base md:text-2xl text-slate-300 font-light max-w-2xl mx-auto px-4">
              Une question ? Un projet logistique complexe ? Notre équipe réactive est prête à relever vos défis.
            </p>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
      </section>

      <section className="py-16 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 md:gap-20 items-start">
            
            {/* Info Cards Column */}
            <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="lg:col-span-5 space-y-6 md:space-y-8"
            >
              <h2 className="text-3xl md:text-4xl font-black text-brand-primary tracking-tighter mb-8 md:mb-12">Nos Bureaux</h2>
              
              <div className="grid grid-cols-1 gap-4 md:gap-6">
                {[
                  { title: "Adresse", detail: "Douala - Gare de Ndokoti", detail2: "Entrée poissonnerie Aquamar", icon: <MapPin /> },
                  { title: "Email", detail: "commercial@glsinter.com", icon: <Mail /> },
                  { title: "Appelez-nous", detail: "(237) 653-67-06-63", detail2: "WhatsApp Direct disponible", icon: <Phone /> },
                  { title: "Horaires", detail: "Lun - Ven: 08:00 - 18:00", icon: <Clock /> }
                ].map((info, idx) => (
                  <motion.div 
                    key={info.title}
                    whileHover={{ scale: 1.02 }}
                    className="p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] bg-slate-50 border border-slate-100 flex gap-4 md:gap-6 items-center group transition-all"
                  >
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-2xl flex items-center justify-center text-brand-accent shadow-sm group-hover:bg-brand-accent group-hover:text-white transition-all duration-300 flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-600 uppercase tracking-widest text-[10px] md:text-xs mb-1">{info.title}</h3>
                      <p className="text-base md:text-xl font-black text-slate-800 leading-tight">{info.detail}</p>
                      {info.detail2 && <p className="text-xs text-slate-700 mt-1 font-medium italic">{info.detail2}</p>}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Immersive Map Visual */}
              <div className="mt-8 md:mt-12 group relative rounded-[2.5rem] md:rounded-[3rem] h-[250px] md:h-[300px] overflow-hidden shadow-2xl border-4 border-white">
                  <div className="absolute inset-0 bg-brand-primary/20 z-10 group-hover:bg-transparent transition-colors duration-700" />
                  <img 
                    src="/images/image-04.jpg" 
                    alt="Map visual" 
                    className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end z-20">
                     <div className="p-4 md:p-6 bg-white/90 backdrop-blur-md rounded-2xl md:rounded-3xl shadow-xl border border-white">
                        <div className="flex items-center gap-3 mb-1">
                           <div className="w-2.5 h-2.5 bg-red-600 rounded-full animate-ping" />
                           <span className="font-black text-slate-900 italic text-sm md:text-base">GLS-INTER SARL HQ</span>
                        </div>
                        <p className="text-[10px] md:text-xs font-bold text-slate-700 uppercase tracking-widest">Douala Region, Cameroon</p>
                     </div>
                  </div>
              </div>
            </motion.div>

            {/* Premium Form Column */}
            <div className="lg:col-span-7 mt-12 lg:mt-0">
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-6 md:p-20 rounded-[3rem] md:rounded-[4rem] shadow-2xl border border-slate-50 relative"
              >
                <h2 className="text-3xl md:text-4xl font-black text-brand-primary tracking-tighter mb-8 md:mb-12">Lancer une demande</h2>
                
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="bg-brand-accent rounded-[2.5rem] md:rounded-[3rem] p-10 md:p-16 text-center text-white"
                    >
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8">
                        <CheckCircle2 size={32} className="text-white" />
                      </div>
                      <h3 className="text-2xl md:text-4xl font-black mb-4 uppercase">Succès !</h3>
                      <p className="text-base md:text-xl font-light opacity-90 leading-relaxed">
                        Merci pour votre confiance. Notre département commercial analyse votre requête et reviendra vers vous sous 24h.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form 
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      onSubmit={handleSubmit} 
                      className="space-y-6 md:space-y-8"
                    >
                      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-600 uppercase tracking-widest pl-2">Nom complet</label>
                          <input required type="text" className="w-full px-6 md:px-8 py-4 md:py-5 bg-slate-50 border border-slate-100 rounded-xl md:rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:bg-white transition-all font-bold text-slate-800 text-sm md:text-base shadow-sm" placeholder="Jean Dupont" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-600 uppercase tracking-widest pl-2">Entreprise</label>
                          <input type="text" className="w-full px-6 md:px-8 py-4 md:py-5 bg-slate-50 border border-slate-100 rounded-xl md:rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:bg-white transition-all font-bold text-slate-800 text-sm md:text-base shadow-sm" placeholder="Nom de votre société" />
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-600 uppercase tracking-widest pl-2">Email Pro</label>
                          <input required type="email" className="w-full px-6 md:px-8 py-4 md:py-5 bg-slate-50 border border-slate-100 rounded-xl md:rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:bg-white transition-all font-bold text-slate-800 text-sm md:text-base shadow-sm" placeholder="contact@glsinter.com" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-600 uppercase tracking-widest pl-2">WhatsApp</label>
                          <input required type="tel" className="w-full px-6 md:px-8 py-4 md:py-5 bg-slate-50 border border-slate-100 rounded-xl md:rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:bg-white transition-all font-bold text-slate-800 text-sm md:text-base shadow-sm" placeholder="+237 ..." />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-600 uppercase tracking-widest pl-2">Votre besoin</label>
                        <textarea required rows={4} className="w-full px-6 md:px-8 py-4 md:py-5 bg-slate-50 border border-slate-100 rounded-xl md:rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:bg-white transition-all font-bold text-slate-800 text-sm md:text-base shadow-sm resize-none" placeholder="Volume, trajet..."></textarea>
                      </div>

                      <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit" 
                        className="group relative w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-5 md:py-6 rounded-2xl md:rounded-[2rem] font-black text-base md:text-xl overflow-hidden transition-all shadow-[0_20px_40px_rgba(37,99,235,0.3)] hover:shadow-[0_25px_50px_rgba(37,99,235,0.5)] flex items-center justify-center gap-4 uppercase tracking-tighter"
                      >
                        <span className="relative z-10 flex items-center gap-3">
                           <Send size={20} /> ENVOYER MAINTENANT
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
