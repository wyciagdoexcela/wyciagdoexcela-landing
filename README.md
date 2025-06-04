# KonwertujWyciąg.pl - Landing Page

Landing page dla usługi konwertowania wyciągów bankowych z PDF do Excel. Strona optymalizowana pod kątem SEO i konwersji, z formularzem zbierającym leady na listę mailingową.

## 🎯 Cel strony

- **Lead generation**: Zbieranie adresów email osób zainteresowanych konwerterem
- **Market research**: Sprawdzenie popularności różnych banków
- **Brand awareness**: Budowanie świadomości marki KonwertujWyciąg.pl
- **SEO**: Pozycjonowanie pod kluczowe frazy związane z konwersją wyciągów bankowych

## 📊 Funkcjonalność

### ✅ Co działa
- **Responsywny design** - dostosowany do wszystkich urządzeń
- **Formularz konwertera** - zbiera email, bank i plik PDF
- **Walidacja formularza** - sprawdza poprawność danych
- **Animacje** - smooth scrolling, fade-in effects
- **Mock MailChimp** - symulacja zapisywania na listę mailingową
- **Analytics tracking** - placeholder dla Google Analytics
- **SEO optimization** - meta tagi, schema.org, Open Graph

### 🎭 Co jest mock/fake
- **Konwersja plików** - strona udaje że konwertuje, ale faktycznie tylko zbiera dane
- **Integracja MailChimp** - używa localStorage zamiast prawdziwego API
- **Obsługa banków** - wszystkie banki pokazują komunikat "nie jest wspierany"

## 📁 Struktura plików

```
landing/
├── index.html          # Główna strona HTML
├── style.css           # Stylizacja CSS
├── script.js           # Funkcjonalność JavaScript
├── README.md           # Ten plik
├── favicon.ico         # Ikona strony (do dodania)
└── apple-touch-icon.png # Ikona iOS (do dodania)
```

## 🚀 Wdrożenie na GitHub Pages

### 1. Przygotowanie repozytorium

```bash
# Utwórz nowe repozytorium na GitHub
# Nazwa: konwertuj-wyciag-landing

# Skopiuj pliki do repozytorium
git init
git add .
git commit -m "Initial landing page"
git branch -M main
git remote add origin https://github.com/USERNAME/konwertuj-wyciag-landing.git
git push -u origin main
```

### 2. Konfiguracja GitHub Pages

1. Idź do **Settings** w repozytorium
2. Scroll do sekcji **Pages**
3. W **Source** wybierz **Deploy from a branch**
4. W **Branch** wybierz **main** i folder **/ (root)**
5. Kliknij **Save**

### 3. Custom Domain (opcjonalne)

Jeśli masz domenę `konwertujwyciag.pl`:

1. W sekcji **Pages** dodaj **Custom domain**: `konwertujwyciag.pl`
2. W DNS domeny dodaj rekord CNAME: `konwertujwyciag.pl` → `USERNAME.github.io`
3. Poczekaj na propagację DNS (do 24h)

### 4. HTTPS i SSL

GitHub Pages automatycznie zapewnia HTTPS dla stron `.github.io` i custom domain.

## 🔧 Konfiguracja po wdrożeniu

### Google Analytics (opcjonalne)

Dodaj tracking code w `index.html`:

```html
<!-- W sekcji <head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### MailChimp Integration

Zamień mock funkcję w `script.js`:

```javascript
async function subscribeToMailChimp(data) {
    const response = await fetch('YOUR_MAILCHIMP_ENDPOINT', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email_address: data.email,
            status: 'subscribed',
            merge_fields: {
                BANK: data.bank,
                FILENAME: data.fileName
            }
        })
    });
    
    return await response.json();
}
```

## 📈 Monitorowanie i analityka

### Metryki do śledzenia

1. **Konwersja formularza**
   - Liczba wysłanych formularzy
   - Współczynnik konwersji (form submissions / unique visitors)
   - Najpopularniejsze banki

2. **Ruch na stronie**
   - Unique visitors
   - Bounce rate
   - Czas spędzony na stronie
   - Źródła ruchu

3. **SEO**
   - Pozycje w Google dla kluczowych fraz
   - Ruch organiczny
   - Click-through rate z wyników wyszukiwania

### Funkcje debug (konsola przeglądarki)

```javascript
// Wyświetl zapisanych subskrybentów
debugFunctions.viewStoredSubscribers()

// Wyczyść localStorage
debugFunctions.clearStoredSubscribers()

// Śledź event
debugFunctions.trackEvent('test_event', {data: 'test'})
```

## 🎨 Personalizacja

### Kolory marki

Główne kolory używane na stronie:

```css
:root {
    --primary-blue: #3B82F6;
    --primary-dark: #1E40AF;
    --secondary-green: #10B981;
    --secondary-dark: #059669;
    --neutral-gray: #6B7280;
    --light-gray: #F9FAFB;
}
```

### Czcionki

- **Główna**: Inter (Google Fonts)
- **Fallback**: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto

### Animacje

- **Fade-in** przy scrollowaniu
- **Hover effects** na kartach i przyciskach
- **Loading states** w formularzu
- **Smooth scrolling** nawigacji

## 🔍 SEO Keywords

Strona optymalizowana pod frazy:

- "konwersja wyciągu bankowego"
- "PDF do Excel"
- "wyciąg bankowy Excel"
- "konwerter wyciągów"
- "PDF Excel transakcje"
- "księgowość Excel"

## 📧 Flow użytkownika

1. **Landing** - użytkownik wchodzi na stronę
2. **Problem** - identyfikuje się z problemem przepisywania
3. **Solution** - widzi jak działa konwerter
4. **Trust** - sprawdza obsługiwane banki i FAQ
5. **Action** - wypełnia formularz
6. **Confirmation** - dostaje komunikat o dodaniu na listę
7. **Follow-up** - w przyszłości dostanie email o gotowości banku

## 🛠️ Rozwój strony

### Możliwe ulepszenia

1. **A/B testing** różnych wersji formularza
2. **Exit-intent popup** z dodatkową ofertą
3. **Social proof** - liczba zarejestrowanych użytkowników
4. **Blog** - artykuły o księgowości i finansach
5. **Testimonials** - opinie beta testerów
6. **Video** - demo konwertera

### Integracje

- **Mailchimp/ConvertKit** - email marketing
- **Google Analytics** - analityka
- **Facebook Pixel** - remarketing
- **Hotjar** - heatmapy i recordings
- **Crisp/Intercom** - live chat

## 📱 Testowanie

### Checklist przed publikacją

- [ ] Strona działa na wszystkich urządzeniach
- [ ] Formularz waliduje się poprawnie
- [ ] Wszystkie linki działają
- [ ] Meta tagi są poprawne
- [ ] Favicon i ikony są dodane
- [ ] Performance: strona ładuje się < 3s
- [ ] SEO: wszystkie wymagane tagi są obecne

### Narzędzia do testowania

- **Google PageSpeed Insights** - performance
- **Google Mobile-Friendly Test** - responsywność
- **W3C Validator** - poprawność HTML
- **Schema.org Validator** - structured data

## 📞 Wsparcie

Dla pytań technicznych lub modyfikacji strony, skontaktuj się z zespołem dev.

---

**Status**: ✅ Gotowy do wdrożenia  
**Ostatnia aktualizacja**: 2024  
**Wersja**: 1.0 