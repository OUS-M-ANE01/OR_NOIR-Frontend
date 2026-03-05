import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <main>
      {/* Hero */}
      <div className="relative h-[220px] sm:h-[280px] flex items-end pb-10 sm:pb-16 px-5 sm:px-10 lg:px-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-[0.3]"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=1600&q=80)' }}
        />
        <div className="relative z-10">
          <div className="text-[10px] tracking-[4px] uppercase text-gold mb-3">Or Noir African Jewelry</div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight">Contactez-nous</h1>
          <div className="w-12 h-[1px] bg-gold mt-4" />
        </div>
      </div>

      <section className="py-12 sm:py-20 px-5 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 max-w-5xl mx-auto">
          {/* Infos */}
          <div>
            <div className="text-[10px] tracking-[4px] uppercase text-gold mb-4">Nos Coordonnées</div>
            <h2 className="font-serif text-3xl font-light mb-8 leading-snug">
              Nous sommes là<br />pour vous aider
            </h2>
            <div className="space-y-6">
              {[
                { icon: <MapPin className="w-4 h-4" strokeWidth={1.5} />, label: 'Adresse', value: 'Dakar, Sénégal' },
                { icon: <Phone className="w-4 h-4" strokeWidth={1.5} />, label: 'Téléphone', value: '+221 77 000 00 00' },
                { icon: <Mail className="w-4 h-4" strokeWidth={1.5} />, label: 'Email', value: 'contact@ornoirafricanjewelry.com' },
                { icon: <Clock className="w-4 h-4" strokeWidth={1.5} />, label: 'Horaires', value: 'Lun–Sam : 9h–18h' },
              ].map(({ icon, label, value }) => (
                <div key={label} className="flex gap-4 items-start">
                  <div className="w-10 h-10 border border-gold/30 flex items-center justify-center text-gold flex-shrink-0">
                    {icon}
                  </div>
                  <div>
                    <div className="text-[10px] tracking-[2px] uppercase text-grey mb-1">{label}</div>
                    <div className="text-sm text-white">{value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-dark-2 border border-gold/15">
              <div className="text-[10px] tracking-[3px] uppercase text-gold mb-3">Délai de réponse</div>
              <p className="text-grey text-xs leading-[1.8]">
                Nous répondons à toutes les demandes sous <span className="text-white">24 à 48h</span> ouvrées.
                Pour les commandes urgentes, appelez-nous directement.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-dark-2 p-6 sm:p-10 border border-gold/15">
            <div className="text-[10px] tracking-[4px] uppercase text-gold mb-2">Message</div>
            <h3 className="font-serif text-2xl font-light mb-8">Envoyez-nous un message</h3>

            {sent ? (
              <div className="text-center py-12">
                <div className="font-serif text-5xl text-gold mb-4">✓</div>
                <p className="font-serif text-xl font-light mb-2">Message envoyé !</p>
                <p className="text-grey text-xs tracking-[0.5px]">Nous vous répondrons dans les plus brefs délais.</p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-8 py-2.5 px-8 border border-gold text-gold text-[10px] tracking-[2px] uppercase cursor-pointer hover:bg-gold hover:text-black transition-colors bg-transparent"
                >
                  Nouveau message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] tracking-[2px] uppercase text-grey mb-2">Nom</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-white/5 border border-gold/20 text-white text-xs py-3 px-4 outline-none focus:border-gold transition-colors placeholder:text-grey/50 font-sans"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[2px] uppercase text-grey mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-white/5 border border-gold/20 text-white text-xs py-3 px-4 outline-none focus:border-gold transition-colors placeholder:text-grey/50 font-sans"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] tracking-[2px] uppercase text-grey mb-2">Sujet</label>
                  <input
                    type="text"
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full bg-white/5 border border-gold/20 text-white text-xs py-3 px-4 outline-none focus:border-gold transition-colors placeholder:text-grey/50 font-sans"
                    placeholder="Sujet de votre message"
                  />
                </div>
                <div>
                  <label className="block text-[10px] tracking-[2px] uppercase text-grey mb-2">Message</label>
                  <textarea
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-white/5 border border-gold/20 text-white text-xs py-3 px-4 outline-none focus:border-gold transition-colors placeholder:text-grey/50 font-sans resize-none"
                    placeholder="Votre message..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-gold border-none text-black text-[11px] tracking-[3px] uppercase font-bold cursor-pointer hover:bg-gold-light transition-colors"
                >
                  Envoyer le message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};
