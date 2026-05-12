// Zentrale Stelle für Kontaktdaten — hier bitte die echten Werte eintragen.
// Sobald du Telefon/Email setzt, werden tel:- und mailto:-Links überall aktualisiert.

export const site = {
  name: 'Jana Zwinscher',
  tagline: 'Entrümpelung · Transporte · Endreinigung',
  location: 'Mittweida',
  radiusKm: 50,

  // TODO: echte Werte eintragen
  phoneDisplay: '+49 0000 000 000',
  phoneHref: '+4900000000000',          // ohne Leerzeichen, ohne führende 0
  whatsappNumber: '4900000000000',      // E.164 ohne +
  email: 'kontakt@jana-zwinscher.de',

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
