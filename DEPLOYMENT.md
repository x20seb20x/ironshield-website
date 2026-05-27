# Deployment-Anleitung

## 📤 Auf GitHub hochladen

### 1. Repository erstellen
1. Melde dich auf [GitHub](https://github.com) an
2. Klicke oben rechts auf **+** → **New repository**
3. Repo-Name: `ironshield-website` (oder beliebig)
4. Beschreibung: `Offizielle Website des Discord-Bots IronShield`
5. Sichtbarkeit: **Public** (optional: Private, wenn Inhalte geheim sein sollen)
6. **.gitignore**: `Git`-Vorlage hinzufügen (optional, ist schon in deinem Projekt)
7. **Create repository**

### 2. Lokal initialisieren und pushen
```bash
cd C:\ironshield-website

# Git initialisieren (falls nicht schon geschehen)
git init

# Fernrepository hinzufügen (ersetze USERNAME/REPO mit deinen Daten)
git remote add origin https://github.com/USERNAME/ironshield-website.git

# Alle Dateien staging
git add .

# Commit
git commit -m "Initial commit: IronShield Website"

# Branch umbenennen zu main (GitHub-Standard)
git branch -M main

# Push to GitHub
git push -u origin main
```

### 3. Regelmäßig updaten
```bash
# Nach Änderungen
git add .
git commit -m "Beschreibung der Änderungen"
git push
```

---

## 🌐 Auf rrhosting deployen

### 1. Hosting-Konto einrichten
1. Registriere dich bei [rrhosting.com](https://www.rrhosting.com) oder deinem Provider
2. Wähle ein Paket mit HTTP/HTTPS-Unterstützung
3. Bestätigung der Domain (falls vorhanden) oder nutze Subdomain des Hosters

### 2. Dateien hochladen (FTP/SFTP)
1. **FTP-Zugangsdaten** aus rrhosting-Kontrollpanel notieren
   - FTP-Host: `ftp.deine-domain.de`
   - Benutzer: `username`
   - Passwort: (aus dem Kontrollpanel)

2. **FTP-Client verwenden** (z. B. FileZilla, WinSCP)
   - Verbindung herstellen
   - Alle Dateien aus `C:\ironshield-website\` in das **public_html** oder **www**-Verzeichnis hochladen:
     ```
     index.html
     impressum.html
     privacy.html
     css/styles.css
     js/script.js
     .gitignore (optional)
     LICENSE (optional)
     README.md (optional)
     ```

3. **Oder: FTP-Kommandozeile** (wenn FTP-Client nicht verfügbar)
   ```bash
   ftp ftp.deine-domain.de
   # username / passwort eingeben
   cd public_html
   mput C:\ironshield-website\*
   # ...
   ```

### 3. HTTPS aktivieren (wichtig für Tracking!)
1. Im rrhosting-Kontrollpanel zu **SSL/TLS-Zertifikat** gehen
2. **Let's Encrypt** (kostenlos) auswählen und aktivieren
3. Warten, bis Zertifikat installiert ist (ca. 1-5 Min)
4. Nach Installation: Website sollte mit **https://** erreichbar sein

### 4. Testen
- Website öffnen: `https://deine-domain.de` (oder rrhosting-Subdomain)
- **DevTools öffnen** (F12) → **Console** → sollte keine Fehler anzeigen
- Cookie-Banner sollte sichtbar sein
- Links zu Impressum/Datenschutz sollten funktionieren

---

## 🔍 Troubleshooting

| Problem | Lösung |
|---------|--------|
| **404 Fehler** | Sicherstellen, dass alle Dateien im richtigen Ordner hochgeladen sind (public_html oder www) |
| **Cookie-Banner nicht sichtbar** | JavaScript muss aktiviert sein; auf Console-Fehler prüfen (F12) |
| **HTTPS-Fehler** | SSL-Zertifikat im Hosting-Panel aktivieren; ggf. Browser-Cache leeren |
| **Links gehen zu falschen Seiten** | Relative Pfade prüfen (z. B. `href="privacy.html"` nicht `href="/privacy.html"`) |
| **Seite sieht komisch aus** | CSS-Datei nicht geladen? Prüfen, ob `css/styles.css` vorhanden und erreichbar ist |

---

## 📝 Nächste Schritte

- [ ] Google Analytics 4 ID eintragen (GA4) → `js/script.js` bearbeiten
- [ ] Google AdSense einrichten (falls Monetarisierung geplant)
- [ ] Logo hochladen und `index.html` anpassen
- [ ] Datenschutzerklärung vollständig ausfüllen (`privacy.html`)
- [ ] Impressum mit Anschrift/weiteren Details ausfüllen (`impressum.html`)
- [ ] Domain/Subdomain in Bot-Links aktualisieren (Discord OAuth2)

---

**Fragen?** Kontakt: Ironshieldsup@outlook.de
