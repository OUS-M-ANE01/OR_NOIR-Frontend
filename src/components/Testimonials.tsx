import { SectionHeader } from './SectionHeader';

const testimonials = [
  {
    stars: 5,
    text: 'Des bijoux d\'une beauté incroyable ! La qualité du bronze est exceptionnelle et chaque pièce est une véritable œuvre d\'art. Je suis tombée amoureuse des créoles Or Noir.',
    author: 'Aminata D.',
    location: 'Dakar, Sénégal',
    avatar: 'A',
  },
  {
    stars: 5,
    text: 'J\'ai commandé le set Africa United pour ma sœur et elle était aux anges. L\'emballage est élégant, la livraison rapide. Je recommande à 100% !',
    author: 'Fatou S.',
    location: 'Thiès, Sénégal',
    avatar: 'F',
  },
  {
    stars: 5,
    text: 'Ce que j\'aime chez Or Noir, c\'est l\'authenticité. On sent vraiment le savoir-faire et l\'identité africaine dans chaque bijou. Les bagues MOSAÏC sont magnifiques !',
    author: 'Marie C.',
    location: 'Abidjan, Côte d\'Ivoire',
    avatar: 'M',
  },
];

export const Testimonials = () => {
  return (
    <section className="py-14 px-4 sm:px-8 lg:py-25 lg:px-15">
      <SectionHeader eyebrow="Ce qu'elles disent" title="Avis Clients" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, idx) => (
          <div
            key={idx}
            className="bg-dark-2 p-6 md:p-10 border border-gold/10 transition-colors hover:border-gold/30 relative"
          >
            {/* Decorative quote mark */}
            <div className="absolute top-5 right-7 text-5xl text-gold/15 font-serif pointer-events-none select-none">
              " "
            </div>
            
            <div className="text-gold text-xs mb-5 tracking-[2px]">
              {'★'.repeat(testimonial.stars)}
            </div>
            <p className="font-serif text-[17px] italic leading-[1.7] mb-6 text-white">
              {testimonial.text}
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center font-bold text-black text-sm flex-shrink-0">
                {testimonial.avatar}
              </div>
              <div>
                <div className="text-xs font-semibold text-white">
                  {testimonial.author}
                </div>
                <div className="text-[10px] text-grey tracking-[1px]">
                  {testimonial.location}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
