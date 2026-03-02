const domainData = [
  {
    name: "Guvernare și administrație publică",
    repere: ["Prim-ministru", "Ministru al Educației", "Primar de municipiu"]
  },
  {
    name: "Știință și cercetare",
    repere: ["Laureat Nobel", "Cercetător principal", "Inovator academic"]
  },
  {
    name: "Sport de performanță",
    repere: ["Campion olimpic", "Campion mondial", "Antrenor de elită"]
  },
  {
    name: "Cultură și arte",
    repere: ["Scriitor premiat", "Artist recunoscut", "Muzician de top"]
  }
];

const grid = document.getElementById("domain-grid");

domainData.forEach((domain) => {
  const card = document.createElement("article");
  card.className = "domain-card";

  const title = document.createElement("h4");
  title.textContent = domain.name;

  const list = document.createElement("ul");
  domain.repere.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });

  card.append(title, list);
  grid.appendChild(card);
});
