"use client";

import { motion, useScroll, useTransform } from 'motion/react';
import type { Variants } from 'motion/react';
import { Truck, ShieldCheck, Zap, ArrowRight, Quote, Globe, FastForward, CheckCircle2, Navigation, TrendingUp, Anchor, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

const Home = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const activities = [
    {
      title: "Transport",
      desc: "Flotte imposante pour tous volumes.",
      items: ["Camion plateau", "Porte-char", "12 & 30 roues"],
      icon: <Truck className="text-white" size={24} />,
      color: "bg-blue-600"
    },
    {
      title: "Manutention",
      desc: "Force de levage et précision.",
      items: ["Hysters", "Grues", "Camion bras"],
      icon: <Navigation className="text-white" size={24} />,
      color: "bg-slate-800"
    },
    {
      title: "Transit",
      desc: "Expertise douanière certifiée.",
      items: ["Dédouanement", "Import/Export", "Conseil"],
      icon: <Anchor className="text-white" size={24} />,
      color: "bg-blue-500"
    }
  ];

  const partnerLogos = [
    { name: "Partenaire 1", src: "/images/partners_logos/detoure/0859fa7c97_download__282_29.png" },
    { name: "Partenaire 2", src: "/images/partners_logos/detoure/0a1c76a7cf_download__283_29.png" },
    { name: "Partenaire 3", src: "/images/partners_logos/detoure/0a95ea8b67_download__281_29.png" },
    { name: "Partenaire 4", src: "/images/partners_logos/detoure/177200db45_download__282_29.png" },
    { name: "Partenaire 5", src: "/images/partners_logos/detoure/1e05b4cb20_download__284_29.png" },
    { name: "Partenaire 6", src: "/images/partners_logos/detoure/3e275ee9fa_download__281_29.png" },
    { name: "Partenaire 7", src: "/images/partners_logos/detoure/84a0806776_download__281_29.png" },
    { name: "Partenaire 8", src: "/images/partners_logos/detoure/c19d9662bc_gls-brasseries-cmr.png" },
    { name: "Partenaire 9", src: "/images/partners_logos/detoure/c3787b6119_download__285_29.png" },
    { name: "Partenaire 10", src: "/images/partners_logos/detoure/eb27f5a7da_logo_gls_inter.png" }
  ];

  return (
    <div className="overflow-hidden bg-white">
      {/* Hero Section with Parallax - Fixed Height and Content Layout */}
      <section ref={heroRef} className="relative flex min-h-[100dvh] items-center justify-center overflow-x-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-900/70 to-slate-900/10 z-10" />
          <img 
            src="/images/image-01.jpg" 
            alt="Logistics background" 
            className="w-full h-full object-cover scale-110"
          />
        </motion.div>

        <div className="relative z-20 mx-auto max-w-7xl px-4 pb-20 pt-28 text-center sm:px-6 md:pb-24 md:pt-32 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-6 md:space-y-12"
          >
            <motion.div variants={fadeInUp} className="flex justify-center">
              <span className="inline-block px-4 py-2 rounded-full bg-blue-600/20 backdrop-blur-md text-blue-300 font-bold text-[10px] sm:text-xs tracking-[0.2em] uppercase border border-blue-500/30 shadow-lg">
                Logistique & Innovation
              </span>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl xs:text-5xl sm:text-7xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] leading-[1] tracking-tighter"
            >
              L’excellence <br className="hidden xs:block" />
              <span className="text-brand-accent italic">Logistique</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-base sm:text-xl md:text-2xl text-slate-100 mb-10 max-w-2xl mx-auto font-medium drop-shadow-md leading-relaxed px-4"
            >
              Transport et Transit d'exception pour vos <br className="hidden md:block" /> ambitions en Afrique centrale.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-5 justify-center items-center px-6 sm:px-0"
            >
              <Link href="/contact" className="inline-flex w-full items-center justify-center sm:w-auto group relative bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-5 rounded-full font-black text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_20px_40px_rgba(37,99,235,0.4)]">
                <span className="relative z-10 flex items-center justify-center gap-3">Obtenir un devis <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" /></span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
              </Link>
              <Link href="/about" className="inline-flex items-center gap-2 rounded-full bg-white/10 p-4 text-lg font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:text-brand-accent">
                Découvrir l'agence <ChevronRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Manifeste Bar - Animated ticker style */}
      <section className="bg-brand-primary py-6 md:py-10 relative z-30 -mt-8 md:-mt-10 overflow-hidden shadow-2xl skew-y-1">
        <div className="flex whitespace-nowrap animate-infinite-scroll gap-12 md:gap-20 -skew-y-1">
          {[1,2,3].map(i => (
            <div key={i} className="flex gap-12 md:gap-20 text-white/90 font-display text-xl md:text-3xl font-black italic tracking-tighter uppercase">
              <span className="flex items-center gap-3 md:gap-4">Réfléchir ensemble <div className="w-2 h-2 md:w-3 md:h-3 bg-brand-accent rounded-full" /></span>
              <span className="flex items-center gap-3 md:gap-4">Se déplacer ensemble <div className="w-2 h-2 md:w-3 md:h-3 bg-brand-accent rounded-full" /></span>
              <span className="flex items-center gap-3 md:gap-4">Réussir ensemble <div className="w-2 h-2 md:w-3 md:h-3 bg-brand-accent rounded-full" /></span>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision - More visual layout */}
      <section className="py-20 md:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 md:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="lg:col-span-7 relative text-center md:text-left"
            >
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-50 rounded-full blur-3xl opacity-50" />
              <h2 className="text-[10px] md:text-sm font-black text-brand-accent tracking-[0.3em] uppercase mb-4 md:mb-6">Engagement global</h2>
              <h3 className="text-3xl md:text-6xl font-bold text-brand-primary leading-[1.1] mb-6 md:mb-8 tracking-tighter">
                Votre partenaire de <span className="text-blue-600">confiance</span> au cœur de l'Afrique.
              </h3>
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-2xl mx-auto md:mx-0">
                Notre mission est de devenir un partenaire logistique fiable pour chaque entreprise en proposant des solutions innovantes, sécurisées et optimisées.
              </p>
              
              <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                <div className="p-6 md:p-8 bg-slate-50 rounded-2xl md:rounded-3xl border border-slate-100 hover:border-brand-accent/30 transition-colors group text-left">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl md:rounded-2xl flex items-center justify-center text-brand-accent shadow-sm mb-4 md:mb-6 group-hover:bg-brand-accent group-hover:text-white transition-all">
                    <TrendingUp size={20} />
                  </div>
                  <h4 className="font-bold text-lg md:text-xl mb-2 text-slate-900">Impact Direct</h4>
                  <p className="text-sm md:text-base text-slate-600">Nous contribuons activement à la création de valeur dans votre chaîne d’approvisionnement.</p>
                </div>
                <div className="p-6 md:p-8 bg-slate-50 rounded-2xl md:rounded-3xl border border-slate-100 hover:border-brand-accent/30 transition-colors group text-left">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl md:rounded-2xl flex items-center justify-center text-brand-accent shadow-sm mb-4 md:mb-6 group-hover:bg-brand-accent group-hover:text-white transition-all">
                    <Zap size={20} />
                  </div>
                  <h4 className="font-bold text-lg md:text-xl mb-2 text-slate-900">Performance</h4>
                  <p className="text-sm md:text-base text-slate-600">Optimisation continue des coûts et des délais pour vos opérations.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="lg:col-span-5 relative mt-12 md:mt-0"
            >
              <div className="aspect-[4/5] bg-slate-200 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden rotate-3 relative z-10">
                <img 
                  src="/images/image-02.jpg" 
                  alt="Logistics team" 
                  className="w-full h-full object-cover -rotate-3 scale-125"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 w-48 md:w-64 h-48 md:h-64 bg-brand-accent/10 rounded-full blur-3xl -z-0" />
              <div className="absolute top-1/2 -left-6 md:-left-12 -translate-y-1/2 bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-2xl z-20 border border-slate-50 max-w-[180px] md:max-w-[240px]">
                 <span className="text-3xl md:text-4xl font-black text-brand-accent">100%</span>
                 <p className="text-sm md:text-base text-slate-800 font-bold mt-2">Engagement et Sécurité Garantie</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Activities - Dynamic Grid */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-sm font-black text-brand-accent tracking-[0.3em] uppercase mb-4">NOTRE EXPERTISE</h2>
              <h3 className="text-5xl font-bold text-brand-primary">Solutions 360°</h3>
            </div>
            <p className="text-lg text-slate-600 max-w-xs italic border-l-2 border-brand-accent pl-6">
              Nous analysons vos besoins pour proposer des solutions logistiques adaptées.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {activities.map((activity, index) => (
              <motion.div 
                key={activity.title}
                variants={fadeInUp}
                whileHover={{ y: -15, scale: 1.02 }}
                className="bg-white p-12 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 group border border-white"
              >
                <div className={`mb-10 w-16 h-16 ${activity.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-all duration-500`}>
                  {activity.icon}
                </div>
                <h3 className="text-3xl font-bold mb-4 text-brand-primary">{activity.title}</h3>
                <p className="text-slate-600 mb-8 font-medium">{activity.desc}</p>
                <ul className="space-y-4">
                  {activity.items.map(item => (
                    <li key={item} className="flex items-center gap-3 text-slate-700 font-semibold group-hover:translate-x-2 transition-transform">
                      <CheckCircle2 size={18} className="text-brand-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Intermodal Section - Immersive Scroll */}
      <section className="relative py-40 min-h-[600px] flex items-center overflow-hidden bg-brand-primary">
          <motion.div 
            initial={{ scale: 1.2, opacity: 0.3 }}
            whileInView={{ scale: 1, opacity: 0.1 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 z-0 flex items-center justify-center"
          >
            <Globe size={800} className="text-white" />
          </motion.div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-8">
                  Des services inter-modaux <span className="text-brand-accent">connectés</span>.
                </h2>
                <p className="text-xl text-slate-300 leading-relaxed mb-12">
                  Nos experts conçoivent des chaînes d’approvisionnement performantes intégrant transport routier et ferroviaire pour une optimisation maximale.
                </p>
                <div className="grid grid-cols-2 gap-y-6 gap-x-12 mb-12">
                  {["Transfrontalier", "Dédouanement", "Cross-docking", "Consolidation"].map(t => (
                    <div key={t} className="flex items-center gap-3 text-white font-bold">
                       <div className="w-2 h-2 bg-brand-accent rounded-full" />
                       {t}
                    </div>
                  ))}
                </div>
                <Link href="/transit" className="inline-flex items-center gap-4 text-brand-accent font-black text-xl hover:gap-6 transition-all uppercase tracking-widest">
                  Explorer nos solutions <ArrowRight size={24} />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-white/10 backdrop-blur-3xl p-10 rounded-[3rem] border border-white/10">
                   <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 bg-brand-accent rounded-full flex items-center justify-center">
                        <FastForward className="text-white" />
                      </div>
                      <h4 className="text-2xl font-bold text-white">Innovation Digitale</h4>
                   </div>
                   <p className="text-slate-300 leading-relaxed mb-8">
                     Suivi en temps réel de vos marchandises et reporting transparent pour une tranquillité d'esprit totale.
                   </p>
                   <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "85%" }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="h-full bg-brand-accent" 
                      />
                   </div>
                   <div className="flex justify-between mt-3 text-xs font-bold text-slate-300 tracking-widest">
                      <span>FLOW OPTIMIZATION</span>
                      <span>85% COMPLETED</span>
                   </div>
                </div>
              </motion.div>
            </div>
          </div>
      </section>

      {/* Partners Section - Strategic Network */}
      <section className="py-24 bg-white overflow-hidden border-y border-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-xl">
              <h2 className="text-[10px] font-black text-brand-accent tracking-[0.4em] uppercase mb-4">NOTRE RÉSEAU</h2>
              <h3 className="text-3xl md:text-5xl font-black text-brand-primary tracking-tighter leading-none">Partenaires Stratégiques</h3>
            </div>
            <p className="text-slate-700 font-medium max-w-sm italic border-l-2 border-brand-accent pl-6">
              Nous collaborons avec les leaders mondiaux pour garantir une fluidité totale sur tous les continents.
            </p>
          </div>
        </div>

        <div className="relative">
          {/* Fades for smooth entry/exit */}
          <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />
          
          <div className="flex animate-infinite-scroll gap-8 py-4">
            {partnerLogos.map((partner, i) => (
              <div 
                key={`${partner.name}-${i}`}
                className="flex h-24 w-60 flex-shrink-0 cursor-default items-center justify-center rounded-2xl border border-slate-100 bg-white px-5 transition-all group hover:shadow-xl hover:border-brand-accent/20"
              >
                <img
                  src={partner.src}
                  alt={`Logo ${partner.name}`}
                  className="h-14 w-full object-contain opacity-80 transition-all duration-500 group-hover:opacity-100"
                />
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {partnerLogos.map((partner, i) => (
              <div 
                key={`dup-${partner.name}-${i}`}
                className="flex h-24 w-60 flex-shrink-0 cursor-default items-center justify-center rounded-2xl border border-slate-100 bg-white px-5 transition-all group hover:shadow-xl hover:border-brand-accent/20"
              >
                <img
                  src={partner.src}
                  alt={`Logo ${partner.name}`}
                  className="h-14 w-full object-contain opacity-80 transition-all duration-500 group-hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Quote - Premium Reveal */}
      <section className="py-20 md:py-40 bg-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <Quote size={80} className="absolute -top-10 -left-4 md:-top-16 md:-left-10 text-brand-accent opacity-5 scale-75 md:scale-100" />
            <p className="text-2xl sm:text-4xl md:text-6xl font-display font-medium text-brand-primary leading-[1.2] italic mb-10 md:mb-16 tracking-tight px-4">
              "L’innovation et la sécurité nous permettront de créer de <span className="text-brand-accent bg-blue-50 px-2 md:px-3">meilleures connexions</span> avec nos clients."
            </p>
            <div className="flex items-center justify-center gap-4 md:gap-6">
              <div className="w-10 md:w-20 h-[1px] bg-slate-200" />
              <div>
                <h4 className="text-lg md:text-2xl font-black text-brand-primary uppercase tracking-tighter">Boris GUETA</h4>
                <p className="text-brand-accent font-black uppercase tracking-[0.2em] text-[10px] md:text-xs mt-2">Fondateur & CEO</p>
              </div>
              <div className="w-10 md:w-20 h-[1px] bg-slate-200" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white px-4">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto bg-slate-900 rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-accent/20 to-transparent opacity-50" />
          <h2 className="text-4xl md:text-6xl font-black mb-8 relative z-10">Prêt à optimiser votre logistique ?</h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto relative z-10 font-light leading-relaxed">
            Obtenez une analyse personnalisée et un devis gratuit pour vos opérations de transport et de transit.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
            <Link href="/contact" className="bg-brand-accent text-white px-12 py-6 rounded-full font-black text-xl hover:scale-105 transition-all shadow-2xl shadow-blue-500/40">
              Démarrez maintenant
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
