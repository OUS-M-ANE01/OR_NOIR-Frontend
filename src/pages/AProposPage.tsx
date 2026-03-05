export const AProposPage = () => {
  return (
    <main>
      {/* Hero */}
      <div className="relative h-[260px] sm:h-[340px] flex items-end pb-10 sm:pb-16 px-5 sm:px-10 lg:px-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-[0.3]"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1600&q=80)' }}
        />
        <div className="relative z-10">
          <div className="text-[10px] tracking-[4px] uppercase text-gold mb-3">Notre Histoire</div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight">
            Finesse,<br />
            <em className="italic text-gold-light">Identité</em> & Héritage
          </h1>
          <div className="w-12 h-[1px] bg-gold mt-4" />
        </div>
      </div>

      {/* Story */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
        <div className="relative overflow-hidden h-[400px] lg:h-auto">
          <img
            src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=900&q=80"
            alt="Artisanat Or Noir"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-dark-2 flex flex-col justify-center p-8 sm:p-12 lg:p-20 relative overflow-hidden">
          <div className="absolute -top-5 right-10 font-serif text-[300px] text-gold/5 leading-none font-light pointer-events-none select-none">"</div>
          <div className="text-[10px] tracking-[4px] uppercase text-gold mb-5">Qui sommes-nous</div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-light leading-snug mb-6">
            Un savoir-faire<br />transmis de génération<br />en génération
          </h2>
          <p className="text-grey leading-[1.9] text-[13px] mb-6 max-w-[420px]">
            Or Noir African Jewelry est une marque de bijoux artisanaux faits avec du bronze.
            Née de la passion pour la culture africaine, chaque pièce est conçue avec soin,
            alliant finesse, identité et savoir-faire ancestral.
          </p>
          <p className="text-grey leading-[1.9] text-[13px] max-w-[420px]">
            Nos créations célèbrent la richesse culturelle africaine à travers des formes
            contemporaines qui traversent les générations et les frontières.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 sm:py-20 px-5 sm:px-10 lg:px-16 border-t border-gold/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center max-w-3xl mx-auto">
          {[
            { value: '200+', label: 'Pièces créées' },
            { value: '5★', label: 'Note moyenne' },
            { value: '100%', label: 'Bronze artisanal' },
          ].map(({ value, label }) => (
            <div key={label}>
              <div className="font-serif text-[56px] font-light text-gold leading-none mb-2">{value}</div>
              <div className="text-[10px] text-grey tracking-[2px] uppercase">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-dark-2 py-12 sm:py-20 px-5 sm:px-10 lg:px-16">
        <div className="text-center mb-14">
          <div className="text-[10px] tracking-[4px] uppercase text-gold mb-3">Ce qui nous guide</div>
          <h2 className="font-serif text-4xl font-light">Nos Valeurs</h2>
          <div className="w-12 h-[1px] bg-gold my-5 mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            {
              title: 'Authenticité',
              desc: "Chaque bijou puise son inspiration dans les traditions et symboles de l'Afrique de l'Ouest, pour une identité affirmée.",
            },
            {
              title: 'Artisanat',
              desc: "Nous travaillons le bronze selon la technique ancestrale de la cire perdue, transmise depuis des siècles de maître en apprenti.",
            },
            {
              title: 'Excellence',
              desc: "De la fonte à la finition, chaque étape est réalisée à la main avec rigueur pour vous offrir une pièce unique et durable.",
            },
          ].map(({ title, desc }) => (
              <div key={title} className="border border-gold/15 p-6 lg:p-10 hover:border-gold/40 transition-colors">
              <div className="font-serif text-2xl font-light mb-4 text-gold">{title}</div>
              <p className="text-grey text-xs leading-[1.8]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-12 sm:py-20 px-5 sm:px-10 lg:px-16">
        <div className="text-center mb-14">
          <div className="text-[10px] tracking-[4px] uppercase text-gold mb-3">Notre Méthode</div>
          <h2 className="font-serif text-3xl lg:text-4xl font-light">De l'Idée au Bijou</h2>
          <div className="w-12 h-[1px] bg-gold my-5 mx-auto" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {[
            { num: '01', title: 'Création du Design', desc: "Chaque bijou naît d'une inspiration puisée dans les motifs et symboles de l'Afrique de l'Ouest." },
            { num: '02', title: 'Fonte du Bronze', desc: "Le bronze est fondu selon la technique ancestrale de la cire perdue, transmise depuis des siècles." },
            { num: '03', title: 'Finition à la Main', desc: "Chaque pièce est poncée, polie et finalisée à la main pour un résultat parfait et unique." },
            { num: '04', title: 'Emballage Premium', desc: "Vos bijoux sont emballés avec soin dans un écrin luxueux, prêts à être offerts ou portés." },
          ].map((step) => (
            <div key={step.num} className="text-center p-8 border border-gold/10 hover:border-gold/40 hover:-translate-y-1 transition-all">
              <div className="font-serif text-[56px] font-light text-gold/20 leading-none mb-4">{step.num}</div>
              <div className="font-serif text-lg mb-3">{step.title}</div>
              <p className="text-grey text-xs leading-[1.8]">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
