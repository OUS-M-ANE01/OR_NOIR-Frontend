interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export const SectionHeader = ({ eyebrow, title, description }: SectionHeaderProps) => {
  return (
    <div className="text-center mb-10 lg:mb-15">
      <div className="text-[10px] tracking-[4px] uppercase text-gold mb-3">
        {eyebrow}
      </div>
      <h2 className="font-serif text-4xl sm:text-5xl font-light leading-tight">
        {title}
      </h2>
      <div className="w-15 h-[1px] bg-gold my-5 mx-auto" />
      {description && (
        <p className="text-grey text-[13px] leading-[1.8] max-w-[500px] mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};
