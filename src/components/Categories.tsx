import { Link } from 'react-router-dom';
import { SectionHeader } from './SectionHeader';

const categories = [
  {
    name: "Boucles d'Oreilles",
    filter: "Boucles d'oreilles",
    count: '24 pièces',
    img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80',
  },
  {
    name: 'Bagues',
    filter: 'Bagues',
    count: '18 pièces',
    img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80',
  },
  {
    name: 'Bracelets',
    filter: 'Bracelets',
    count: '15 pièces',
    img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80',
  },
  {
    name: 'Sets & Parures',
    filter: 'Sets & Parures',
    count: '8 pièces',
    img: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&q=80',
  },
];

export const Categories = () => {
  return (
    <section id="collections" className="py-14 px-4 sm:px-8 lg:py-25 lg:px-15">
      <SectionHeader
        eyebrow="Explorer par Catégorie"
        title="Nos Collections"
        description="Chaque pièce raconte l'histoire d'un art transmis de génération en génération."
      />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            to={`/boutique?category=${encodeURIComponent(cat.filter)}`}
            className="relative overflow-hidden cursor-pointer aspect-[2/3] group block no-underline"
            data-cursor-hover
          >
            <img
              src={cat.img}
              alt={cat.name}
              className="w-full h-full object-cover transition-transform duration-[600ms] ease-in-out brightness-[0.6] group-hover:scale-105 group-hover:brightness-[0.8]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-4 sm:p-6 lg:p-8">
              <div className="font-serif text-lg sm:text-2xl font-normal mb-1 text-white">
                {cat.name}
              </div>
              <div className="text-[10px] text-gold tracking-[2px] uppercase">
                {cat.count}
              </div>
            </div>
            <div className="absolute top-6 right-6 w-9 h-9 border border-white/30 flex items-center justify-center text-white text-base opacity-0 transition-opacity group-hover:opacity-100">
              →
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
