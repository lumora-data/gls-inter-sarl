"use client";

import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { Truck, MapPin, CheckCircle2, ChevronRight, HardHat, Gauge, Fuel, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Transport = () => {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stagger: Variants = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  const services = [
    { title: "Transport longue distance", icon: <Gauge size={24} /> },
    { title: "Livraison rapide et sécurisée", icon: <CheckCircle2 size={24} /> },
    { title: "Transport d’engins (porte-char)", icon: <Truck size={24} /> },
    { title: "Manutention (chargement/déchargement)", icon: <HardHat size={24} /> },
    { title: "Dépotage (hors hydrocarbures)", icon: <ChevronRight size={24} /> },
    { title: "Carburation incluse", icon: <Fuel size={24} /> }
  ];

  return (
    <div className="pt-20 overflow-hidden bg-white">
      {/* Header - High Impact */}
      <section className="bg-brand-primary py-24 md:py-40 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center md:text-left">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold text-xs tracking-widest uppercase mb-8">
              <Truck size={14} /> Logistique Continentale
            </motion.div>
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl sm:text-6xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter"
            >
              Transport <br />
              <span className="text-brand-accent italic">Sans Limites</span>.
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-lg sm:text-2xl text-slate-200 font-medium max-w-2xl mx-auto md:mx-0 leading-relaxed drop-shadow-sm"
            >
              Plus qu'un trajet, une promesse de fiabilité. Nous maîtrisons les routes les plus complexes d'Afrique centrale.
            </motion.p>
            <motion.div variants={fadeInUp} className="mt-12 flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
              <Link
                href="/contact"
                className="group relative bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-5 rounded-full font-black text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_20px_40px_rgba(37,99,235,0.4)]"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">DEVIS GRATUIT <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" /></span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none hidden lg:block">
           <Truck size={800} />
        </div>
      </section>

      {/* Grid Stats */}
      <section className="py-12 bg-white border-b border-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { label: "Véhicules", val: "45+", icon: <Truck size={20} /> },
              { label: "Destinations", val: "10+", icon: <MapPin size={20} /> },
              { label: "Sécurité", val: "100%", icon: <HardHat size={20} /> },
              { label: "Disponibilité", val: "24/7", icon: <Gauge size={20} /> }
            ].map((stat) => (
              <div key={stat.label} className="p-6 md:p-10 bg-slate-50 rounded-[2.5rem] text-center border border-white hover:border-brand-accent/20 hover:bg-white hover:shadow-2xl transition-all duration-500 group">
                <p className="text-3xl md:text-5xl font-black text-brand-primary group-hover:text-brand-accent transition-colors">{stat.val}</p>
                <p className="text-[10px] md:text-xs font-bold text-slate-600 uppercase tracking-widest mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flotte & Expertise */}
      <section className="py-24 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-32 items-center">
            <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="space-y-10"
            >
              <h2 className="text-4xl md:text-6xl font-black text-brand-primary tracking-tighter leading-tight">Puissance. <br /> Précision. <span className="text-brand-accent">Liberté.</span></h2>
              <div className="space-y-6">
                 {[
                   { t: "Flotte Polyvalente", d: "Du fourgon au porte-char extra-large, notre équipe opère une logistique sans contrainte de volume." },
                   { t: "Surveillance Active", d: "Tours de contrôle 24/7 et géolocalisation satellitaire pour chaque convoi." },
                   { t: "Réseau CEMAC", d: "Une maîtrise parfaite des corridors Cameroun, Tchad, Centrafrique et Gabon." }
                 ].map((item, idx) => (
                   <div key={idx} className="flex gap-6 p-6 sm:p-8 bg-slate-50 rounded-[2rem] hover:bg-white hover:shadow-xl border border-transparent hover:border-slate-100 transition-all">
                      <div className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-accent shadow-sm">
                        <CheckCircle2 size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{item.t}</h3>
                        <p className="text-slate-600 mt-2 leading-relaxed">{item.d}</p>
                      </div>
                   </div>
                 ))}
              </div>
            </motion.div>
            
            <div className="relative mt-12 lg:mt-0">
               <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 className="rounded-[3rem] md:rounded-[5rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)] skew-x-1"
               >
                 <img 
                   src="/images/image-01.jpg" 
                   alt="Trucking Excellence" 
                   className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                 />
               </motion.div>
               <div className="absolute -bottom-8 -right-4 sm:-bottom-12 sm:-right-8 bg-brand-primary p-10 md:p-12 rounded-[3rem] md:rounded-[4rem] shadow-2xl text-white max-w-[200px] sm:max-w-xs">
                  <p className="text-4xl md:text-5xl font-black italic">FAST</p>
                  <p className="text-xs font-bold tracking-widest mt-2 uppercase opacity-60">Livraison Garantie</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Wall - Dark & Impactful */}
      <section className="py-24 md:py-40 bg-slate-950 text-white rounded-[4rem] md:rounded-[8rem] mx-2 sm:mx-8 mb-8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-sm font-black text-brand-accent tracking-[0.4em] uppercase mb-4">NOS SOLUTIONS</h2>
            <h3 className="text-4xl md:text-7xl font-black tracking-tighter">Services à forte valeur</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
            {services.map((s, idx) => (
              <motion.div 
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 md:p-12 rounded-[3rem] md:rounded-[4rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all flex flex-col items-center text-center sm:items-start sm:text-left"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 bg-brand-accent rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:rotate-12 group-hover:scale-110">
                  {s.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-black leading-tight mb-2 uppercase text-white">{s.title}</h3>
                <div className="w-12 h-1 bg-brand-accent mb-6 group-hover:w-24 transition-all" />
                <p className="text-slate-300 leading-relaxed font-medium text-sm md:text-base">Précision opérationnelle et sécurité maximale pour vos marchandises.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-slate-50 p-12 md:p-32 rounded-[4rem] md:rounded-[6rem] flex flex-col items-center text-center gap-12 relative overflow-hidden">
              <div className="relative z-10 space-y-8">
                 <h2 className="text-4xl md:text-7xl font-black text-brand-primary tracking-tighter leading-[0.9]">Prêt pour <br /> le <span className="text-brand-accent uppercase">Départ ?</span></h2>
                 <p className="text-xl text-slate-700 max-w-xl mx-auto font-medium">Laissez l'expertise de GLS-INTER SARL piloter votre logistique régionale.</p>
                 <div className="pt-8">
                  <Link
                    href="/contact"
                    className="group relative bg-slate-950 text-white px-8 py-4 md:px-12 md:py-6 rounded-full font-black text-lg md:text-xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl border-2 border-white/10"
                  >
                    <span className="relative z-30 flex items-center gap-4 text-white">LANCER UNE OPÉRATION <ArrowRight size={24} /></span>
                    <div className="absolute inset-0 bg-blue-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 z-10" />
                    <div className="absolute inset-0 bg-slate-950 z-0" />
                  </Link>
                 </div>
              </div>
              <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                 <Truck size={1000} className="-translate-x-1/2 -translate-y-1/4 rotate-12" />
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Transport;
