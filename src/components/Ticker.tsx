export const Ticker = () => {
  const text = 'NOUVEAUX ARRIVANTS   BOUCLES D\'OREILLES   BAGUES ARTISANALES   BRACELETS EN BRONZE   COLLECTIONS EXCLUSIVES   SAVOIR-FAIRE AFRICAIN   LIVRAISON SÉNÉGAL   ';

  return (
    <div className="bg-gold overflow-hidden whitespace-nowrap py-3">
      <div className="inline-block animate-ticker text-[11px] font-semibold tracking-[3px] uppercase text-black">
        {text + text}
      </div>
    </div>
  );
};
