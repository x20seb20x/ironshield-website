// Einfaches JS für Nav-Toggle und Jahr einsetzen
document.addEventListener('DOMContentLoaded',function(){
  const nav = document.getElementById('siteNav');
  const toggle = document.getElementById('navToggle');
  const yearSpan = document.getElementById('year');
  const emailSpan = document.getElementById('supportEmail');

  if(yearSpan) yearSpan.textContent = new Date().getFullYear();

  toggle && toggle.addEventListener('click',()=>{
    if(nav.style.display === 'block') nav.style.display = '';
    else nav.style.display = 'block';
  });

  // Reveal sections for a nicer flow
  const sections = document.querySelectorAll('.section');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('visible'); });
  },{threshold:0.12});
  sections.forEach(s=>io.observe(s));

  /* Cookie consent management */
  const cookieBanner = document.getElementById('cookieBanner');
  const cookieAccept = document.getElementById('cookieAccept');
  const cookieReject = document.getElementById('cookieReject');
  const cookiePrefs = document.getElementById('cookiePrefs');

  function getConsent(){
    try{ return JSON.parse(localStorage.getItem('ironshield_consent')) || null }catch(e){return null}
  }
  function setConsent(obj){ localStorage.setItem('ironshield_consent', JSON.stringify(obj)); }

  function applyConsent(){
    const c = getConsent();
    if(!cookieBanner) return;
    if(!c){ cookieBanner.setAttribute('aria-hidden','false'); }
    else { cookieBanner.setAttribute('aria-hidden','true'); }
    // If analytics accepted, load analytics
    if(c && c.analytics) loadAnalytics();
    // If ads accepted, loadAds (placeholder)
    if(c && c.ads) loadAds();
  }

  cookieAccept && cookieAccept.addEventListener('click', ()=>{
    setConsent({analytics:true,ads:true});
    applyConsent();
  });
  cookieReject && cookieReject.addEventListener('click', ()=>{
    setConsent({analytics:false,ads:false});
    applyConsent();
  });
  cookiePrefs && cookiePrefs.addEventListener('click', ()=>{
    // For simplicity open privacy page where preferences can be explained
    location.href = 'privacy.html';
  });

  // Placeholder loaders - DO NOT include actual IDs here. Replace with your IDs when ready.
  function loadAnalytics(){
    if(window._iron_analytics_loaded) return;
    window._iron_analytics_loaded = true;
    // Example: load GA4 gtag.js
    // const s = document.createElement('script');
    // s.async = true; s.src = 'https://www.googletagmanager.com/gtag/js?id=G-REPLACE_WITH_ID';
    // document.head.appendChild(s);
    // window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-REPLACE_WITH_ID');
    console.log('Analytics loader placeholder - insert GA4/gtag.js here when you have consent.');
  }

  function loadAds(){
    if(window._iron_ads_loaded) return;
    window._iron_ads_loaded = true;
    // Placeholder for Ads / AdSense scripts to be loaded only after consent
    console.log('Ads loader placeholder - insert AdSense or Ads scripts here when you have consent.');
  }

  // Run consent check on load
  applyConsent();

  // Optional: Replace support email via query param e.g. ?support=mail@beispiel.de
  const params = new URLSearchParams(location.search);
  if(params.has('support') && emailSpan){
    emailSpan.textContent = params.get('support');
  }
});
