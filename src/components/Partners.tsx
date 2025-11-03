export const Partners = () => {
  const brands = [
    "Toyota",
    "Honda", 
    "Ford",
    "Chevrolet",
    "Mercedes-Benz",
    "BMW",
  ];

  return (
    <section className="py-12 sm:py-16 px-4 border-t border-b border-border">
      <div className="container mx-auto">
        <p className="text-center text-xs sm:text-sm text-muted-foreground mb-8 sm:mb-12 px-4">
          Just a few of the many top dealers we partner with.
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-8 items-center opacity-60">
          {brands.map((brand) => (
            <div 
              key={brand} 
              className="flex items-center justify-center h-12 sm:h-16 text-foreground/40 font-bold text-sm sm:text-lg hover:text-foreground/60 transition-colors"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
