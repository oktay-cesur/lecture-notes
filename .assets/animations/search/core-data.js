export const cities = {
  Ist: { name: "İstanbul", x: 80, y: 120, h: 350 },
  Tek: { name: "Tekirdağ", x: 20, y: 40, h: 450 },
  Adn: { name: "Adapazarı", x: 230, y: 60, h: 280 },
  Bur: { name: "Bursa", x: 160, y: 220, h: 250 },
  Izm: { name: "İzmir", x: 60, y: 340, h: 500 },
  Kut: { name: "Kütahya", x: 280, y: 280, h: 150 },
  Esk: { name: "Eskişehir", x: 370, y: 200, h: 100 },
  Bol: { name: "Bolu", x: 300, y: 100, h: 80 },
  Duz: { name: "Düzce", x: 330, y: 40, h: 160 },
  Ank: { name: "Ankara", x: 520, y: 200, h: 0 },
  Kas: { name: "Kastamonu", x: 460, y: 40, h: 300 },
  Sam: { name: "Samsun", x: 590, y: 50, h: 350 },
  Aft: { name: "Afyon", x: 330, y: 350, h: 200 }
};

export const edges = [
  ["Ist", "Tek", 100],
  ["Ist", "Bur", 150],
  ["Ist", "Esk", 400],
  ["Ist", "Bol", 300],
  ["Ist", "Adn", 130],
  ["Adn", "Duz", 80],
  ["Duz", "Kas", 200],
  ["Kas", "Sam", 250],
  ["Kas", "Ank", 300],
  ["Bur", "Kut", 120],
  ["Kut", "Esk", 80],
  ["Esk", "Ank", 200],
  ["Bol", "Ank", 350],
  ["Bur", "Izm", 200],
  ["Kut", "Aft", 100],
  ["Aft", "Ank", 280],
  ["Tek", "Duz", 250]
];

export const adj = (() => {
  const a = {};
  for (const city of Object.keys(cities)) a[city] = [];
  for (const [u, v, w] of edges) {
    a[u].push({ to: v, w });
    a[v].push({ to: u, w });
  }
  for (const city of Object.keys(a)) {
    a[city].sort((x, y) => x.to.localeCompare(y.to));
  }
  return a;
})();
