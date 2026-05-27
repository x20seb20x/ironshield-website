# IronShield Website

Offizielle Website des Discord-Bots **IronShield** — ein moderner Security- und Utility-Bot für Discord-Server.

![Lizenz: MIT](https://img.shields.io/badge/Lizenz-MIT-blue.svg)
![Status: Aktiv](https://img.shields.io/badge/Status-Aktiv-green.svg)

## 🚀 Schnellstart

### Lokal testen
```bash
# Clone Repository
git clone https://github.com/IronShield-Bot/website.git
cd website

# Lokaler HTTP-Server (Python 3)
python -m http.server 8000

# Im Browser öffnen:
# http://localhost:8000
```

### Auf Hosting deployen
1. Alle Dateien auf deinen Webhost hochladen (z. B. rrhosting)
2. Sicherstellen, dass HTTPS aktiviert ist
3. Domain/URL in Discord-Bot-Links aktualisieren

## 📁 Projektstruktur

```
.
├── index.html          # Startseite (Hero, Features, Support)
├── impressum.html      # Impressum (DSGVO-konform)
├── privacy.html        # Datenschutzerklärung
├── css/
│   └── styles.css      # Minimalistisches schwarz-weißes Design
├── js/
│   └── script.js       # Navigation, Cookie-Consent, Analytics-Loader
├── README.md           # Diese Datei
├── LICENSE             # MIT-Lizenz
└── .gitignore          # Git-Ignore-Datei
```

## 🎨 Design & Features

- **Responsive Design:** Mobile-optimiert (Tests mit DevTools empfohlen)
- **Schwarz-Weiß Design:** Minimalistisch und professionell
- **Cookie-Banner:** DSGVO-konform mit Zustimmung/Ablehnung
- **Smooth Scroll:** Navigation mit sanften Übergängen
- **Call-to-Action:** Prominente "Bot einladen"-Schaltfläche

## ⚙️ Konfiguration

### Google Ads / Analytics aktivieren
1. **Google Analytics 4 (GA4):** 
   - Konto anlegen: https://analytics.google.com
   - Measurement ID notieren (Format: `G-XXXXXXXXXX`)
   - In `js/script.js` die `loadAnalytics()`-Funktion mit deiner ID ersetzen

2. **Google AdSense (optional):**
   - Konto anlegen: https://www.google.com/adsense/
   - Publisher-ID notieren (Format: `ca-pub-XXXXXXXXXX`)
   - AdSense-Skript in dein HTML einfügen (nach Cookie-Zustimmung)

### Impressum & Datenschutz ausfüllen
- `impressum.html`: Betreiber, Kontakt, rechtliche Hinweise
- `privacy.html`: Datenverarbeitung, Cookies, Rechtsgrundlagen (DSGVO)

**Wichtig:** Diese sind aktuell als Platzhalter mit den Kontaktdaten von IronShield vorausgefüllt. Ergänze rechtliche Texte, um DSGVO-konform zu sein.

### Cookie-Banner anpassen
In `js/script.js` können die Consent-Regeln und Analytics-Loader angepasst werden:
```javascript
// Analytics-Loader (nach Einwilligung)
function loadAnalytics() {
  // Ersetze 'G-XXXXXXXXXX' mit deiner GA4 ID
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
  document.head.appendChild(script);
  // gtag config...
}
```

## 🔒 Rechtliches (DSGVO / DACH)

- ✅ **Impressum:** Erforderlich und vorhanden (`impressum.html`)
- ✅ **Datenschutzerklärung:** Erforderlich und vorhanden (`privacy.html`)
- ✅ **Cookie-Banner:** Implementiert und blockiert Tracking bis Zustimmung
- ✅ **HTTPS:** Erforderlich (Hosting muss SSL-Zertifikat bereitstellen)
- ⚠️ **Zustimmung:** Cookie-Banner muss *vor* Analytics/Ads-Laden angezeigt werden

Für Details siehe `privacy.html` und README-Abschnitt "Konfiguration".

## 📞 Support

- **E-Mail:** Ironshieldsup@outlook.de
- **Discord:** https://discord.gg/S34ANZ5kwZ
- **WhatsApp:** https://whatsapp.com/channel/0029Vb70qLa6BIEdUD2SBq08
- **Bot-Invite (OAuth2):** https://discord.com/oauth2/authorize?client_id=1479835689284669461

## 📄 Lizenz

Dieses Projekt ist unter der [MIT-Lizenz](LICENSE) lizenziert.

**© IronShield — Alle Rechte vorbehalten.**

Siehe `index.html` (Footer) für den vollständigen Copyright-Hinweis und die Nutzungsbedingungen.

---

**Maintainer:** Sebastian Stephan, Levi Markewski
