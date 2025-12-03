# 📝 Afropolis Content Guide
**Przewodnik po treściach strony internetowej**

*Ostatnia aktualizacja: 3 grudnia 2025*

---

## 📖 Jak korzystać z tego pliku

Ten dokument zawiera **wszystkie treści tekstowe** wyświetlane na stronie Afropolis w dwóch językach (angielski i polski).

### Instrukcja dla klienta:
1. **Znajdź** stronę i sekcję, którą chcesz edytować (użyj Spisu Treści poniżej)
2. **Zaktualizuj** treści w tabelach (kolumny: English | Polish)
3. **Zapisz** plik i przekaż zespołowi deweloperów
4. **Zmiany** zostaną zastosowane w plikach technicznych (`messages/en.json` i `messages/pl.json`)

### Co możesz edytować:
- ✅ Wszystkie teksty (tytuły, opisy, przyciski)
- ✅ Etykiety formularzy i komunikaty
- ✅ Opisy projektów i funkcji
- ❌ Ścieżki do zdjęć (to domena programistów)
- ❌ Struktura JSON (kluczy nie zmieniamy, tylko wartości)

---

## ⚠️ Ważne zasady

### Długość tekstów:
- **Nagłówki główne**: maksymalnie 50-60 znaków (dla responsywności mobile)
- **Przyciski**: 10-30 znaków
- **Opisy**: mogą być dłuższe, ale unikaj ścian tekstu (podziel na akapity)

### Znaki specjalne:
- ⚠️ **Cudzysłowy**: Jeśli musisz użyć cudzysłowu w tekście, zaznacz to wyraźnie (programista musi je "escapować")
- ✅ **Polskie znaki**: ą, ę, ć, ł, ń, ó, ś, ź, ż - działają bez problemu
- ✅ **Euro**: € - symbol działa poprawnie

### Kulturowe przykłady:
- **Angielski**: Używaj imion jak "John Doe", numerów UK/US
- **Polski**: Używaj imion jak "Jan Kowalski", polskich formatów

---

## 📑 Spis treści

