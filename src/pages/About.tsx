"use client";

import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { Target, TrendingUp, Users, ShieldCheck, Heart, Award, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const About = () => {
  const stagger: Variants = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const levers = [
    { title: "Croissance", desc: "Optimisation continue des performances logistiques.", icon: <TrendingUp /> },
    { title: "Service", desc: "Solutions adaptées à forte valeur ajoutée.", icon: <Award /> },
    { title: "Expérience client", desc: "Relation optimisée et feedback constant.", icon: <Heart /> },
    { title: "RSE & QHSE", desc: "Respect des normes de sécurité et environnementales.", icon: <ShieldCheck /> }
  ];

  return (
    <div className="pt-20 overflow-hidden">
      {/* Hero - Cinematic */}
      <section className="bg-white py-20 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="text-center md:text-left">
              <motion.h1 variants={fadeInUp} className="text-4xl sm:text-6xl md:text-8xl font-black text-brand-primary mb-8 md:mb-10 leading-[0.9] tracking-tighter">
                Bâtir l'avenir de la <span className="text-brand-accent">Logistique</span>.
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-lg sm:text-2xl text-slate-700 leading-relaxed font-light mb-10 md:mb-12 px-4 md:px-0">
                GLS-INTER SARL est née d'une vision : simplifier les échanges commerciaux en Afrique centrale grâce à une excellence opérationnelle sans compromis.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4 md:gap-8 py-8 border-y border-slate-100 max-w-sm mx-auto md:mx-0">
                <div>
                   <p className="text-3xl md:text-4xl font-black text-brand-primary">10+</p>
                   <p className="text-[10px] md:text-sm font-bold text-slate-600 uppercase tracking-widest mt-1">Pays Desservis</p>
                </div>
                <div>
                   <p className="text-3xl md:text-4xl font-black text-brand-primary">500+</p>
                   <p className="text-[10px] md:text-sm font-bold text-slate-600 uppercase tracking-widest mt-1">Convois / Mois</p>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="mt-12 lg:mt-0 px-4 md:px-0">
               <div className="relative">
                  <div className="aspect-[4/5] bg-slate-900 rounded-[3rem] md:rounded-[4rem] overflow-hidden rotate-2">
                     <img 
                       src="/images/about.jpg" 
                       alt="GLS-INTER SARL Vision" 
                       className="w-full h-full object-cover -rotate-2 scale-110 opacity-80"
                     />
                  </div>
                  <div className="absolute -bottom-6 -left-4 md:-bottom-8 md:-left-8 bg-brand-accent p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] shadow-2xl text-white max-w-[200px] md:max-w-[280px]">
                     <Target className="mb-4 md:scale-100 scale-75" size={40} />
                     <p className="text-base md:text-lg font-bold leading-tight">Optimiser chaque maillon de votre chaîne.</p>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Levers - Elegant Grid */}
      <section className="py-24 md:py-40 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-[10px] md:text-sm font-black text-brand-accent tracking-[0.4em] uppercase mb-4 text-center">NOTRE ADN</h2>
            <h3 className="text-3xl md:text-5xl font-black text-brand-primary tracking-tighter">Leviers stratégiques</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
            {levers.map((lever) => (
              <motion.div 
                key={lever.title} 
                whileHover={{ y: -15 }}
                className="p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] bg-white shadow-sm hover:shadow-2xl transition-all duration-500 border border-white flex flex-col group text-center sm:text-left items-center sm:items-start"
              >
                <div className="mb-8 w-14 h-14 md:w-16 md:h-16 bg-slate-50 text-brand-accent rounded-2xl flex items-center justify-center group-hover:bg-brand-accent group-hover:text-white transition-all duration-500 shadow-inner">
                  {lever.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-black mb-4 text-brand-primary tracking-tight">{lever.title}</h3>
                <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed">{lever.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Network - Partners */}
      <section className="py-24 bg-white border-b border-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="md:w-1/3">
                 <h2 className="text-[10px] font-black text-brand-accent tracking-[0.4em] uppercase mb-4">ÉCOSYSTÈME</h2>
                 <h3 className="text-3xl md:text-4xl font-black text-brand-primary tracking-tighter mb-6">Un réseau de confiance mondial</h3>
                 <p className="text-slate-700 font-medium leading-relaxed italic border-l-2 border-brand-accent pl-6">
                    Connectés aux plus grands acteurs du commerce international pour vous offrir une portée sans limites.
                 </p>
              </div>
              <div className="md:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-4">
                 {[
                   "MAERSK", "BOLLORÉ", "CMA CGM", "DHL", "EMIRATES", "SYDONIA++"
                 ].map((partner) => (
                   <div key={partner} className="h-20 flex items-center justify-center bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-lg transition-all group cursor-default">
                      <span className="text-sm font-black text-slate-400 group-hover:text-brand-accent transition-colors tracking-widest">{partner}</span>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* Leader Section - Personality & Impact */}
      <section className="py-24 md:py-40 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
            <div className="order-2 lg:order-1 px-4 md:px-0">
               <div className="relative max-w-sm mx-auto md:max-w-md aspect-[4/5] bg-slate-200 rounded-[3rem] md:rounded-[5rem] overflow-hidden group">
                  <img 
                    src="/images/Boris-Gueta-CEO.jpg" 
                    alt="Boris GUETA" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-10 left-8 right-8 md:bottom-12 md:left-12 md:right-12 translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                     <p className="text-xl md:text-2xl font-black text-white italic tracking-tighter">Boris GUETA</p>
                     <p className="text-brand-accent font-black tracking-widest text-[10px] uppercase mt-2">Fondateur & Visionnaire</p>
                  </div>
               </div>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-8 md:space-y-10 relative z-10 text-center md:text-left"
            >
              <h2 className="text-4xl md:text-7xl font-black text-brand-primary leading-[0.9] tracking-tighter">
                Une vision <br />
                <span className="text-brand-accent italic">Sans Limites</span>.
              </h2>
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed italic border-l-0 md:border-l-4 border-brand-accent pl-0 md:pl-8 px-4 md:px-0">
                "Développer une logistique moderne et durable en Afrique pour soutenir l'émergence économique de notre continent : c'est notre combat quotidien."
              </p>
              <p className="text-base md:text-lg text-slate-600 font-light leading-relaxed px-4 md:px-0">
                Entrepreneur chevronné, Boris GUETA insuffle à GLS-INTER SARL une culture de l’innovation et de l’excellence qui redéfinit les standards régionaux.
              </p>
              <div className="pt-6 px-4 md:px-0">
                <Link href="/contact" className="group inline-flex items-center gap-4 text-xl md:text-2xl font-black text-brand-primary hover:text-brand-accent transition-colors">
                  Rencontrer notre leader <ArrowRight className="group-hover:translate-x-4 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
