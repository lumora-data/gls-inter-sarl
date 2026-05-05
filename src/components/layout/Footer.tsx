import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 pb-8 pt-16 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 gap-12 text-center md:grid-cols-2 md:text-left lg:grid-cols-4">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="mb-6 inline-flex items-center">
              <Image
                src="/images/logo.png"
                alt="Logo GLS-INTER SARL"
                width={1069}
                height={226}
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="mb-6 max-w-sm leading-relaxed text-slate-400 md:max-w-none">
              L&apos;excellence de l&apos;optimisation et de la sécurité logistique au Cameroun et en Afrique centrale. Nous connectons vos affaires au succès.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="rounded-full bg-slate-800 p-3 transition-colors hover:bg-brand-accent" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="rounded-full bg-slate-800 p-3 transition-colors hover:bg-brand-accent" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="rounded-full bg-slate-800 p-3 transition-colors hover:bg-brand-accent" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-xs font-semibold uppercase tracking-widest text-brand-accent">Services</h4>
            <ul className="space-y-4">
              <li><Link href="/transport" className="text-slate-400 transition-colors hover:text-white">Transport routier</Link></li>
              <li><Link href="/transit" className="text-slate-400 transition-colors hover:text-white">Dédouanement</Link></li>
              <li><Link href="/transport" className="text-slate-400 transition-colors hover:text-white">Manutention & Logistique</Link></li>
              <li><Link href="/transit" className="text-slate-400 transition-colors hover:text-white">Conseil Import/Export</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-xs font-semibold uppercase tracking-widest text-brand-accent">Liens rapides</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-slate-400 transition-colors hover:text-white">À propos</Link></li>
              <li><Link href="/contact" className="text-slate-400 transition-colors hover:text-white">Contact</Link></li>
              <li><Link href="/contact" className="text-slate-400 transition-colors hover:text-white">Demander un devis</Link></li>
              <li><a href="#" className="text-slate-400 transition-colors hover:text-white">Mentions légales</a></li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="mb-6 text-xs font-semibold uppercase tracking-widest text-brand-accent">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 md:items-center">
                <MapPin className="shrink-0 text-brand-accent" size={18} />
                <span className="max-w-[220px] text-sm text-slate-400 md:max-w-none">Gare de Ndokoti - Entrée poissonnerie Aquamar, Douala</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="shrink-0 text-brand-accent" size={18} />
                <span className="text-sm text-slate-400">(237) 653-67-06-63</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="shrink-0 text-brand-accent" size={18} />
                <span className="break-all text-sm text-slate-400">commercial@glsinter.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} GLS-INTER SARL. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