### 🌐 Elementy globalne
- [Nawigacja (menu)](#-nawigacja-menu)
- [Stopka (footer)](#-stopka-footer)

### 📄 Strony
1. [Home - Strona główna](#-1-home-page---strona-główna)
2. [About - O nas](#-2-about-page---o-nas)
3. [Estate - Główny projekt osiedla](#-3-estate-page---afropolis-estate-kachume)
4. [Eco Lodge - Eko-lodge](#-4-eco-lodge-page---afropolis-eco-lodge)
5. [AB Apartments - Apartamenty](#-5-ab-apartments-page---ab-apartments)
6. [Homes - Typy domów](#-6-homes-section---typy-willi)
7. [Contact - Kontakt](#-7-contact-page---kontakt)
8. [Gallery - Galeria](#-8-gallery-page---galeria)

### 🔧 Dla programistów
- [Struktura techniczna](#-dla-programistów)
- [FAQ](#-faq)

---

# 🌐 ELEMENTY GLOBALNE

Sekcje pojawiające się na wszystkich stronach.

---

## 🧭 Nawigacja (menu)

**Gdzie się pojawia**: Górne menu nawigacyjne na każdej stronie
**Klucz JSON**: `nav.*`

| Klucz JSON | English | Polish | Kontekst |
|------------|---------|--------|----------|
| `nav.home` | Home | Strona Główna | Link do strony głównej |
| `nav.estate` | Afropolis Estate | Afropolis Estate | Link do projektu Estate |
| `nav.ecoLodge` | Afropolis Eco Lodge | Afropolis Eco Lodge | Link do Eco Lodge |
| `nav.abApartments` | AB Apartments | AB Apartments | Link do AB Apartments |
| `nav.about` | About Us | O Nas | Link do strony O nas |
| `nav.contact` | Contact | Kontakt | Link do strony kontaktowej |
| `nav.gallery` | Gallery | Galeria | Link do galerii zdjęć |
| `nav.bookMeeting` | Book a Meeting | Umów Spotkanie | Przycisk CTA w menu |

**Notatki:**
- Nazwy projektów (Estate, Eco Lodge, AB Apartments) pozostają w języku angielskim jako nazwy własne
- Przyciski powinny być krótkie (max 30 znaków dla mobile)

---

## 📱 Stopka (footer)

**Gdzie się pojawia**: Dolna część każdej strony
**Klucz JSON**: `footer.*`

| Klucz JSON | English | Polish | Kontekst |
|------------|---------|--------|----------|
| `footer.tagline` | Building dreams on the Smiling Coast of Africa. | Budujemy marzenia na Uśmiechniętym Wybrzeżu Afryki. | Slogan pod logo |
| `footer.quickLinks` | Quick Links | Szybkie Linki | Nagłówek sekcji linków |
| `footer.contactUs` | Contact Us | Skontaktuj się z Nami | Nagłówek sekcji kontaktowej |
| `footer.officeAddress` | Sales Office, Gambia | Biuro Sprzedaży, Gambia | Adres biura |
| `footer.copyright` | © 2025 Afropolis. All rights reserved. | © 2025 Afropolis. Wszelkie prawa zastrzeżone. | Informacja o prawach autorskich |

**Notatki:**
- Rok w copyright może wymagać aktualizacji co roku
- Pełne dane kontaktowe (email, telefon) są obecnie hardcoded w kodzie (nie w tym pliku)

---

# 📄 STRONY

---

## 🏠 1. HOME PAGE - Strona główna

**URL**: `/` (en) lub `/pl`
**Opis**: Główna strona z hero section i prezentacją 3 projektów

---

### 1.1 Hero Section (główny banner)

**Gdzie się pojawia**: Duży banner na górze strony głównej z tłem
**Klucz JSON**: `hero.*`

| Klucz JSON | English | Polish | Kontekst |
|------------|---------|--------|----------|
| `hero.title` | Your New Place | Twoje Nowe Miejsce | Główny nagłówek (duża czcionka) |
| `hero.subtitle` | on the Smiling Coast of Africa | na Uśmiechniętym Wybrzeżu Afryki | Podtytuł pod nagłówkiem |
| `hero.viewHomes` | View Homes | Zobacz Domy | Przycisk CTA (lewy) |
| `hero.viewAmenities` | View Amenities | Zobacz Udogodnienia | Przycisk CTA (prawy) |

**Notatki:**
- Hero section ma tło zdjęciowe (ścieżka: hardcoded w kodzie)
- Przyciski prowadzą do odpowiednich sekcji na stronie About

---

### 1.2 Projects Section (karty projektów)

**Gdzie się pojawia**: Sekcja pod hero z 3 kartami projektów
**Klucz JSON**: `projects.*`

#### Nagłówek sekcji

| Klucz JSON | English | Polish | Kontekst |
|------------|---------|--------|----------|
| `projects.title` | Our Projects | Nasze Projekty | Nagłówek sekcji |
| `projects.subtitle` | Discover all Afropolis projects in Gambia | Odkryj wszystkie projekty Afropolis w Gambii | Podtytuł sekcji |

#### Projekt 1: Afropolis Estate

| Klucz JSON | English | Polish | Kontekst |
|------------|---------|--------|----------|
| `projects.estate.name` | Afropolis Estate | Afropolis Estate | Nazwa projektu (tytuł karty) |
| `projects.estate.tagline` | 36 modern homes in Kachume | 36 nowoczesnych domów w Kachume | Krótki opis (1 linia) |
| `projects.estate.description` | New estate offering comfortable living in harmony with nature. Ideal for families and investors. | Nowe osiedle oferujące komfortowe życie w harmonii z naturą. Idealne dla rodzin i inwestorów. | Pełny opis na karcie |

#### Projekt 2: Afropolis Eco Lodge

| Klucz JSON | English | Polish | Kontekst |
|------------|---------|--------|----------|
| `projects.ecoLodge.name` | Afropolis Eco Lodge | Afropolis Eco Lodge | Nazwa projektu (tytuł karty) |
| `projects.ecoLodge.tagline` | Authentic stay in nature | Autentyczny pobyt w naturze | Krótki opis (1 linia) |
| `projects.ecoLodge.description` | Eco-lodge offering unforgettable experiences in the heart of Gambian nature. | Eko-lodge oferujący niezapomniane doświadczenia w sercu gambijskiej przyrody. | Pełny opis na karcie |

#### Projekt 3: AB Apartments

| Klucz JSON | English | Polish | Kontekst |
|------------|---------|--------|----------|
| `projects.abApartments.name` | AB Apartments | AB Apartments | Nazwa projektu (tytuł karty) |
| `projects.abApartments.tagline` | Modern Brufut apartments | Nowoczesne apartamenty Brufut | Krótki opis (1 linia) |
| `projects.abApartments.description` | Comfortable apartments in a popular tourist location. | Komfortowe apartamenty w popularnej lokalizacji turystycznej. | Pełny opis na karcie |

#### Przycisk na kartach

| Klucz JSON | English | Polish | Kontekst |
|------------|---------|--------|----------|
| `projects.viewProject` | View Project | Zobacz Projekt | Przycisk na każdej karcie projektu |

**Notatki:**
- Każda karta projektu ma zdjęcie tła (ścieżki hardcoded)
- Tagline powinien być krótki (max 50 znaków)
- Description może być dłuższy (max 150 znaków zalecane)

---

## 🏢 2. ABOUT PAGE - O nas

**URL**: `/about`
**Opis**: Strona prezentująca Afropolis, udogodnienia, lokalizację i typy domów

---

### 2.1 About Section (o Afropolis)

**Gdzie się pojawia**: Pierwsza sekcja na stronie About
**Klucz JSON**: `about.*`

| Klucz JSON | English | Polish | Kontekst |
|------------|---------|--------|----------|
| `about.eyebrow` | Welcome to Afropolis | Witaj w Afropolis | Mały tekst nad tytułem |
| `about.title` | Perfect Blend of Modernity and Nature | Idealne Połączenie Nowoczesności i Natury | Główny tytuł sekcji |
| `about.description` | Afropolis is a carefully designed, secure enclave offering modern homes in the heart of Gambia. We've created a place where comfort meets exotic nature, and the community enjoys peace and luxurious amenities. | Afropolis to starannie zaprojektowana, bezpieczna enklawa oferująca nowoczesne domy w sercu Gambii. Stworzyliśmy miejsce, w którym komfort spotyka się z egzotyczną przyrodą, a społeczność cieszy się spokojem i luksusowymi udogodnieniami. | Główny opis (akapit) |

#### Funkcje/cechy (4 checkmarki)

| Klucz JSON | English | Polish | Kontekst |
|------------|---------|--------|----------|
| `about.features.security` | Secure, gated community 24/7 | Bezpieczne, zamknięte osiedle 24/7 | Cecha 1 (z checkmarkiem) |
| `about.features.quality` | High standard of finish | Wysoki standard wykończenia | Cecha 2 (z checkmarkiem) |
| `about.features.pool` | Access to private club and pool | Dostęp do prywatnego klubu i basenu | Cecha 3 (z checkmarkiem) |
| `about.features.beach` | Just minutes from the beach | Zaledwie minuty od plaży | Cecha 4 (z checkmarkiem) |

**Notatki:**
- Features wyświetlane są jako lista z zielonymi checkmarkami
- Każda cecha powinna być krótka (max 60 znaków)

---

### 2.2 Amenities Section (udogodnienia)

**Gdzie się pojawia**: Sekcja z 4 zdjęciami udogodnień
**Klucz JSON**: `amenities.*`

| Klucz JSON | English | Polish | Kontekst |
|------------|---------|--------|----------|
| `amenities.title` | Relaxation and Community at Your Fingertips | Relaks i Społeczność na Wyciągnięcie Ręki | Nagłówek sekcji |
| `amenities.pool` | Common Pool and Relaxation Area | Wspólny Basen i Strefa Relaksu | Podpis pod zdjęciem 1 |
| `amenities.gardens` | Tropical Gardens | Tropikalne Ogrody | Podpis pod zdjęciem 2 |
| `amenities.club` | Residents' Club | Klub Mieszkańca | Podpis pod zdjęciem 3 |
| `amenities.lounge` | Common Lounge Area | Wspólna Strefa Wypoczynku | Podpis pod zdjęciem 4 |

**Notatki:**
- Każde amenity ma przypisane zdjęcie (hardcoded paths)
- Nazwy udogodnień powinny być krótkie (max 40 znaków)

---

### 2.3 Location Section (lokalizacja)

**Gdzie się pojawia**: Sekcja z opisem lokalizacji i odległościami
**Klucz JSON**: `location.*`

| Klucz JSON | English | Polish | Kontekst |
|------------|---------|--------|----------|
| `location.eyebrow` | Location | Lokalizacja | Mały tekst nad tytułem |
| `location.title` | Find Your Paradise | Znajdź Swój Raj | Główny tytuł sekcji |
| `location.description` | Our community is located in a dynamically developing area that offers the best of Gambia. Enjoy peace while being close to vibrant centers, restaurants, and golden beaches. | Nasze osiedle znajduje się w dynamicznie rozwijającej się okolicy, która oferuje to, co najlepsze w Gambii. Ciesz się spokojem, będąc jednocześnie blisko tętniących życiem centrów, restauracji i złotych plaż. | Główny opis lokalizacji |

#### Odległości (3 kluczowe punkty)

| Klucz JSON | English | Polish | Kontekst |
|------------|---------|--------|----------|
| `location.distances.beach` | 10 min to the beach | 10 min do plaży | Odległość do plaży |
| `location.distances.airport` | 20 min to Banjul airport | 20 min do lotniska Bandżul | Odległość do lotniska |
| `location.distances.shops` | 5 min to local shops and restaurants | 5 min do lokalnych sklepów i restauracji | Odległość do sklepów |

| Klucz JSON | English | Polish | Kontekst |
|------------|---------|--------|----------|
| `location.mapPlaceholder` | [ Interactive Google Map will be embedded here ] | [ Tu będzie osadzona interaktywna Mapa Google ] | Placeholder dla mapy |

**Notatki:**
- Odległości wyświetlane są jako karty/ikony
- Mapa Google zostanie dodana przez programistów

---

### 2.4 CTA Section (wezwanie do działania)

**Gdzie się pojawia**: Niebieska sekcja z przyciskiem (koniec strony About i innych stron)
**Klucz JSON**: `cta.*`

| Klucz JSON | English | Polish | Kontekst |
|------------|---------|--------|----------|
| `cta.title` | Interested? | Jesteś zainteresowany? | Nagłówek CTA |
| `cta.description` | Contact us to receive a full offer, price list, and arrange an online or on-site presentation. Take the first step towards your new home on the Smiling Coast of Africa. | Skontaktuj się z nami, aby otrzymać pełną ofertę, cennik i umówić się na prezentację online lub na miejscu. Zrób pierwszy krok do swojego nowego domu na Uśmiechniętym Wybrzeżu Afryki. | Opis zachęcający do kontaktu |
| `cta.button` | Contact Us | Napisz do Nas | Przycisk prowadzący do strony kontaktowej |

**Notatki:**
- CTA section pojawia się na wielu stronach jako zachęta do kontaktu
- Przycisk prowadzi do `/contact`

---

## 🏘️ 3. ESTATE PAGE - Afropolis Estate Kachume

**URL**: `/estate`
**Opis**: Główny projekt - osiedle 36 nowoczesnych domów w Kachume
**Uwaga**: To największa strona z wieloma sekcjami

---

### 3.1 Hero Section (banner Estate)

**Gdzie się pojawia**: Główny banner na górze strony Estate
**Klucz JSON**: `estate.hero.*`

| Klucz JSON | English | Polish | Kontekst |
|------------|---------|--------|----------|
| `estate.hero.title` | AFROPOLIS ESTATE | AFROPOLIS ESTATE | Główny tytuł (duży, bold) |
| `estate.hero.subtitle` | Kachume - Live on the Smiling Coast of Africa | Kachume - Live on the Smiling Coast of Africa | Podtytuł (pozostawiony EN) |
| `estate.hero.tagline` | Just minutes from Atlantic Ocean coast | Just minutes from Atlantic Ocean coast | Dodatkowa informacja |
| `estate.hero.cta` | View Offer | Zobacz Ofertę | Przycisk CTA |

**Notatki:**
- Subtitle i tagline są w języku angielskim w obu wersjach (decyzja brandingowa)
- Przycisk prowadzi do sekcji oferty na tej samej stronie

---

### 3.2 Intro Section (wprowadzenie o Kachume)

**Gdzie się pojawia**: Pierwsza sekcja tekstowa po hero
**Klucz JSON**: `estate.intro.*`

| Klucz JSON | English | Polish | Kontekst |
|------------|---------|--------|----------|
| `estate.intro.title` | A peaceful oasis in the heart of authentic Gambia | Spokojna oaza w sercu autentycznej Gambii | Tytuł sekcji intro |

#### Długi opis (akapit)

**Klucz JSON**: `estate.intro.description`

**English:**
```
The village of Kachume is a picturesque and peaceful place located in western Gambia, just minutes from the beautiful and still wild beaches of the Atlantic Ocean, dozens of minutes from vibrant seaside resorts and 30 minutes from the airport. It's a unique region where nature, tradition and modernity meet in harmony, creating ideal conditions for living, relaxation and investment.
```

**Polish:**
```
Wioska Kachume to malownicze i spokojne miejsce położone w zachodniej Gambii, zaledwie kilka minut drogi od przepięknych i jeszcze dzikich plaż Oceanu Atlantyckiego, kilkadziesiąt minut drogi od tętniących życiem nadmorskich kurortów i 30 minut drogi od lotniska. To wyjątkowy region, gdzie natura, tradycja i nowoczesność spotykają się w harmonii, tworząc idealne warunki do życia, odpoczynku i inwestycji.
```

**Notatki:**
- To dłuższy akapit opisowy (200+ znaków)
- Kluczowe informacje: lokalizacja, odległości, charakter miejsca

---

### 3.3 Project Section (opis projektu osiedla)

**Gdzie się pojawia**: Sekcja z opisem osiedla + zdjęcie planu
**Klucz JSON**: `estate.project.*`

| Klucz JSON | English | Polish | Kontekst |
|------------|---------|--------|----------|
| `estate.project.title` | Newly developed estate of 36 modern homes | Nowo powstające osiedle 36 nowoczesnych domów | Tytuł sekcji |

#### Opis projektu (akapit 1)

**Klucz JSON**: `estate.project.description`

**English:**
```
This is a unique residential project that combines the comfort of modern lifestyle with the charm of African nature. Surrounded by greenery of palm trees, fresh air and a friendly local community create an atmosphere of peace and security that is hard to find elsewhere.
```

**Polish:**
```
To unikalny projekt mieszkaniowy, który łączy komfort współczesnego stylu życia z urokiem afrykańskiej przyrody. Otoczone zielenią palmy, świeże powietrze i przyjazna lokalna społeczność tworzą atmosferę spokoju i bezpieczeństwa, jakiej trudno szukać gdzie indziej.
```

#### Dostęp i komunikacja (akapit 2)

**Klucz JSON**: `estate.project.access`

**English:**
```
The region offers easy access to main roads, schools, local markets and beaches, while maintaining the silence and intimacy valued by those wishing to escape the urban hustle.
```

**Polish:**
```
Region oferuje łatwy dostęp do głównych dróg, szkół, lokalnych rynków i plaż, a jednocześnie zachowuje ciszę i kameralność, cenioną przez osoby pragnące uciec od miejskiego zgiełku.
```

**Notatki:**
- Sekcja zawiera zdjęcie planu osiedla (plan_osiedla.JPG)
- Dwa akapity opisujące projekt i lokalizację

---

### 3.4 Why Kachume Section (dlaczego Kachume)

**Gdzie się pojawia**: Sekcja z 5 kartami cech Kachume
**Klucz JSON**: `estate.whyKachume.*`

| Klucz JSON | English | Polish | Kontekst |
|------------|---------|--------|----------|
| `estate.whyKachume.title` | Why Kachume? | Dlaczego Kachume? | Nagłówek sekcji |

#### 5 cech Kachume (karty)

| Klucz JSON | English | Polish | Kontekst |
|------------|---------|--------|----------|
| `estate.whyKachume.features.climate` | Stable, sunny climate year-round | Stabilny, słoneczny klimat przez cały rok | Cecha 1: Klimat |
| `estate.whyKachume.features.nature` | Proximity to nature and unique views | Bliskość natury i niepowtarzalne widoki | Cecha 2: Natura |
| `estate.whyKachume.features.investment` | Developing region with investment potential | Rozwijający się region z potencjałem inwestycyjnym | Cecha 3: Inwestycja |
| `estate.whyKachume.features.community` | Hospitable residents and safe environment | Gościnni mieszkańcy i bezpieczne otoczenie | Cecha 4: Społeczność |
| `estate.whyKachume.features.opportunity` | Excellent opportunity for investors and those seeking a second home | Doskonała okazja dla inwestorów i osób szukających drugiego domu | Cecha 5: Okazja |

#### Podsumowanie

**Klucz JSON**: `estate.whyKachume.conclusion`

**English:**
```
Kachume is the future of comfortable living in Gambia – a place where you can find peace, freedom and space to realize your dreams.
```

**Polish:**
```
Kachume to przyszłość komfortowego życia w Gambii – miejsce, gdzie można odnaleźć spokój, wolność i przestrzeń do realizacji marzeń.
```

**Notatki:**
- 5 cech wyświetlanych jako karty z ikonami
- Każda cecha powinna być zwięzła (max 80 znaków)
- Conclusion jest podsumowaniem całej sekcji

---

### 3.5 Why Invest Section (dlaczego warto zainwestować)

**Gdzie się pojawia**: Sekcja z 5 rozwijalnymi kartami powodów inwestycji
**Klucz JSON**: `estate.whyInvest.*`

| Klucz JSON | English | Polish | Kontekst |
|------------|---------|--------|----------|
| `estate.whyInvest.title` | Why invest in AFROPOLIS ESTATE in Kachume? | Dlaczego warto zainwestować w AFROPOLIS ESTATE w Kachume? | Nagłówek sekcji |

#### 5 powodów inwestycji (expandable cards)

**Powód 1: Lokalizacja**

**Klucz JSON**: `estate.whyInvest.reasons.location`

**English:**
```
Strategic location: close to the ocean, airport, urban centers and main communication routes
```

**Polish:**
```
Strategiczna lokalizacja: blisko oceanu, lotniska, ośrodków miejskich i głównych tras komunikacyjnych
```

---

**Powód 2: Nowy port**

**Klucz JSON**: `estate.whyInvest.reasons.port`

**English:**
```
New seaport under construction: in the Sanyang area, the second main and largest seaport in Gambia is being built, which in the coming years will significantly increase property values and develop local infrastructure
```

**Polish:**
```
Nowy port morski w budowie: w rejonie Sanyang powstaje drugi główny i największy w Gambii port pełnomorski, który w najbliższych latach znacząco zwiększy wartość nieruchomości i rozwinie lokalną infrastrukturę
```

---

**Powód 3: Klimat i bezpieczeństwo**

**Klucz JSON**: `estate.whyInvest.reasons.climate`

**English:**
```
Stable climate and security: year-round sunshine, clean air and friendly community
```

**Polish:**
```
Stabilny klimat i bezpieczeństwo: przez cały rok słońce, czyste powietrze i przyjazna społeczność
```

---

**Powód 4: Rozwój regionu**

**Klucz JSON**: `estate.whyInvest.reasons.development`

**English:**
```
Regional development: government and private investments attract capital and tourists
```

**Polish:**
```
Rozwój regionu: inwestycje rządowe i prywatne przyciągają kapitał oraz turystów
```

---

**Powód 5: Potencjał zysku**

**Klucz JSON**: `estate.whyInvest.reasons.profit`

**English:**
```
High profit potential: Gambia is one of the fastest-growing investment locations in West Africa
```

**Polish:**
```
Wysoki potencjał zysku: Gambia to jedno z najszybciej rozwijających się miejsc inwestycyjnych w Afryce Zachodniej
```

---

#### Dodatkowe teksty w sekcji

| Klucz JSON | English | Polish | Kontekst |
|------------|---------|--------|----------|
| `estate.whyInvest.invest` | Invest in the future | Zainwestuj w przyszłość | Tekst CTA w sekcji |

**Klucz JSON**: `estate.whyInvest.conclusion`

**English:**
```
AFROPOLIS ESTATE Kachume is more than a home – it's a lifestyle in a place where nature meets modernity, and every investment has real value for the future.
```

**Polish:**
```
Osiedle AFROPOLIS ESTATE Kachume to coś więcej niż dom – to styl życia w miejscu, gdzie natura spotyka nowoczesność, a każda inwestycja ma realną wartość na przyszłość.
```

**Notatki:**
- Każdy powód wyświetlany jest jako rozwijalna karta (expandable)
- Tekst może być dłuższy (150+ znaków)
- Conclusion jest silnym zamknięciem sekcji

---

### 3.6 Offer Section (oferta domów)

**Gdzie się pojawia**: Sekcja z cenami i funkcjami willi
**Klucz JSON**: `estate.offer.*`

| Klucz JSON | English | Polish | Kontekst |
|------------|---------|--------|----------|
| `estate.offer.title` | Modern 2-Bedroom Villas | Nowoczesne Wille 2-pokojowe | Tytuł oferty |

#### Funkcje/udogodnienia (5 elementów)

| Klucz JSON | English | Polish | Kontekst |
|------------|---------|--------|----------|
| `estate.offer.features.bedrooms` | 2 bedrooms | 2 sypialnie | Cecha: Sypialnie |
| `estate.offer.features.pool` | Pool | Basen | Cecha: Basen |
| `estate.offer.features.restaurant` | Restaurant | Restauracja | Cecha: Restauracja |
| `estate.offer.features.gym` | Gym | Siłownia | Cecha: Siłownia |
| `estate.offer.features.market` | Mini Market | Mini Market | Cecha: Sklep |

#### Ceny i finansowanie

| Klucz JSON | English | Polish | Kontekst |
|------------|---------|--------|----------|
| `estate.offer.price` | From €55,000 | Od €55,000 | Cena startowa |
| `estate.offer.financing` | Payment plan: 2 years 0% interest | Plan płatności: 2 lata 0% oprocentowania | Opcja finansowania |
| `estate.offer.cta` | Ask for details | Zapytaj o szczegóły | Przycisk CTA |

**Notatki:**
- Cena w euro (€55,000) - symbol działa poprawnie
- Features wyświetlane jako lista z checkmarkami lub ikonami
- CTA prowadzi do strony kontaktowej

---

## 🌿 4. ECO LODGE PAGE - Afropolis Eco Lodge

**URL**: `/eco-lodge`
**Opis**: Strona prezentująca eko-lodge (zakwaterowanie turystyczne)

---

### 4.1 Main Content (główna treść)

**Gdzie się pojawia**: Hero i główne sekcje strony Eco Lodge
**Klucz JSON**: `ecoLodge.*`

| Klucz JSON | English | Polish | Kontekst |
|------------|---------|--------|----------|
| `ecoLodge.title` | Afropolis Eco Lodge | Afropolis Eco Lodge | Główny tytuł (hero) |
| `ecoLodge.subtitle` | Authentic relaxation in the heart of nature | Autentyczny odpoczynek w sercu natury | Podtytuł hero |

#### Opis

**Klucz JSON**: `ecoLodge.description`

**English:**
```
Afropolis Eco Lodge is a unique place where you can experience the real Gambia. Surrounded by nature, we offer comfortable accommodation and unforgettable experiences.
```

**Polish:**
```
Afropolis Eco Lodge to wyjątkowe miejsce, gdzie możesz doświadczyć prawdziwej Gambii. Otoczeni naturą, oferujemy komfortowe zakwaterowanie i niezapomniane przeżycia.
```

---

### 4.2 Accommodation Section (oferta pobytowa)

**Gdzie się pojawia**: Sekcja z galerią pokoi/domków
**Klucz JSON**: `ecoLodge.accommodation.*`

| Klucz JSON | English | Polish | Kontekst |
|------------|---------|--------|----------|
| `ecoLodge.accommodation.title` | Accommodation offer | Oferta pobytowa | Nagłówek sekcji |
| `ecoLodge.accommodation.description` | We offer various accommodation options tailored to your needs. | Oferujemy różnorodne opcje zakwaterowania dostosowane do Twoich potrzeb. | Opis sekcji |

**Notatki:**
- Strona zawiera galerię 6 zdjęć zakwaterowania
- Treści są stosunkowo krótkie (strona w rozwoju)

---

## 🏢 5. AB APARTMENTS PAGE - AB Apartments

**URL**: `/ab-apartments`
**Opis**: Strona apartamentów w Brufut

---

### 5.1 Main Content

**Gdzie się pojawia**: Hero i główna treść strony AB Apartments
**Klucz JSON**: `abApartments.*`

| Klucz JSON | English | Polish | Kontekst |
|------------|---------|--------|----------|
| `abApartments.title` | AB Apartments | AB Apartments | Główny tytuł (hero) |
| `abApartments.subtitle` | Afropolis Brufut | Afropolis Brufut | Podtytuł (lokalizacja) |

#### Opis

**Klucz JSON**: `abApartments.description`

**English:**
```
Modern apartments in the heart of Brufut, offering comfort and convenience for short and long-term stays.
```

**Polish:**
```
Nowoczesne apartamenty w sercu Brufut, oferujące komfort i wygodę dla krótko- i długoterminowych pobytów.
```

**Notatki:**
- Strona zawiera galerię 6 zdjęć apartamentów
- Features (Pool, Garden, Security) są hardcoded w kodzie (nie w JSON)
- Używana jest sekcja CTA (patrz: [CTA Section](#24-cta-section-wezwanie-do-działania))

---

## 🏡 6. HOMES SECTION - Typy willi

**URL**: Pojawia się na stronie `/about` oraz `/homes`
**Opis**: Sekcja prezentująca 2 typy willi (Villa Kora i Villa Balafon)

---

### 6.1 Homes Content

**Gdzie się pojawia**: Sekcja z 2 kartami typów domów
**Klucz JSON**: `homes.*`

| Klucz JSON | English | Polish | Kontekst |
|------------|---------|--------|----------|
| `homes.title` | Discover Your Dream Homes | Poznaj Domy Twoich Marzeń | Nagłówek sekcji |

---

### 6.2 Villa Kora (Type A)

**Klucz JSON**: `homes.villaKora.*`

| Klucz JSON | English | Polish | Kontekst |
|------------|---------|--------|----------|
| `homes.villaKora.name` | Villa Kora (Type A) | Villa Kora (Typ A) | Nazwa domu |

#### Opis Villa Kora

**Klucz JSON**: `homes.villaKora.description`

**English:**
```
A modern, two-story home with 120 m² featuring 3 bedrooms, 2 bathrooms, and a private garden. Bright interiors and functional layout make it the perfect choice for your family.
```

**Polish:**
```
Nowoczesny, piętrowy dom o powierzchni 120 m² z 3 sypialniami, 2 łazienkami i prywatnym ogrodem. Jasne wnętrza i funkcjonalny układ sprawiają, że jest to idealny wybór dla Twojej rodziny.
```

---

### 6.3 Villa Balafon (Type B)

**Klucz JSON**: `homes.villaBalafon.*`

| Klucz JSON | English | Polish | Kontekst |
|------------|---------|--------|----------|
| `homes.villaBalafon.name` | Villa Balafon (Type B) | Villa Balafon (Typ B) | Nazwa domu |

#### Opis Villa Balafon

**Klucz JSON**: `homes.villaBalafon.description`

**English:**
```
Spacious design (140 m²) with large windows, upstairs terrace, and open living area. Experience luxury and space while enjoying views of tropical greenery.
```

**Polish:**
```
Przestronny projekt (140 m²) z dużymi przeszkleniami, tarasem na piętrze i otwartą strefą dzienną. Poczuj luksus i przestrzeń, ciesząc się widokiem na tropikalną zieleń.
```

---

### 6.4 Przycisk CTA

| Klucz JSON | English | Polish | Kontekst |
|------------|---------|--------|----------|
| `homes.learnMore` | Learn More | Dowiedz się więcej | Przycisk na kartach domów |

**Notatki:**
- Każda willa ma przypisane zdjęcie (dom-typ-a-villa-kora.JPG, dom-typ-b-villa-balafon.JPG)
- Powierzchnia i liczba pokoi są w opisie tekstowym (można wydzielić jako osobne pola jeśli potrzeba)

---

## 📧 7. CONTACT PAGE - Kontakt

**URL**: `/contact`
**Opis**: Strona z formularzem kontaktowym i danymi kontaktowymi

---

### 7.1 Header Content

**Gdzie się pojawia**: Nagłówek strony kontaktowej
**Klucz JSON**: `contact.*`

| Klucz JSON | English | Polish | Kontekst |
|------------|---------|--------|----------|
| `contact.title` | Contact Us | Skontaktuj się z Nami | Główny tytuł strony |
| `contact.description` | Fill out the form below and our team will get back to you as soon as possible. | Wypełnij formularz poniżej, a nasz zespół skontaktuje się z Tobą najszybciej jak to możliwe. | Opis pod tytułem |

---

### 7.2 Form Fields (pola formularza)

**Gdzie się pojawia**: Formularz kontaktowy
**Klucz JSON**: `contact.form.*`

#### Etykiety pól (labels)

| Klucz JSON | English | Polish | Kontekst |
|------------|---------|--------|----------|
| `contact.form.name` | Full name | Imię i nazwisko | Etykieta pola imienia |
| `contact.form.email` | Email address | Adres e-mail | Etykieta pola email |
| `contact.form.phone` | Phone number | Numer telefonu | Etykieta pola telefonu |
| `contact.form.message` | Message | Wiadomość | Etykieta pola wiadomości |

#### Placeholders (tekst podpowiedzi w pustych polach)

| Klucz JSON | English | Polish | Kontekst |
|------------|---------|--------|----------|
| `contact.form.namePlaceholder` | John Doe | Jan Kowalski | Przykład w polu imienia |
| `contact.form.emailPlaceholder` | john@example.com | jan@example.com | Przykład w polu email |
| `contact.form.phonePlaceholder` | +44 123 456 789 | +48 123 456 789 | Przykład w polu telefonu |
| `contact.form.messagePlaceholder` | Tell us about your needs... | Opowiedz nam o swoich potrzebach... | Podpowiedź w polu wiadomości |

**Notatki:**
- Placeholdery używają kulturowo odpowiednich przykładów (John Doe vs Jan Kowalski, +44 vs +48)
- To ważne dla UX - użytkownicy widzą znajome wzorce

#### Przyciski i komunikaty statusu

| Klucz JSON | English | Polish | Kontekst |
|------------|---------|--------|----------|
| `contact.form.submit` | Send message | Wyślij wiadomość | Tekst na przycisku wysyłania |
| `contact.form.sending` | Sending... | Wysyłanie... | Tekst podczas wysyłania (loading) |
| `contact.form.success` | Thank you! Your message has been sent. | Dziękujemy! Twoja wiadomość została wysłana. | Komunikat po sukcesie |
| `contact.form.error` | An error occurred. Please try again. | Wystąpił błąd. Spróbuj ponownie. | Komunikat błędu |

**Notatki:**
- Komunikaty success/error pojawiają się po próbie wysłania formularza
- Formularz integruje się z EmailJS (konfiguracja po stronie kodu)

---

### 7.3 Contact Information (dane kontaktowe)

**Gdzie się pojawia**: Prawa kolumna na stronie kontaktowej
**Klucz JSON**: `contact.info.*`

| Klucz JSON | English | Polish | Kontekst |
|------------|---------|--------|----------|
| `contact.info.title` | Contact information | Informacje kontaktowe | Nagłówek sekcji info |
| `contact.info.address` | Address | Adres | Etykieta dla adresu |
| `contact.info.email` | Email | Email | Etykieta dla email |
| `contact.info.phone` | Phone (WhatsApp) | Telefon (WhatsApp) | Etykieta dla telefonu |

**Notatki:**
- Rzeczywiste dane kontaktowe (email: info@afropolisgambia.com, telefon: +220 123 456) są hardcoded w kodzie
- Te klucze JSON to tylko etykiety pól
- Jeśli chcesz zmienić faktyczny email/telefon, powiadom programistów

---

## 📷 8. GALLERY PAGE - Galeria

**URL**: `/gallery`
**Opis**: Galeria 14 zdjęć projektu

**Uwaga:** Strona galerii **nie ma treści tekstowych w plikach tłumaczeń**. Wszystkie zdjęcia są hardcoded w kodzie.

### Zdjęcia w galerii (reference):
1. `basen-z-ludzmi-lifestyle.JPG` - Basen z ludźmi (lifestyle)
2. `basen-z-palmami-tropikalny.JPG` - Basen z palmami (tropikalny)
3. `dom-typ-a-villa-kora.JPG` - Villa Kora (Type A)
4. `dom-typ-b-villa-balafon.JPG` - Villa Balafon (Type B)
5. `klub-mieszkanca-wnetrze.JPG` - Wnętrze klubu mieszkańca
6. `plan_osiedla.JPG` - Plan osiedla
7-14. `zdjecie-dodatkowe-01.JPG` do `zdjecie-dodatkowe-08.JPG` - Dodatkowe zdjęcia

**Notatki:**
- Jeśli chcesz dodać opisy zdjęć lub tytuł galerii, należy rozszerzyć JSON o nowe klucze
- Obecna galeria wyświetla tylko same zdjęcia w układzie masonry

---

# 🔧 DLA PROGRAMISTÓW

---

## Struktura techniczna

### Pliki źródłowe treści:
- **Angielski**: `/messages/en.json` (182 linie)
- **Polski**: `/messages/pl.json` (182 linie)

### System i18n:
- **Biblioteka**: next-intl
- **Config**: `/src/i18n.ts`
- **Routing**: `/{locale}/page` (np. `/en/estate`, `/pl/estate`)
- **Default locale**: English (en)

### Jak zastosować zmiany:

1. **Przekształć zmiany z tego Markdown do JSON**
   - Zachowaj strukturę kluczy (np. `estate.hero.title`)
   - Użyj poprawnego formatowania JSON (cudzysłowy, przecinki)
   - Escapuj znaki specjalne (\" dla cudzysłowów w tekście)

2. **Zaktualizuj oba pliki**
   - `/messages/en.json` - wersja angielska
   - `/messages/pl.json` - wersja polska
   - Struktura kluczy musi być identyczna w obu plikach!

3. **Testowanie**
   - Sprawdź stronę w obu językach: `localhost:3000/en` i `localhost:3000/pl`
   - Zweryfikuj wszystkie sekcje, gdzie zmieniłeś treści
   - Upewnij się, że nie ma błędów w konsoli (błędy parsowania JSON)

4. **Walidacja JSON**
   - Użyj walidatora JSON przed commitowaniem zmian
   - Sprawdź czy nie ma trailing comma w ostatnich elementach
   - Zweryfikuj balans nawiasów `{}` i `[]`

---

## Przykład konwersji Markdown → JSON

**Z tego dokumentu:**
```markdown
| `hero.title` | Your New Place | Twoje Nowe Miejsce |
```

**Do en.json:**
```json
{
  "hero": {
    "title": "Your New Place"
  }
}
```

**Do pl.json:**
```json
{
  "hero": {
    "title": "Twoje Nowe Miejsce"
  }
}
```

---

## Hardcoded content (poza JSON)

Te elementy **nie są** w plikach tłumaczeń i wymagają zmiany w kodzie:

### Dane kontaktowe:
- **Email**: `info@afropolisgambia.com`
  - Plik: `/src/app/[locale]/contact/page.tsx` (linia 43, 185)
- **Telefon**: `+220 123 456`
  - Pliki: Footer i Contact page
- **Adres fizyczny**: "Sales Office, Gambia" (tłumaczony w JSON, ale bez szczegółów)

### Social media:
- **Facebook**: Obecnie placeholder `#`
- **Instagram**: Obecnie placeholder `#`
- Pliki: Header i Footer components

### EmailJS Configuration:
- Service ID, Template ID, Public Key
- Wymaga konfiguracji w panelu EmailJS
- Plik: `/src/app/[locale]/contact/page.tsx`

### Zdjęcia:
- Wszystkie ścieżki zdjęć są hardcoded w komponentach
- Lokalizacja: `/public/` directory
- 14 zdjęć + 1 logo

---

## Struktura kluczy JSON (pełna hierarchia)

```json
{
  "nav": {
    "home": "",
    "estate": "",
    "ecoLodge": "",
    "abApartments": "",
    "about": "",
    "contact": "",
    "gallery": "",
    "bookMeeting": ""
  },
  "hero": {
    "title": "",
    "subtitle": "",
    "viewHomes": "",
    "viewAmenities": ""
  },
  "about": {
    "eyebrow": "",
    "title": "",
    "description": "",
    "features": {
      "security": "",
      "quality": "",
      "pool": "",
      "beach": ""
    }
  },
  "homes": {
    "title": "",
    "villaKora": {
      "name": "",
      "description": ""
    },
    "villaBalafon": {
      "name": "",
      "description": ""
    },
    "learnMore": ""
  },
  "amenities": {
    "title": "",
    "pool": "",
    "gardens": "",
    "club": "",
    "lounge": ""
  },
  "location": {
    "eyebrow": "",
    "title": "",
    "description": "",
    "distances": {
      "beach": "",
      "airport": "",
      "shops": ""
    },
    "mapPlaceholder": ""
  },
  "cta": {
    "title": "",
    "description": "",
    "button": ""
  },
  "footer": {
    "tagline": "",
    "quickLinks": "",
    "contactUs": "",
    "officeAddress": "",
    "copyright": ""
  },
  "contact": {
    "title": "",
    "description": "",
    "form": {
      "name": "",
      "namePlaceholder": "",
      "email": "",
      "emailPlaceholder": "",
      "phone": "",
      "phonePlaceholder": "",
      "message": "",
      "messagePlaceholder": "",
      "submit": "",
      "sending": "",
      "success": "",
      "error": ""
    },
    "info": {
      "title": "",
      "address": "",
      "email": "",
      "phone": ""
    }
  },
  "estate": {
    "hero": {
      "title": "",
      "subtitle": "",
      "tagline": "",
      "cta": ""
    },
    "intro": {
      "title": "",
      "description": ""
    },
    "project": {
      "title": "",
      "description": "",
      "access": ""
    },
    "whyKachume": {
      "title": "",
      "features": {
        "climate": "",
        "nature": "",
        "investment": "",
        "community": "",
        "opportunity": ""
      },
      "conclusion": ""
    },
    "whyInvest": {
      "title": "",
      "reasons": {
        "location": "",
        "port": "",
        "climate": "",
        "development": "",
        "profit": ""
      },
      "invest": "",
      "conclusion": ""
    },
    "offer": {
      "title": "",
      "features": {
        "bedrooms": "",
        "pool": "",
        "restaurant": "",
        "gym": "",
        "market": ""
      },
      "price": "",
      "financing": "",
      "cta": ""
    }
  },
  "ecoLodge": {
    "title": "",
    "subtitle": "",
    "description": "",
    "accommodation": {
      "title": "",
      "description": ""
    }
  },
  "abApartments": {
    "title": "",
    "subtitle": "",
    "description": ""
  },
  "projects": {
    "title": "",
    "subtitle": "",
    "estate": {
      "name": "",
      "tagline": "",
      "description": ""
    },
    "ecoLodge": {
      "name": "",
      "tagline": "",
      "description": ""
    },
    "abApartments": {
      "name": "",
      "tagline": "",
      "description": ""
    },
    "viewProject": ""
  }
}
```

---

# ❓ FAQ

---

### Q: Co jeśli tekst jest za długi i łamie layout strony?

**A:** Skontaktuj się z zespołem deweloperów. Zalecane limity:
- Tytuły główne: 50-60 znaków
- Przyciski: 10-30 znaków
- Karty projektów (tagline): 40-50 znaków
- Opisy: 100-200 znaków (można dłużej, ale z umiarem)

---

### Q: Jak dodać nową stronę lub projekt?

**A:** To wymaga zmian w kodzie:
1. Dodaj nowe klucze do plików JSON (en.json i pl.json)
2. Stwórz nową stronę w `/src/app/[locale]/nowa-strona/page.tsx`
3. Dodaj link w nawigacji (Header component)
4. Zaktualizuj ten dokument z nowymi sekcjami

---

### Q: Gdzie są zdjęcia i czy mogę je zmienić?

**A:** Zdjęcia znajdują się w katalogu `/public/`. Lista 14 głównych zdjęć:
- Baseny: `basen-z-ludzmi-lifestyle.JPG`, `basen-z-palmami-tropikalny.JPG`
- Wille: `dom-typ-a-villa-kora.JPG`, `dom-typ-b-villa-balafon.JPG`
- Klub: `klub-mieszkanca-wnetrze.JPG`
- Plan: `plan_osiedla.JPG`
- Dodatkowe: `zdjecie-dodatkowe-01.JPG` do `08.JPG`
- Logo: `logo.png`

Aby zmienić zdjęcie: zastąp plik w `/public/` zachowując tę samą nazwę, lub powiadom programistów o zmianie ścieżki.

---

### Q: Jak zmienić email kontaktowy lub numer telefonu?

**A:** Te dane są hardcoded w kodzie. Powiadom zespół deweloperów o nowych danych:
- Email: obecnie `info@afropolisgambia.com`
- Telefon: obecnie `+220 123 456`

Lokalizacje w kodzie:
- `/src/app/[locale]/contact/page.tsx`
- `/src/components/layout/Footer.tsx`

---

### Q: Co jeśli chcę zmienić strukturę sekcji (kolejność, układ)?

**A:** To wymaga zmian w komponentach React. Kontakt z zespołem deweloperów jest konieczny.

---

### Q: Czy mogę dodać nowy język (np. francuski)?

**A:** Tak, ale wymaga to:
1. Utworzenia `/messages/fr.json` z tłumaczeniami
2. Aktualizacji konfiguracji w `/src/i18n.ts`
3. Dodania przełącznika języka w Header
4. Testowania wszystkich stron w nowym języku

---

### Q: Jak przetestować zmiany przed publikacją?

**A:** Zespół deweloperów uruchomi stronę lokalnie:
1. `npm run dev` (uruchamia serwer deweloperski)
2. Otwórz `localhost:3000/en` (angielski) i `localhost:3000/pl` (polski)
3. Przejdź przez wszystkie strony i sprawdź treści
4. Zweryfikuj responsywność (mobile, tablet, desktop)

---

### Q: Co zrobić jeśli po zmianie treści strona się zepsuła?

**A:** Prawdopodobnie błąd w strukturze JSON:
- Sprawdź czy wszystkie cudzysłowy są poprawnie zamknięte
- Czy nie ma brakujących przecinków między elementami
- Czy struktura kluczy jest zachowana w obu plikach (en.json i pl.json)
- Użyj walidatora JSON online (np. jsonlint.com)

---

### Q: Czy ten dokument będzie aktualizowany?

**A:** Tak, przy każdej większej zmianie w strukturze strony:
- Dodanie nowych stron
- Dodanie nowych sekcji
- Zmiana struktury kluczy JSON
- Dodanie nowych języków

Data ostatniej aktualizacji znajduje się na górze dokumentu.

---

## 📞 Kontakt

Jeśli masz pytania dotyczące edycji treści lub potrzebujesz pomocy, skontaktuj się z zespołem deweloperów Afropolis.

**Email**: [Tu wpisać email kontaktowy do zespołu]
**Strona**: https://afropolisgambia.com

---

**Koniec dokumentu** • Wersja 1.0 • 3 grudnia 2025
