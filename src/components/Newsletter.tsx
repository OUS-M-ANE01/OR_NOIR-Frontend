interface NewsletterProps {
  onSubscribe: () => void;
}

export const Newsletter = ({ onSubscribe }: NewsletterProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubscribe();
  };

  return (
    <div className="bg-dark-2 text-center py-14 px-4 sm:px-8 lg:py-20 lg:px-15">
      <div className="text-[10px] tracking-[4px] uppercase text-gold mb-3">
        Restez Informée
      </div>
      <h2 className="font-serif text-3xl sm:text-[38px] lg:text-[42px] font-light mb-3">
        Rejoignez la Communauté Or Noir
      </h2>
      <p className="text-grey text-[13px] mb-8 sm:mb-10">
        Soyez la première à découvrir les nouvelles collections, promotions exclusives et inspirations bijoux.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center gap-0 max-w-[480px] mx-auto">
        <input
          type="email"
          className="flex-1 py-3.5 px-5 bg-white/5 border border-gold/30 sm:border-r-0 text-white font-sans text-xs outline-none placeholder:text-grey"
          placeholder="Votre adresse email"
          required
        />
        <button
          type="submit"
          className="py-3.5 px-7 bg-gold border-none text-black font-sans text-[10px] tracking-[2px] uppercase font-bold cursor-pointer transition-colors hover:bg-gold-light"
        >
          S'inscrire
        </button>
      </form>
    </div>
  );
};
