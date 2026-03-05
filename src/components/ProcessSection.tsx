import { SectionHeader } from './SectionHeader';

const steps = [
  {
    num: '01',
    icon: 'Design',
    title: 'Création du Design',
    desc: 'Chaque bijou naît d\'une inspiration puisée dans les motifs et symboles de l\'Afrique de l\'Ouest.',
  },
  {
    num: '02',
    icon: 'Fonte',
    title: 'Fonte du Bronze',
    desc: 'Le bronze est fondu selon la technique ancestrale de la cire perdue, transmise depuis des siècles.',
  },
  {
    num: '03',
    icon: 'Finition',
    title: 'Finition à la Main',
    desc: 'Chaque pièce est poncée, polie et finalisée à la main pour un résultat parfait et unique.',
  },
  {
    num: '04',
    icon: 'Emballage',
    title: 'Emballage Premium',
    desc: 'Vos bijoux sont emballés avec soin dans un écrin luxueux, prêts à être offerts ou portés.',
  },
];

export const ProcessSection = () => {
  return (
    <section className="bg-dark-2 py-14 px-4 sm:px-8 lg:py-25 lg:px-15">
      <SectionHeader
        eyebrow="Notre Méthode"
        title="Un Savoir-Faire Ancestral"
        description="De la conception à la livraison, chaque étape est réalisée avec passion et précision."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-5">
        {steps.map((step) => (
          <div
            key={step.num}
            className="text-center p-10 px-5 border border-gold/10 transition-all hover:border-gold/40 hover:-translate-y-1 relative"
          >
            <div className="font-serif text-[64px] font-light text-gold/20 leading-none mb-4">
              {step.num}
            </div>
            <div className="w-12 h-12 bg-gold/10 border border-gold rounded-full flex items-center justify-center mx-auto mb-5 text-xl">
              {step.icon.charAt(0)}
            </div>
            <div className="font-serif text-xl mb-3">
              {step.title}
            </div>
            <p className="text-grey text-xs leading-[1.8]">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
