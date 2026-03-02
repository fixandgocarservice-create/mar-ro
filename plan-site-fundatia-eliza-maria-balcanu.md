# Plan de realizare website – Fundația Eliza-Maria Bălcanu

## 1) Obiectivele site-ului
- Prezentarea misiunii fundației: susținerea tinerilor talentați care nu își pot continua studiile din motive financiare, sociale sau familiale.
- Explicarea clară a programelor de sprijin (burse, mentorat, parteneriate, campanii).
- Crearea unei secțiuni „Harta domeniilor esențiale” care evidențiază modele de performanță din domenii-cheie.
- Colectarea de donații și înscrieri (beneficiari, voluntari, mentori, parteneri).

## 2) Public țintă
- Tineri eligibili pentru sprijin educațional.
- Donatori individuali și companii.
- Mentori/profesioniști din diverse domenii.
- Public larg interesat de educație, performanță și impact social.

## 3) Structura recomandată (sitemap)
1. **Acasă** – mesaj principal, impact, call-to-action (Donează / Aplică).
2. **Despre fundație** – misiune, viziune, valori, poveste.
3. **Programe** – burse, mentorat, concursuri, tabere educaționale.
4. **Harta domeniilor esențiale** – pagină centrală interactivă.
5. **Povești de succes** – beneficiari, mentori, evoluții.
6. **Implică-te** – donații, voluntariat, parteneriate.
7. **Noutăți / Blog** – anunțuri, rezultate, evenimente.
8. **Contact** – formular, date de contact, social media.

## 4) Conceptul „Harta domeniilor esențiale”
### 4.1 Domenii propuse
- Guvernare și administrație publică.
- Știință și cercetare.
- Educație.
- Medicină.
- Sport de performanță.
- Cultură și arte.
- Antreprenoriat și inovație.

### 4.2 Cum funcționează
- Utilizatorul alege un domeniu din hartă.
- În fiecare domeniu apar funcții/repere (ex.: Prim-ministru, laureat Nobel, campion olimpic etc.).
- Pentru fiecare funcție se afișează persoane care au atins acel nivel de-a lungul timpului.
- Fiecare persoană poate avea o fișă scurtă: perioadă, realizări, context inspirațional.

### 4.3 Elemente tehnice recomandate
- Interfață tip hartă/diagramă interactivă (desktop + mobil).
- Filtre: domeniu, perioadă, țară, tip de realizare.
- Căutare rapidă după nume/functie.
- Conținut administrabil din panou (CMS/headless CMS).

## 5) Funcționalități esențiale (MVP)
- Design responsive, accesibil, ușor de navigat.
- Formular de aplicare pentru burse/mentorat.
- Formular de donații (integrare procesator de plăți).
- Harta domeniilor în versiune inițială (minim 3-4 domenii).
- Pagină de impact (număr beneficiari, burse acordate, rezultate).
- Integrare newsletter.

## 6) Conținut minim necesar la lansare
- Mesaj instituțional clar (cine suntem, ce facem, cui ne adresăm).
- 5-10 povești inspiraționale sau profiluri-model pe hartă.
- Regulament de selecție pentru beneficiari.
- Transparență: rapoarte, parteneri, date juridice.
- Pagini legale: termeni, confidențialitate, cookies, GDPR.

## 7) Propunere de identitate vizuală
- Stil curat, modern, empatic.
- Paletă cromatică bazată pe încredere + speranță + energie.
- Fotografie autentică (tineri, educație, performanță).
- Iconografie clară pentru domeniile din hartă.

## 8) Tehnologii recomandate
- **Frontend:** Next.js sau React (performanță + scalabilitate).
- **CMS:** Strapi / Contentful / Sanity (ușor de administrat).
- **Backend:** Node.js (API pentru formulare, donații, harta domeniilor).
- **Bază de date:** PostgreSQL.
- **Hosting:** Vercel/Netlify (frontend) + serviciu cloud pentru API/DB.
- **Analytics:** GA4 + event tracking pentru conversii (aplicări/donații).

## 9) Plan de implementare pe faze
### Faza 0 – Discovery (1-2 săptămâni)
- Clarificare obiective, audiențe, KPI.
- Stabilire structură date pentru „hartă”.
- Definire ton comunicare și identitate de brand.

### Faza 1 – UX/UI (2-3 săptămâni)
- Wireframe pentru paginile principale.
- Prototip interactiv pentru harta domeniilor.
- Validare rapidă cu 5-10 utilizatori.

### Faza 2 – Dezvoltare MVP (4-6 săptămâni)
- Implementare pagini de bază + formulare.
- Implementare hartă (versiune inițială).
- Conectare CMS + management conținut.

### Faza 3 – Conținut și testare (1-2 săptămâni)
- Încărcare conținut, profiluri, imagini.
- Testare funcțională, mobil, accesibilitate, performanță.
- Revizii legale (GDPR, politici).

### Faza 4 – Lansare și optimizare continuă
- Lansare publică.
- Monitorizare KPI + feedback.
- Extinderea hărții cu noi domenii și noi profile.

## 10) KPI-uri inițiale (primele 6 luni)
- Număr aplicații eligibile primite.
- Valoare donații și număr donatori recurenți.
- Număr parteneri/mentori atrași.
- Timp petrecut în secțiunea „Harta domeniilor”.
- Rata de conversie: vizitator → aplicant / donator.

## 11) Riscuri și măsuri
- **Date incomplete în hartă:** pornire cu set minim validat + actualizări periodice.
- **Complexitate tehnică mare:** MVP simplu, cu extindere graduală.
- **Conținut dificil de menținut:** responsabil editorial + flux clar de publicare.
- **Încredere publică:** transparență financiară și comunicare constantă a impactului.

## 12) Următorii pași concreți (imediat)
1. Workshop de 2 ore cu echipa fundației pentru prioritizare.
2. Alegerea domeniilor și a primelor 20-30 profiluri pentru hartă.
3. Definirea formularelor (aplicare, donație, implicare).
4. Alegerea stack-ului final și a bugetului.
5. Pornirea designului de homepage + harta MVP.
