const { fifaData } = require('./fifa.js');

const ortalamaGol = (maclar) => {
  const toplamGol = maclar.reduce((toplam, maç) => {
    return toplam + maç['Home Team Goals'] + maç['Away Team Goals'];
  }, 0);
  const macSayisi = maclar.length;
  const ortalama = toplamGol / macSayisi;
  return ortalama.toFixed(2);
};
