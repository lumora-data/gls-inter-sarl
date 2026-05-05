"use client";

import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { FileText, ClipboardCheck, PackageCheck, Anchor, Plane, Ship, Car, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const Transit = () => {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stagger: Variants = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  const services = [
    { title: "Pré-dédouanement", icon: <FileText size={24} /> },
    { title: "Dédouanement complet", icon: <ClipboardCheck size={24} /> },
    { title: "Enlèvement marchandises", icon: <PackageCheck size={24} /> },
    { title: "Commerce international", icon: <Anchor size={24} /> },
    { title: "Dédouanement ports & aéroports", icon: <Ship size={24} /> },
    { title: "Groupage", icon: <Plane size={24} /> },
    { title: "Dédouanement véhicules", icon: <Car size={24} /> },
    { title: "Immatriculation et négoce", icon: <CheckCircle2 size={24} /> }
  ];

  return (
    <div className="pt-20 overflow-hidden">
      {/* Header - Optimized for mobile */}
      <section className="bg-slate-950 py-24 md:py-32 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center md:text-left">
          <div className="max-w-3xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.span variants={fadeInUp} className="text-brand-accent font-black tracking-widest uppercase mb-4 block text-xs sm:text-sm">Expertise Douanière</motion.span>
              <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-8 text-white">
                Maîtrisez la complexité du <span className="italic text-brand-accent uppercase">Transit</span>.
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-base sm:text-xl text-slate-300 font-medium leading-relaxed mb-10 px-4 md:px-0">
                De la documentation au dédouanement final, GLS-INTER SARL orchestre vos flux internationaux avec une rigueur mathématique.
              </motion.p>
              <motion.div variants={fadeInUp}>
                <Link href="/contact" className="inline-block bg-white text-slate-950 px-8 py-4 sm:px-10 sm:py-5 rounded-full font-black text-base sm:text-lg hover:bg-brand-accent hover:text-white transition-all shadow-2xl">
                  Parler à un expert
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 opacity-20 pointer-events-none translate-x-1/4 hidden lg:block">
          <Anchor size={600} />
        </div>
      </section>

      {/* Trust & Logic Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 md:space-y-10"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-brand-primary tracking-tighter">Fluidité. <span className="text-brand-accent">Zéro Retard.</span></h2>
              <p className="text-base md:text-xl text-slate-700 leading-relaxed">
                Le passage en douane est une étape critique. Nos experts maîtrisent les nuances réglementaires pour éviter les blocages coûteux.
              </p>
              <div className="space-y-4 md:space-y-6">
                {[
                  "Veille réglementaire SYDONIA++",
                  "Conseils en tarification douanière",
                  "Gestion des régimes particuliers",
                  "Représentation fiscale"
                ].map((item, idx) => (
                  <motion.div 
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-4 p-4 hover:bg-slate-50 transition-colors rounded-2xl border border-transparent hover:border-slate-100"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-brand-accent/10 rounded-full flex items-center justify-center text-brand-accent flex-shrink-0">
                      <ShieldCheck size={18} />
                    </div>
                    <span className="font-bold text-slate-800 tracking-tight text-sm sm:text-base">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <div className="relative mt-8 lg:mt-0">
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                className="grid grid-cols-2 gap-4 md:gap-6"
              >
                <div className="space-y-4 md:space-y-6 translate-y-6 md:translate-y-12">
                   <img src="/images/image-05.jpg" alt="Dock" className="rounded-2xl md:rounded-3xl shadow-xl shadow-slate-200" />
                   <div className="bg-brand-accent p-6 md:p-8 rounded-2xl md:rounded-3xl text-white">
                      <p className="text-xl md:text-3xl font-black italic">FAST-TRACK</p>
                      <p className="text-[10px] md:text-xs font-bold tracking-widest mt-2 uppercase">Prioritaire</p>
                   </div>
                </div>
                <div className="space-y-4 md:space-y-6">
                   <div className="bg-slate-900 p-6 md:p-8 rounded-2xl md:rounded-3xl text-white">
                      <Ship className="mb-4 md:mb-6 opacity-40" size={32} />
                      <p className="text-lg md:text-xl font-bold">Solutions Maritimes</p>
                   </div>
                   <img src="/images/image-06.jpg" alt="Team" className="rounded-2xl md:rounded-3xl shadow-xl shadow-slate-200" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Wall - Masonry style feel */}
      <section className="py-20 md:py-32 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-sm font-black text-brand-accent tracking-[0.3em] uppercase mb-4">CATALOGUE</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-brand-primary tracking-tighter">Notre Scope de Transit</h3>
          </div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          >
            {services.map((s, index) => (
              <motion.div 
                key={s.title} 
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all border border-slate-100 group flex flex-col items-center text-center"
              >
                <div className="mb-6 w-14 h-14 md:w-16 md:h-16 bg-slate-50 text-brand-accent rounded-2xl flex items-center justify-center group-hover:bg-brand-accent group-hover:text-white transition-all duration-300">
                  {s.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-800 leading-tight tracking-tight">{s.title}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Interactive CTA */}
      <section className="py-24 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-brand-accent rounded-[3rem] md:rounded-[4rem] p-10 md:p-24 relative overflow-hidden group shadow-2xl shadow-blue-500/40"
          >
            <div className="absolute inset-0 bg-slate-900 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.22, 1, 0.36, 1)]" />
            <div className="relative z-10 text-center text-white">
              <h2 className="text-3xl md:text-6xl font-black mb-8 leading-tight">Optez pour la sérénité.</h2>
              <p className="text-base md:text-xl opacity-80 mb-10 max-w-2xl mx-auto font-light px-4">
                Chaque dossier est unique. Discutons de votre prochain arrivage.
              </p>
              <Link href="/contact" className="group relative inline-flex items-center gap-4 bg-white text-brand-accent px-8 py-5 md:px-12 md:py-6 rounded-full font-black text-lg md:text-xl hover:scale-110 active:scale-95 transition-all shadow-xl overflow-hidden">
                <span className="relative z-10 flex items-center gap-4 group-hover:text-slate-900 transition-colors">Contactez nos experts <ArrowRight size={24} /></span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-accent/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Transit;
