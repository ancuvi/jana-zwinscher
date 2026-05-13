// Zentrale Stelle für Kontaktdaten — hier bitte die echten Werte eintragen.
// Sobald du Telefon/Email setzt, werden tel:- und mailto:-Links überall aktualisiert.

export const site = {
  name: 'Jana Zwinzscher',
  tagline: 'Entrümpelung · Transporte · Endreinigung',
  location: 'Mittweida',
  radiusKm: 50,

  // Kontakt
  phoneDisplay: '0171 6153591',
  phoneHref: '+491716153591',           // E.164 mit + für tel:-Link
  whatsappNumber: '491716153591',       // E.164 ohne + für wa.me/-Link
  email: 'jana_zwinzscher@web.de',

  // Adressen
  officeAddress: 'Steinweg 1, Mittweida',
  hqAddress: 'Lichtenau',
  state: 'Sachsen',

  callbackFrom: '16:00 Uhr',
  serviceRegion: [
    'Mittweida',
    'Frankenberg',
    'Auerswalde',
    'Chemnitz',
    'Hainichen',
    'Burgstädt',
    'Rochlitz',
    'Penig',
    'Lichtenau',
    'Lunzenau',
    'Geringswalde',
    'Hartha',
    'Waldheim',
  ],
} as const;

export const links = {
  tel: `tel:${site.phoneHref}`,
  whatsapp: `https://wa.me/${site.whatsappNumber}`,
  mail: `mailto:${site.email}`,
} as const;
