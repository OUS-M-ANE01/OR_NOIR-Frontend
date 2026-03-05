import { SectionHeader } from './SectionHeader';

const images = [
  'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80',
  'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80',
  'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80',
  'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&q=80',
  'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80',
  'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80',
];

export const Instagram = () => {
  return (
    <div className="py-12 px-4 sm:px-8 lg:py-20 lg:px-15">
      <SectionHeader eyebrow="Suivez-nous" title="@ornoirafricanjewelry" />
      <div className="grid grid-cols-3 lg:grid-cols-6 gap-1">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="aspect-square relative overflow-hidden cursor-pointer group"
            data-cursor-hover
          >
            <img
              src={img}
              alt=""
              className="w-full h-full object-cover transition-all duration-400 brightness-[0.8] group-hover:scale-[1.08] group-hover:brightness-100"
            />
            <div className="absolute inset-0 bg-gold/70 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100 text-2xl text-white">
              ♥
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
