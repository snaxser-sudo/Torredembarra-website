const SOURCES = {
  santaRosaliaPoster: {
    label: "Ajuntament: Santa Rosalia 2025 poster",
    url: "https://torredembarra.cat/sites/default/files/styles/wide/public/2025-08/santa-rosalia-25-quadrat.jpg?itok=0qfcioVW",
  },
  santaRosalia: {
    label: "Ajuntament: Santa Rosalia",
    url: "https://torredembarra.cat/temes/festes/santa-rosalia",
  },
  banderaTorredembarra: {
    label: "Wikimedia Commons: Bandera de Torredembarra",
    url: "https://commons.wikimedia.org/wiki/File:Bandera_de_Torredembarra.svg",
  },
  escutTorredembarra: {
    label: "Wikimedia Commons: Escut de Torredembarra",
    url: "https://commons.wikimedia.org/wiki/File:Escut_de_Torredembarra.svg",
  },
  festes: {
    label: "Ajuntament: Festes",
    url: "https://www.torredembarra.cat/temes/festes",
  },
  festaQuadre: {
    label: "Ajuntament: Festa del Quadre",
    url: "https://torredembarra.cat/temes/festes/el-quadre-de-santa-rosalia",
  },
  santJoan: {
    label: "Ajuntament: Sant Joan",
    url: "https://www.torredembarra.cat/temes/festes/sant-joan",
  },
  santSebastia: {
    label: "Ajuntament: Sant Sebastià",
    url: "https://torredembarra.cat/temes/festes/sant-sebastia",
  },
  carnaval: {
    label: "Ajuntament: Carnaval",
    url: "https://torredembarra.cat/temes/festes/carnaval",
  },
  nadal: {
    label: "Ajuntament: Nadal",
    url: "https://torredembarra.cat/temes/festes/nadal",
  },
  markets: {
    label: "Ajuntament: Mercats",
    url: "https://www.torredembarra.cat/temes/comerc-i-activitats/mercats",
  },
  commerce: {
    label: "Ajuntament: Comerç i Activitats",
    url: "https://www.torredembarra.cat/temes/comerc-i-activitats",
  },
  commerceDirectory: {
    label: "Comerç Torredembarra: guia comercial",
    url: "https://redescobreix.turismetorredembarra.cat/guia-comercial/",
  },
  commerceRestauracio: {
    label: "Comerç Torredembarra: Restauració",
    url: "https://redescobreix.turismetorredembarra.cat/guia-comercial/llista/sectors/restauracio/",
  },
  commerceAlimentacio: {
    label: "Comerç Torredembarra: Alimentació",
    url: "https://redescobreix.turismetorredembarra.cat/guia-comercial/llista/sectors/alimentacio/",
  },
  commerceModa: {
    label: "Comerç Torredembarra: Moda",
    url: "https://redescobreix.turismetorredembarra.cat/guia-comercial/llista/sectors/moda/",
  },
  commerceBellesa: {
    label: "Comerç Torredembarra: Bellesa",
    url: "https://redescobreix.turismetorredembarra.cat/guia-comercial/llista/sectors/bellesa/",
  },
  commerceRegal: {
    label: "Comerç Torredembarra: Regal i decoració",
    url: "https://redescobreix.turismetorredembarra.cat/guia-comercial/llista/sectors/regal-decoracio/",
  },
  listingCafeForner: {
    label: "Comerç Torredembarra: El Cafè del Forner",
    url: "https://redescobreix.turismetorredembarra.cat/guia-comercial/llista/el-cafe-del-forner/",
  },
  listingSalSucre: {
    label: "Comerç Torredembarra: Sal i Sucre",
    url: "https://redescobreix.turismetorredembarra.cat/guia-comercial/llista/sal-i-sucre/",
  },
  listingBarPaco: {
    label: "Comerç Torredembarra: Bar Cafeteria Paco",
    url: "https://redescobreix.turismetorredembarra.cat/guia-comercial/llista/bar-cafeteria-paco/",
  },
  listingOxidRestaurant: {
    label: "Comerç Torredembarra: OXID Restaurant Bar",
    url: "https://redescobreix.turismetorredembarra.cat/guia-comercial/llista/oxid-restaurant-bar/",
  },
  listingGourmetJiennense: {
    label: "Comerç Torredembarra: Gourmet Jiennense",
    url: "https://redescobreix.turismetorredembarra.cat/guia-comercial/llista/gourmet-jiennense/",
  },
  listingAlimentacionJR: {
    label: "Comerç Torredembarra: Alimentación JR",
    url: "https://redescobreix.turismetorredembarra.cat/guia-comercial/llista/alimentacion-jr/",
  },
  listingCalcatsPijuan: {
    label: "Comerç Torredembarra: Calçats Pijuan",
    url: "https://redescobreix.turismetorredembarra.cat/guia-comercial/llista/calcats-pijuan-2/",
  },
  listingLaBoheme: {
    label: "Comerç Torredembarra: La Boheme",
    url: "https://redescobreix.turismetorredembarra.cat/guia-comercial/llista/la-boheme/",
  },
  listingNexusDecora: {
    label: "Comerç Torredembarra: NexusDecora",
    url: "https://redescobreix.turismetorredembarra.cat/guia-comercial/llista/nexusdecora/",
  },
  listingPetals: {
    label: "Comerç Torredembarra: Floristeria Pètals",
    url: "https://redescobreix.turismetorredembarra.cat/guia-comercial/llista/petals/",
  },
  listingPupiFlors: {
    label: "Comerç Torredembarra: Pupi Flors",
    url: "https://redescobreix.turismetorredembarra.cat/guia-comercial/llista/pupi-flors-2/",
  },
  listingAbucViatges: {
    label: "Comerç Torredembarra: Abuc Viatges",
    url: "https://redescobreix.turismetorredembarra.cat/guia-comercial/llista/abuc-viatges/",
  },
  cityHome: {
    label: "Ajuntament de Torredembarra",
    url: "https://www.torredembarra.cat/",
  },
  agenda: {
    label: "Ajuntament: Agenda",
    url: "https://torredembarra.cat/lajuntament/comunicacio/agenda",
  },
  tourismFaro: {
    label: "Turisme Torredembarra: Faro",
    url: "https://esp.turismetorredembarra.cat/el-faro-gid-10",
  },
  tourismCastle: {
    label: "Turisme Torredembarra: Castillo",
    url: "https://esp.turismetorredembarra.cat/el-castillo-gid-16",
  },
  tourismMuntanyans: {
    label: "Turisme Torredembarra: Els Muntanyans",
    url: "https://esp.turismetorredembarra.cat/playa-del-espacio-natural-de-els-muntanyans-gid-17",
  },
  tourismTower: {
    label: "Turisme Torredembarra: Torre de la Vila",
    url: "https://esp.turismetorredembarra.cat/la-torre-de-la-vila-gid-9",
  },
  tourismVilla: {
    label: "Turisme Torredembarra: Vil-la del Moro",
    url: "https://esp.turismetorredembarra.cat/la-villa-del-moro-gid-8",
  },
  tourismBofill: {
    label: "Turisme Torredembarra: Can Bofill",
    url: "https://esp.turismetorredembarra.cat/can-bofill-gid-11",
  },
  tourismSantPere: {
    label: "Turisme Torredembarra: Iglesia Parroquial de San Pere",
    url: "https://esp.turismetorredembarra.cat/iglesia-parroquial-de-san-pere-gid-13",
  },
  tourismPereBadia: {
    label: "Turisme Torredembarra: Residencia Pere Badia",
    url: "https://esp.turismetorredembarra.cat/residencia-pere-badia-gid-12",
  },
  tourismBaixMar: {
    label: "Turisme Torredembarra: Baix a Mar",
    url: "https://eng.turismetorredembarra.cat/baix-a-mar-gid-71",
  },
  tourismPaella: {
    label: "Turisme Torredembarra: La Paella",
    url: "https://esp.turismetorredembarra.cat/la-paella-gid-1",
  },
  redescobreixBofill: {
    label: "Redescobreix Torredembarra: Cal Bofill",
    url: "https://redescobreix.turismetorredembarra.cat/producte/cal-bofill/",
  },
  portTorredembarra: {
    label: "Port Torredembarra",
    url: "https://port-torredembarra.es/",
  },
  municipalMuntanyans: {
    label: "Ajuntament: Espai d'Interès Natural dels Muntanyans",
    url: "https://torredembarra.cat/temes/sostenibilitat/espai-dinteres-natural-dels-muntanyans",
  },
  calBofill: {
    label: "Ajuntament: Cal Bofill",
    url: "https://torredembarra.cat/temes/sostenibilitat/cal-bofill",
  },
  senderBlau: {
    label: "Ajuntament: Sender Blau Cal Bofill, Baix a Mar i Els Muntanyans",
    url: "https://torredembarra.cat/senderblau",
  },
  beaches: {
    label: "Ajuntament: Les nostres platges",
    url: "https://torredembarra.cat/temes/platges/les-nostres-platges",
  },
  santPereMap: {
    label: "OpenStreetMap: Sant Pere Apòstol",
    url: "https://www.openstreetmap.org/?mlat=41.145033&mlon=1.395678#map=18/41.145033/1.395678",
  },
  pereBadiaMap: {
    label: "OpenStreetMap: Fundació Pere Badia",
    url: "https://www.openstreetmap.org/?mlat=41.144110&mlon=1.401167#map=18/41.144110/1.401167",
  },
  paellaMap: {
    label: "OpenStreetMap: Platja de la Paella",
    url: "https://www.openstreetmap.org/?mlat=41.139600&mlon=1.404500#map=17/41.139600/1.404500",
  },
  portMap: {
    label: "OpenStreetMap: Port de Torredembarra",
    url: "https://www.openstreetmap.org/?mlat=41.135320&mlon=1.402246#map=17/41.135320/1.402246",
  },
  memorialDemocratic: {
    label: "Ajuntament: Memorial Democràtic",
    url: "https://www.torredembarra.cat/temes/cultura/memorial-democratic",
  },
  wikiTorredembarra: {
    label: "Viquipedia: Torredembarra",
    url: "https://ca.wikipedia.org/wiki/Torredembarra",
  },
  wikidataCoordinates: {
    label: "Wikidata: Torredembarra",
    url: "https://www.wikidata.org/wiki/Q995637",
  },
  osm: {
    label: "OpenStreetMap: Torredembarra",
    url: "https://www.openstreetmap.org/relation/346628",
  },
  viulaTorre: {
    label: "Ajuntament: Viu La Torre app",
    url: "https://torredembarra.cat/lajuntament/comunicacio/noticies/viu-la-torre-la-nova-app-de-torredembarra",
  },
  googlePlay: {
    label: "Google Play: Viu La Torre",
    url: "https://play.google.com/store/apps/details?id=app.wetown.torredembarra&hl=es",
  },
  tdb: {
    label: "TDB Actualitat",
    url: "https://www.tdbactualitat.cat/",
  },
  torredembarrin: {
    label: "Telegram: @torredembarrin",
    url: "https://t.me/torredembarrin",
  },
  unescoCastells: {
    label: "UNESCO: Human towers",
    url: "https://ich.unesco.org/en/RL/human-towers-00364",
  },
};

const COPY = {
  ru: {
    nav: { places: "Места", commerce: "Магазины", map: "Карта", culture: "Праздники", events: "Афиша", torredembarrin: "Уголок Торредембаррина", sources: "Ссылки" },
    hero: {
      kicker: "Festa Major, Costa Daurada",
      title: "Торредембарра",
      copy: "Город с Santa Rosalia, рынком по вторникам, морскими кварталами, дюнами и старым центром.",
      primary: "Открыть карту",
      secondary: "Магазины и кофе",
      visualLabel: "Иллюстрация маяка и флаг Торредембарры",
      posterAlt: "Праздничная иллюстрация маяка Торредембарры",
      flagAlt: "Флаг Торредембарры",
      flagLink: "флаг",
    },
    strip: {
      attractionsTitle: "Достопримечательности",
      attractionsText: "Маяк, Старый Центр, Castell dels Icart, Torre de la Vila, Els Muntanyans, Римская Вилла.",
      flagTitle: "Флаг",
      flagText: "Белый замок на синем поле рядом с морской линией.",
      saintTitle: "Santa Rosalia",
      saintText: "Святая города. Festa Major в её честь проходит 22 августа - 7 сентября.",
    },
    places: {
      title: "Город ярче открытки",
      copy: "Маяк важен, но рядом есть старый центр, Baix a Mar, дюны, римская вилла, башни и следы войны.",
      source: "ссылка",
    },
    commerce: {
      title: "Магазины, рынок, кофе",
      copy: "Торредембарра не только пляж. За покупками и паузой идите в центр, на Antoni Roig, в Baix a Mar и на рынок по вторникам.",
    },
    map: {
      title: "Маршрут по городу",
      copy: "От маяка к старому центру, Baix a Mar, пляжам и Muntanyans: выбирайте точку и двигайтесь дальше.",
      open: "ссылка",
      fallback: "Карта не загрузилась. Обновите страницу или откройте список ссылок ниже.",
    },
    culture: {
      title: "Праздники идут круглый год",
      copy: "Santa Rosalia и El Quadre только вершина. Есть Sant Joan, Carnaval, Sant Sebastià, Nadal, Reis и местный seguici.",
    },
    timeline: {
      title: "Слои, которые видно пешком",
      copy: "Римская вилла, средневековая Torre de la Vila, ренессансный замок, школы Roig, демократическая память и маяк XXI века.",
    },
    events: {
      title: "Что сейчас происходит",
      copy: "Ближайшие события, городские новости и Viu La Torre в одном месте.",
      cityLink: "Афиша города",
      newsLink: "TDB Actualitat",
      appLink: "Viu La Torre",
      liveOk: "Афиша обновлена",
      liveFallback: "Показаны ближайшие события",
      source: "ссылка",
    },
    torredembarrin: {
      title: "Уголок Торредембаррина",
      copy: "Текст и фото из публичных публикаций Telegram-канала @torredembarrin.",
      count: "материалов",
      channel: "Открыть канал",
      original: "Оригинал в Telegram",
      photoAlt: "Фото из публикации",
      empty: "Публикации пока не загружены.",
    },
    sources: {
      title: "Полезные ссылки",
      copy: "Официальные страницы города, туризм, афиша, новости и приложение Viu La Torre.",
      open: "открыть",
    },
    footer: {
      copy: "Торредембарра: город, где праздник, рынок, море и старые стены живут рядом.",
      top: "Наверх",
    },
  },
  en: {
    nav: { places: "Places", commerce: "Shops", map: "Map", culture: "Festivals", events: "Agenda", torredembarrin: "Torredembarrin corner", sources: "Links" },
    hero: {
      kicker: "Festa Major, Costa Daurada",
      title: "Torredembarra",
      copy: "A town of Santa Rosalia, Tuesday markets, sea quarters, dunes and an old center.",
      primary: "Open map",
      secondary: "Shops and coffee",
      visualLabel: "Illustration of the lighthouse and Torredembarra flag",
      posterAlt: "Festive illustration of the Torredembarra lighthouse",
      flagAlt: "Torredembarra flag",
      flagLink: "flag",
    },
    strip: {
      attractionsTitle: "Highlights",
      attractionsText: "Lighthouse, Old Center, Castell dels Icart, Torre de la Vila, Els Muntanyans, Roman Villa.",
      flagTitle: "Flag",
      flagText: "The white castle on blue beside the sea line.",
      saintTitle: "Santa Rosalia",
      saintText: "The town saint. Festa Major in her honor runs August 22 - September 7.",
    },
    places: {
      title: "More than a postcard",
      copy: "The lighthouse matters, but so do the old center, Baix a Mar, dunes, Roman ruins, towers and war traces.",
      source: "link",
    },
    commerce: {
      title: "Shops, market, coffee",
      copy: "Torredembarra is not only beach. Shop and pause in the center, on Antoni Roig, in Baix a Mar and at the Tuesday market.",
    },
    map: {
      title: "Town route",
      copy: "From the lighthouse to the old center, Baix a Mar, beaches and Muntanyans: choose a point and keep going.",
      open: "link",
      fallback: "The map did not load. Reload the page or use the links below.",
    },
    culture: {
      title: "Festivals all year",
      copy: "Santa Rosalia and El Quadre are only the peak. Sant Joan, Carnival, Sant Sebastia, Christmas, Kings and the local seguici fill the year.",
    },
    timeline: {
      title: "Layers you can walk",
      copy: "Roman villa, medieval tower, Renaissance castle, Roig schools, democratic memory and the 21st-century lighthouse.",
    },
    events: {
      title: "What is on now",
      copy: "Nearby events, town news and Viu La Torre in one place.",
      cityLink: "Town agenda",
      newsLink: "TDB Actualitat",
      appLink: "Viu La Torre",
      liveOk: "Agenda updated",
      liveFallback: "Nearby events shown",
      source: "link",
    },
    torredembarrin: {
      title: "Torredembarrin corner",
      copy: "Text and photos from public Russian-language posts by @torredembarrin.",
      count: "posts",
      channel: "Open channel",
      original: "Original on Telegram",
      photoAlt: "Photo from post",
      empty: "Posts are not loaded yet.",
    },
    sources: {
      title: "Useful links",
      copy: "Town pages, tourism, agenda, news and the Viu La Torre app.",
      open: "open",
    },
    footer: {
      copy: "Torredembarra: festival, market, sea and old stone in one walkable town.",
      top: "Back to top",
    },
  },
  es: {
    nav: { places: "Lugares", commerce: "Comercio", map: "Mapa", culture: "Fiestas", events: "Agenda", torredembarrin: "Rincón de Torredembarrin", sources: "Enlaces" },
    hero: {
      kicker: "Festa Major, Costa Daurada",
      title: "Torredembarra",
      copy: "Una ciudad con Santa Rosalia, mercado de martes, barrios marineros, dunas y centro antiguo.",
      primary: "Abrir mapa",
      secondary: "Tiendas y café",
      visualLabel: "Ilustración del faro y la bandera de Torredembarra",
      posterAlt: "Ilustración festiva del faro de Torredembarra",
      flagAlt: "Bandera de Torredembarra",
      flagLink: "bandera",
    },
    strip: {
      attractionsTitle: "Imprescindibles",
      attractionsText: "Faro, Casco Antiguo, Castell dels Icart, Torre de la Vila, Els Muntanyans, Villa Romana.",
      flagTitle: "Bandera",
      flagText: "El castillo blanco sobre azul junto a la línea del mar.",
      saintTitle: "Santa Rosalia",
      saintText: "La santa de la ciudad. La Festa Major en su honor va del 22 de agosto al 7 de septiembre.",
    },
    places: {
      title: "Más que una postal",
      copy: "El faro importa, pero también el centro antiguo, Baix a Mar, dunas, villa romana, torres y huellas de guerra.",
      source: "enlace",
    },
    commerce: {
      title: "Tiendas, mercado, café",
      copy: "Torredembarra no es solo playa. Compra y para en el centro, Antoni Roig, Baix a Mar y el mercado de los martes.",
    },
    map: {
      title: "Ruta por la ciudad",
      copy: "Del faro al centro antiguo, Baix a Mar, playas y Muntanyans: elige un punto y sigue caminando.",
      open: "enlace",
      fallback: "El mapa no se ha cargado. Recarga la página o usa los enlaces inferiores.",
    },
    culture: {
      title: "Fiestas todo el año",
      copy: "Santa Rosalia y El Quadre son la cima. Sant Joan, Carnaval, Sant Sebastia, Nadal, Reis y el seguici local llenan el año.",
    },
    timeline: {
      title: "Capas que se caminan",
      copy: "Villa romana, torre medieval, castillo renacentista, escuelas Roig, memoria democratica y faro del siglo XXI.",
    },
    events: {
      title: "Qué pasa ahora",
      copy: "Próximos eventos, noticias locales y Viu La Torre en un solo lugar.",
      cityLink: "Agenda municipal",
      newsLink: "TDB Actualitat",
      appLink: "Viu La Torre",
      liveOk: "Agenda actualizada",
      liveFallback: "Próximos eventos visibles",
      source: "enlace",
    },
    torredembarrin: {
      title: "Rincón de Torredembarrin",
      copy: "Texto y fotos de publicaciones públicas en ruso de @torredembarrin.",
      count: "publicaciones",
      channel: "Abrir canal",
      original: "Original en Telegram",
      photoAlt: "Foto de la publicación",
      empty: "Las publicaciones aún no se han cargado.",
    },
    sources: {
      title: "Enlaces útiles",
      copy: "Páginas municipales, turismo, agenda, noticias y la app Viu La Torre.",
      open: "abrir",
    },
    footer: {
      copy: "Torredembarra: fiesta, mercado, mar y piedra antigua en una ciudad caminable.",
      top: "Arriba",
    },
  },
  ca: {
    nav: { places: "Llocs", commerce: "Comerç", map: "Mapa", culture: "Festes", events: "Agenda", torredembarrin: "Racó de Torredembarrin", sources: "Enllaços" },
    hero: {
      kicker: "Festa Major, Costa Daurada",
      title: "Torredembarra",
      copy: "Una vila amb Santa Rosalia, mercat de dimarts, barris mariners, dunes i nucli antic.",
      primary: "Obrir mapa",
      secondary: "Botigues i cafè",
      visualLabel: "Il·lustració del far i la bandera de Torredembarra",
      posterAlt: "Il·lustració festiva del far de Torredembarra",
      flagAlt: "Bandera de Torredembarra",
      flagLink: "bandera",
    },
    strip: {
      attractionsTitle: "Imprescindibles",
      attractionsText: "Far, Nucli Antic, Castell dels Icart, Torre de la Vila, Els Muntanyans, Vil-la Romana.",
      flagTitle: "Bandera",
      flagText: "El castell blanc sobre blau vora la línia del mar.",
      saintTitle: "Santa Rosalia",
      saintText: "La santa de la vila. La Festa Major en honor seu va del 22 d'agost al 7 de setembre.",
    },
    places: {
      title: "Més que una postal",
      copy: "El far importa, però també el nucli antic, Baix a Mar, dunes, vil-la romana, torres i traces de guerra.",
      source: "enllaç",
    },
    commerce: {
      title: "Botigues, mercat, cafè",
      copy: "Torredembarra no és només platja. Compra i fes pausa al centre, Antoni Roig, Baix a Mar i el mercat dels dimarts.",
    },
    map: {
      title: "Ruta per la vila",
      copy: "Del far al nucli antic, Baix a Mar, platges i Muntanyans: tria un punt i continua caminant.",
      open: "enllaç",
      fallback: "El mapa no s'ha carregat. Recarrega la pàgina o usa els enllaços inferiors.",
    },
    culture: {
      title: "Festes tot l'any",
      copy: "Santa Rosalia i El Quadre són el cim. Sant Joan, Carnaval, Sant Sebastia, Nadal, Reis i el seguici local omplen l'any.",
    },
    timeline: {
      title: "Capes que es caminen",
      copy: "Vil-la romana, torre medieval, castell renaixentista, escoles Roig, memoria democratica i far del segle XXI.",
    },
    events: {
      title: "Què passa ara",
      copy: "Propers actes, notícies locals i Viu La Torre en un sol lloc.",
      cityLink: "Agenda municipal",
      newsLink: "TDB Actualitat",
      appLink: "Viu La Torre",
      liveOk: "Agenda actualitzada",
      liveFallback: "Propers actes visibles",
      source: "enllaç",
    },
    torredembarrin: {
      title: "Racó de Torredembarrin",
      copy: "Text i fotos de publicacions públiques en rus de @torredembarrin.",
      count: "publicacions",
      channel: "Obrir canal",
      original: "Original a Telegram",
      photoAlt: "Foto de la publicació",
      empty: "Les publicacions encara no s'han carregat.",
    },
    sources: {
      title: "Enllaços útils",
      copy: "Pàgines municipals, turisme, agenda, notícies i l'app Viu La Torre.",
      open: "obrir",
    },
    footer: {
      copy: "Torredembarra: festa, mercat, mar i pedra antiga en una vila caminable.",
      top: "Amunt",
    },
  },
};

const PLACES = [
  {
    id: "faro",
    source: "tourismFaro",
    image: "https://esp.turismetorredembarra.cat/common/contenidos/fotos/original/torredembarra-129.jpg",
    coords: [41.1322, 1.394883],
    i18n: {
      ru: { title: "Последний маяк Испании", desc: "Его включили в план морских сигналов 1985-1989, построили в 1999 году на Punta de la Galera.", fact: "С 1 января 2000 года это последний маяк, построенный в Испании в XX веке." },
      en: { title: "Lighthouse", desc: "The white tower on Punta de la Galera. The quickest way to read the coast.", fact: "In service since January 1, 2000, it anchors the south edge of the town map." },
      es: { title: "El último faro de España", desc: "Fue incluido en el plan de señales marítimas 1985-1989 y construido en 1999 en la Punta de la Galera.", fact: "Desde el 1 de enero de 2000 es el último faro construido en España en el siglo XX." },
      ca: { title: "L'últim far d'Espanya", desc: "El van incloure en el pla de senyals marítims 1985-1989 i el van construir el 1999 a la Punta de la Galera.", fact: "Des de l'1 de gener de 2000 és l'últim far construït a Espanya al segle XX." },
    },
  },
  {
    id: "castle",
    source: "tourismCastle",
    image: "https://esp.turismetorredembarra.cat/common/contenidos/fotos/original/torredembarra-115.jpg",
    coords: [41.146097, 1.396036],
    i18n: {
      ru: { title: "Castell dels Icart", desc: "Главная каменная масса старого центра. Не декорация, а рабочая память города.", fact: "Ренессансный гражданский памятник рядом с площадью Castell." },
      en: { title: "Castell dels Icart", desc: "The main stone mass of the old center. Not scenery, but working memory.", fact: "A Renaissance civic landmark beside Placa del Castell." },
      es: { title: "Castell dels Icart", desc: "La gran masa de piedra del centro antiguo. No es decorado, es memoria en uso.", fact: "Hito civil renacentista junto a la plaça del Castell." },
      ca: { title: "Castell dels Icart", desc: "La gran massa de pedra del nucli antic. No és decorat, és memòria en ús.", fact: "Fita civil renaixentista al costat de la plaça del Castell." },
    },
  },
  {
    id: "tower",
    source: "tourismTower",
    image: "https://esp.turismetorredembarra.cat/common/contenidos/fotos/original/torredembarra-195.jpg",
    coords: [41.145103, 1.395138],
    i18n: {
      ru: { title: "Torre de la Vila", desc: "Старая вертикаль у Sant Pere. Маленькая, упрямая, очень городская.", fact: "Одна из самых ранних сохранившихся точек старой Торредембарры." },
      en: { title: "Torre de la Vila", desc: "The old vertical by Sant Pere. Small, stubborn and deeply local.", fact: "One of the earliest surviving points of old Torredembarra." },
      es: { title: "Torre de la Vila", desc: "La vertical antigua junto a Sant Pere. Pequeña, terca y muy de aquí.", fact: "Una de las piezas más tempranas conservadas en la Torredembarra antigua." },
      ca: { title: "Torre de la Vila", desc: "La vertical antiga vora Sant Pere. Petita, tossuda i molt d'aquí.", fact: "Una de les peces més primerenques conservades a la Torredembarra antiga." },
    },
  },
  {
    id: "sant-pere",
    source: "tourismSantPere",
    image: "https://esp.turismetorredembarra.cat/common/contenidos/fotos/original/torredembarra-150.jpg",
    coords: [41.145033, 1.395678],
    i18n: {
      ru: { title: "Sant Pere Apòstol", desc: "Церковь, вокруг которой старый центр сразу собирается в одно место.", fact: "Стоит рядом с Torre de la Vila и площадью Castell." },
      en: { title: "Sant Pere Apostol", desc: "The church that gathers the old center into one clear place.", fact: "It stands beside Torre de la Vila and Placa del Castell." },
      es: { title: "Sant Pere Apostol", desc: "La iglesia que concentra el centro antiguo en un lugar claro.", fact: "Está junto a la Torre de la Vila y la plaça del Castell." },
      ca: { title: "Sant Pere Apostol", desc: "L'església que concentra el nucli antic en un lloc clar.", fact: "És al costat de la Torre de la Vila i la plaça del Castell." },
    },
  },
  {
    id: "villa",
    source: "tourismVilla",
    image: "https://esp.turismetorredembarra.cat/common/contenidos/fotos/original/torredembarra-176.jpg",
    coords: [41.152393, 1.411803],
    i18n: {
      ru: { title: "Vil-la romana del Moro", desc: "Римский слой не в витрине, а рядом с сегодняшними улицами.", fact: "Здесь читаются термы, хозяйственная зона и жилая часть виллы." },
      en: { title: "Roman Villa of El Moro", desc: "The Roman layer is not in a display case, but next to today's streets.", fact: "Baths, service space and domestic rooms can be read here." },
      es: { title: "Vil-la romana del Moro", desc: "La capa romana no está en una vitrina, sino junto a calles de hoy.", fact: "Aquí se leen termas, zona de servicio y parte residencial." },
      ca: { title: "Vil-la romana del Moro", desc: "La capa romana no és en una vitrina, sinó vora carrers d'avui.", fact: "S'hi llegeixen termes, zona de servei i part residencial." },
    },
  },
  {
    id: "muntanyans",
    source: "municipalMuntanyans",
    image: "https://esp.turismetorredembarra.cat/common/contenidos/fotos/original/torredembarra-182.jpg",
    coords: [41.149167, 1.4253],
    i18n: {
      ru: { title: "Els Muntanyans", desc: "Дюны, лагуны и редкий участок берега, где город умеет отступить.", fact: "Здесь берег раскрывается деревянными настилами, песком и тихими лагунами." },
      en: { title: "Els Muntanyans", desc: "Dunes, lagoons and the rare stretch where the town knows how to step back.", fact: "Here the coast opens into boardwalks, sand and quiet lagoons." },
      es: { title: "Els Muntanyans", desc: "Dunas, lagunas y el tramo raro donde la ciudad sabe retirarse.", fact: "Aquí la costa se abre en pasarelas, arena y lagunas tranquilas." },
      ca: { title: "Els Muntanyans", desc: "Dunes, llacunes i el tram rar on la vila sap retirar-se.", fact: "Aquí la costa s'obre en passeres, sorra i llacunes tranquil-les." },
    },
  },
  {
    id: "pere-badia",
    source: "tourismPereBadia",
    image: "https://esp.turismetorredembarra.cat/common/contenidos/fotos/original/torredembarra-190.jpg",
    coords: [41.14411, 1.401167],
    i18n: {
      ru: { title: "Fundacio Pere Badia", desc: "Клуатр и след городского меценатства. Тихое место после шумной улицы.", fact: "Внутри чувствуется другая скорость: тень, камень и спокойный двор." },
      en: { title: "Pere Badia Foundation", desc: "A cloister and a trace of civic patronage. A quiet stop after the street.", fact: "Inside, the pace changes: shade, stone and a calm courtyard." },
      es: { title: "Fundacio Pere Badia", desc: "Claustro y memoria de mecenazgo local. Una pausa tranquila tras la calle.", fact: "Dentro cambia el ritmo: sombra, piedra y un patio tranquilo." },
      ca: { title: "Fundacio Pere Badia", desc: "Claustre i memòria de mecenatge local. Una pausa tranquil-la després del carrer.", fact: "A dins canvia el ritme: ombra, pedra i un pati tranquil." },
    },
  },
  {
    id: "bofill",
    source: "redescobreixBofill",
    image: "https://redescobreix.turismetorredembarra.cat/web/wp-content/uploads/2020/06/bofill_4.jpg",
    coords: [41.14529, 1.415359],
    i18n: {
      ru: { title: "Can Bofill", desc: "Морской дом у Baix a Mar. Хорошая точка, чтобы связать пляж и Muntanyans.", fact: "Сегодня это городская экологическая точка, связанная с природным пространством." },
      en: { title: "Can Bofill", desc: "A seaside house in Baix a Mar. A good bridge between beach and Muntanyans.", fact: "Today it is tied to local environmental work around the natural area." },
      es: { title: "Can Bofill", desc: "Casa marinera en Baix a Mar. Une bien playa y Muntanyans.", fact: "Hoy se vincula al trabajo ambiental local del espacio natural." },
      ca: { title: "Can Bofill", desc: "Casa marinera a Baix a Mar. Uneix bé platja i Muntanyans.", fact: "Avui es vincula al treball ambiental local de l'espai natural." },
    },
  },
  {
    id: "baix-mar",
    source: "tourismBaixMar",
    image: "https://eng.turismetorredembarra.cat/common/contenidos/fotos/original/torredembarra-1118.jpg",
    coords: [41.14388, 1.412251],
    i18n: {
      ru: { title: "Baix a Mar", desc: "Морской квартал, где город перестает быть картинкой и становится прогулкой.", fact: "Сюда логично идти за кафе, набережной и морским ритмом." },
      en: { title: "Baix a Mar", desc: "The seafront quarter where the town stops being a picture and becomes a walk.", fact: "Come here for cafes, promenade and seaside rhythm." },
      es: { title: "Baix a Mar", desc: "El barrio marinero donde la ciudad deja de ser foto y se vuelve paseo.", fact: "Aquí encajan cafés, paseo y ritmo de mar." },
      ca: { title: "Baix a Mar", desc: "El barri mariner on la vila deixa de ser foto i es torna passeig.", fact: "Aquí encaixen cafès, passeig i ritme de mar." },
    },
  },
  {
    id: "paella",
    source: "tourismPaella",
    image: "https://esp.turismetorredembarra.cat/common/contenidos/fotos/original/torredembarra-1039.jpg",
    coords: [41.1396, 1.4045],
    i18n: {
      ru: { title: "Platja de la Paella", desc: "Главный городской пляж для простого маршрута: центр, море, кофе, обратно пешком.", fact: "Пляж легко связывает центр, воду и короткую прогулку назад." },
      en: { title: "Platja de la Paella", desc: "The main urban beach for a simple loop: center, sea, coffee, walk back.", fact: "The beach easily connects the center, the water and a short walk back." },
      es: { title: "Platja de la Paella", desc: "La playa urbana para una ruta simple: centro, mar, café y vuelta andando.", fact: "La playa une con facilidad el centro, el agua y una vuelta corta." },
      ca: { title: "Platja de la Paella", desc: "La platja urbana per a una ruta simple: centre, mar, cafè i tornada a peu.", fact: "La platja uneix fàcilment el centre, l'aigua i una tornada curta." },
    },
  },
  {
    id: "port",
    source: "portTorredembarra",
    image: "https://port-torredembarra.es/wp-content/uploads/2024/09/Port-torredembarra-home.jpg",
    coords: [41.13532, 1.402246],
    i18n: {
      ru: { title: "Port de Torredembarra", desc: "Нижняя морская точка маршрута: лодки, рестораны, вечерний воздух.", fact: "Хорошее начало для вечерней петли вдоль воды." },
      en: { title: "Port de Torredembarra", desc: "The lower sea point of the walk: boats, restaurants, evening air.", fact: "A good start for an evening loop along the water." },
      es: { title: "Port de Torredembarra", desc: "El punto marino bajo de la ruta: barcos, restaurantes, aire de tarde.", fact: "Buen inicio para una vuelta de tarde junto al agua." },
      ca: { title: "Port de Torredembarra", desc: "El punt mariner baix de la ruta: barques, restaurants, aire de tarda.", fact: "Bon inici per a una volta de tarda vora l'aigua." },
    },
  },
  {
    id: "memorial",
    source: "memorialDemocratic",
    image: "",
    coords: [41.144434, 1.397084],
    i18n: {
      ru: { title: "Memorial Democràtic", desc: "Официальная страница города о демократической памяти и жертвах 1934-1980 годов.", fact: "Страница связывает городскую память с репрессиями, изгнанием и депортацией." },
      en: { title: "Memorial Democràtic", desc: "The town's official page for democratic memory and victims from 1934-1980.", fact: "The page ties local memory to repression, exile and deportation." },
      es: { title: "Memorial Democràtic", desc: "Página municipal sobre memoria democrática y víctimas de 1934-1980.", fact: "La página vincula la memoria local con represión, exilio y deportación." },
      ca: { title: "Memorial Democràtic", desc: "Pàgina municipal sobre memòria democràtica i víctimes de 1934-1980.", fact: "La pàgina vincula la memòria local amb repressió, exili i deportació." },
    },
  },
];

const ROUTE_ART = {
  faro: "assets/route-art/faro.png",
  castle: "assets/route-art/castle.png",
  tower: "assets/route-art/tower.png",
  "sant-pere": "assets/route-art/sant-pere.png",
  villa: "assets/route-art/villa.png",
  muntanyans: "assets/route-art/muntanyans.png",
  "pere-badia": "assets/route-art/pere-badia.png",
  bofill: "assets/route-art/bofill.png",
  "baix-mar": "assets/route-art/baix-mar.png",
  paella: "assets/route-art/paella.png",
  port: "assets/route-art/port.png",
  memorial: "assets/route-art/bunkers.png",
};

const COMMERCE = [
  {
    source: "commerceDirectory",
    i18n: {
      ru: { title: "Comerç a la Torre", text: "Официальная городская директория собирает кафе, рестораны, моду, подарки, здоровье, услуги и детские места." },
      en: { title: "Comerç a la Torre", text: "The official town directory gathers cafes, restaurants, fashion, gifts, health, services and family places." },
      es: { title: "Comerç a la Torre", text: "El directorio municipal reúne cafés, restaurantes, moda, regalos, salud, servicios y lugares familiares." },
      ca: { title: "Comerç a la Torre", text: "El directori municipal reuneix cafès, restaurants, moda, regals, salut, serveis i espais familiars." },
    },
    meta: {
      ru: "официальный каталог",
      en: "official directory",
      es: "directorio oficial",
      ca: "directori oficial",
    },
  },
  {
    source: "commerceRestauracio",
    i18n: {
      ru: { title: "Restauració", text: "Самая большая ветка каталога: бары, рестораны, кафе и места для короткой остановки между морем и центром." },
      en: { title: "Restauració", text: "The directory's largest branch: bars, restaurants, cafes and quick stops between sea and center." },
      es: { title: "Restauració", text: "La rama más grande del directorio: bares, restaurantes, cafés y paradas rápidas entre mar y centro." },
      ca: { title: "Restauració", text: "La branca més gran del directori: bars, restaurants, cafès i parades ràpides entre mar i centre." },
    },
    meta: {
      ru: "122 карточки",
      en: "122 listings",
      es: "122 fichas",
      ca: "122 fitxes",
    },
  },
  {
    source: "commerceAlimentacio",
    i18n: {
      ru: { title: "Alimentació", text: "Еда не заканчивается рынком: продукты, фрукты, локальные лавки и небольшие повседневные покупки." },
      en: { title: "Alimentació", text: "Food does not end at the market: groceries, fruit, local shops and small daily errands." },
      es: { title: "Alimentació", text: "La comida no termina en el mercado: alimentación, fruta, comercios locales y compras del día." },
      ca: { title: "Alimentació", text: "El menjar no acaba al mercat: alimentació, fruita, comerços locals i compres del dia." },
    },
    meta: {
      ru: "31 карточка",
      en: "31 listings",
      es: "31 fichas",
      ca: "31 fitxes",
    },
  },
  {
    source: "commerceModa",
    i18n: {
      ru: { title: "Moda", text: "На Antoni Roig и рядом хватает обуви, одежды и маленьких витрин, ради которых стоит свернуть с пляжного маршрута." },
      en: { title: "Moda", text: "Antoni Roig and nearby streets carry shoes, clothes and small windows worth leaving the beach route for." },
      es: { title: "Moda", text: "Antoni Roig y calles cercanas suman calzado, ropa y escaparates pequeños que merecen el desvío." },
      ca: { title: "Moda", text: "Antoni Roig i carrers propers sumen calçat, roba i aparadors petits que mereixen el desviament." },
    },
    meta: {
      ru: "28 карточек",
      en: "28 listings",
      es: "28 fichas",
      ca: "28 fitxes",
    },
  },
  {
    source: "commerceBellesa",
    i18n: {
      ru: { title: "Bellesa", text: "Парикмахерские, барбершопы и салоны показывают город как место повседневной жизни, а не только отпуска." },
      en: { title: "Bellesa", text: "Hair salons, barber shops and beauty rooms show the town as daily life, not only holiday time." },
      es: { title: "Bellesa", text: "Peluquerías, barberías y centros de estética muestran la ciudad como vida diaria, no solo vacaciones." },
      ca: { title: "Bellesa", text: "Perruqueries, barberies i centres d'estètica mostren la vila com a vida diària, no només vacances." },
    },
    meta: {
      ru: "21 карточка",
      en: "21 listings",
      es: "21 fichas",
      ca: "21 fitxes",
    },
  },
  {
    source: "commerceRegal",
    i18n: {
      ru: { title: "Regal / decoració", text: "Подарки, декор и цветы добавляют к маршруту маленькие адреса, где город становится личнее." },
      en: { title: "Regal / decoració", text: "Gifts, decor and flowers add small addresses where the town becomes more personal." },
      es: { title: "Regal / decoració", text: "Regalos, decoración y flores añaden direcciones pequeñas donde la ciudad se vuelve más personal." },
      ca: { title: "Regal / decoració", text: "Regals, decoració i flors afegeixen adreces petites on la vila es torna més personal." },
    },
    meta: {
      ru: "11 карточек",
      en: "11 listings",
      es: "11 fichas",
      ca: "11 fitxes",
    },
  },
  {
    source: "markets",
    i18n: {
      ru: { title: "Рынок по вторникам", text: "Самая понятная городская привычка: прийти утром, купить еду и заодно почувствовать район." },
      en: { title: "Tuesday market", text: "The easiest town habit to join: arrive in the morning, buy food and feel the neighborhood." },
      es: { title: "Mercado de los martes", text: "La costumbre local más fácil de adoptar: venir por la mañana, comprar comida y sentir el barrio." },
      ca: { title: "Mercat dels dimarts", text: "El costum local més fàcil d'adoptar: venir al matí, comprar menjar i sentir el barri." },
    },
    meta: {
      ru: "каждый вторник",
      en: "every Tuesday",
      es: "cada martes",
      ca: "cada dimarts",
    },
  },
  {
    source: "listingCafeForner",
    i18n: {
      ru: { title: "El Cafè del Forner", text: "Кофейная остановка прямо на Antoni Roig, хорошая для паузы между витринами и старым центром." },
      en: { title: "El Cafè del Forner", text: "A coffee stop on Antoni Roig itself, useful between shop windows and the old center." },
      es: { title: "El Cafè del Forner", text: "Una parada de café en Antoni Roig, práctica entre escaparates y centro antiguo." },
      ca: { title: "El Cafè del Forner", text: "Una parada de cafè a Antoni Roig, pràctica entre aparadors i nucli antic." },
    },
    meta: {
      ru: "C. Antoni Roig 37",
      en: "C. Antoni Roig 37",
      es: "C. Antoni Roig 37",
      ca: "C. Antoni Roig 37",
    },
  },
  {
    source: "listingSalSucre",
    i18n: {
      ru: { title: "Sal i Sucre", text: "Ещё один адрес на Antoni Roig для сладкой или кофейной паузы в центре." },
      en: { title: "Sal i Sucre", text: "Another Antoni Roig address for a sweet stop or coffee in the center." },
      es: { title: "Sal i Sucre", text: "Otra dirección de Antoni Roig para una pausa dulce o un café en el centro." },
      ca: { title: "Sal i Sucre", text: "Una altra adreça d'Antoni Roig per a una pausa dolça o un cafè al centre." },
    },
    meta: {
      ru: "Carrer Antoni Roig 56",
      en: "Carrer Antoni Roig 56",
      es: "Carrer Antoni Roig 56",
      ca: "Carrer Antoni Roig 56",
    },
  },
  {
    source: "listingBarPaco",
    i18n: {
      ru: { title: "Bar Cafeteria Paco", text: "Кафе-бар у Pere Badia добавляет к маршруту не только Antoni Roig, но и соседние улицы." },
      en: { title: "Bar Cafeteria Paco", text: "A cafe-bar by Pere Badia that pulls the route beyond Antoni Roig into nearby streets." },
      es: { title: "Bar Cafeteria Paco", text: "Café-bar en Pere Badia que lleva la ruta más allá de Antoni Roig." },
      ca: { title: "Bar Cafeteria Paco", text: "Cafè-bar a Pere Badia que porta la ruta més enllà d'Antoni Roig." },
    },
    meta: {
      ru: "C. Pere Badia 20",
      en: "C. Pere Badia 20",
      es: "C. Pere Badia 20",
      ca: "C. Pere Badia 20",
    },
  },
  {
    source: "listingOxidRestaurant",
    i18n: {
      ru: { title: "OXID Restaurant Bar", text: "Морская ресторанная точка на Passeig de Colom, если маршрут уходит к воде." },
      en: { title: "OXID Restaurant Bar", text: "A seafront restaurant-bar on Passeig de Colom when the route drops toward the water." },
      es: { title: "OXID Restaurant Bar", text: "Restaurante-bar en Passeig de Colom cuando la ruta baja hacia el agua." },
      ca: { title: "OXID Restaurant Bar", text: "Restaurant-bar al Passeig de Colom quan la ruta baixa cap a l'aigua." },
    },
    meta: {
      ru: "Passeig de Colom 43",
      en: "Passeig de Colom 43",
      es: "Passeig de Colom 43",
      ca: "Passeig de Colom 43",
    },
  },
  {
    source: "listingGourmetJiennense",
    i18n: {
      ru: { title: "Gourmet Jiennense", text: "Продуктовая лавка в центре: хороший контрапункт рынку, когда нужен конкретный адрес." },
      en: { title: "Gourmet Jiennense", text: "A central food shop, a useful counterpoint to the market when you need a fixed address." },
      es: { title: "Gourmet Jiennense", text: "Tienda de alimentación en el centro, buen contrapunto al mercado cuando necesitas dirección fija." },
      ca: { title: "Gourmet Jiennense", text: "Botiga d'alimentació al centre, bon contrapunt al mercat quan cal una adreça fixa." },
    },
    meta: {
      ru: "C. Antoni Roig 19",
      en: "C. Antoni Roig 19",
      es: "C. Antoni Roig 19",
      ca: "C. Antoni Roig 19",
    },
  },
  {
    source: "listingAlimentacionJR",
    i18n: {
      ru: { title: "Alimentación JR", text: "Фрукты и овощи в каталоге города, полезно для обычных покупок вне туристического режима." },
      en: { title: "Alimentación JR", text: "Fruit and vegetables in the town directory, useful for everyday shopping outside tourist mode." },
      es: { title: "Alimentación JR", text: "Fruta y verdura en el directorio local, útil para compras diarias fuera del modo turista." },
      ca: { title: "Alimentación JR", text: "Fruita i verdura al directori local, útil per a compres diàries fora del mode turista." },
    },
    meta: {
      ru: "Avinguda Montserrat",
      en: "Avinguda Montserrat",
      es: "Avinguda Montserrat",
      ca: "Avinguda Montserrat",
    },
  },
  {
    source: "listingCalcatsPijuan",
    i18n: {
      ru: { title: "Calçats Pijuan", text: "Обувь на Antoni Roig, чтобы в ленте были не только еда и кофе, но и настоящий городской шопинг." },
      en: { title: "Calçats Pijuan", text: "Shoes on Antoni Roig, so the feed shows real town shopping beyond food and coffee." },
      es: { title: "Calçats Pijuan", text: "Calzado en Antoni Roig, para que la lista muestre comercio real más allá de comida y café." },
      ca: { title: "Calçats Pijuan", text: "Calçat a Antoni Roig, perquè la llista mostri comerç real més enllà de menjar i cafè." },
    },
    meta: {
      ru: "Antoni Roig 53",
      en: "Antoni Roig 53",
      es: "Antoni Roig 53",
      ca: "Antoni Roig 53",
    },
  },
  {
    source: "listingLaBoheme",
    i18n: {
      ru: { title: "La Boheme", text: "Маленькая модная витрина на Antoni Roig, ещё один повод идти через центр пешком." },
      en: { title: "La Boheme", text: "A small fashion window on Antoni Roig, another reason to cross the center on foot." },
      es: { title: "La Boheme", text: "Pequeño escaparate de moda en Antoni Roig, otro motivo para cruzar el centro a pie." },
      ca: { title: "La Boheme", text: "Petit aparador de moda a Antoni Roig, un altre motiu per creuar el centre a peu." },
    },
    meta: {
      ru: "Antoni Roig 49",
      en: "Antoni Roig 49",
      es: "Antoni Roig 49",
      ca: "Antoni Roig 49",
    },
  },
  {
    source: "listingNexusDecora",
    i18n: {
      ru: { title: "NexusDecora", text: "Подарки и декор на той же торговой оси, когда нужен сувенир без пляжной банальности." },
      en: { title: "NexusDecora", text: "Gifts and decor on the same shopping spine when you want a souvenir without beach cliche." },
      es: { title: "NexusDecora", text: "Regalos y decoración en el mismo eje comercial para un recuerdo sin tópico playero." },
      ca: { title: "NexusDecora", text: "Regals i decoració al mateix eix comercial per a un record sense tòpic de platja." },
    },
    meta: {
      ru: "Carrer d'Antoni Roig 23",
      en: "Carrer d'Antoni Roig 23",
      es: "Carrer d'Antoni Roig 23",
      ca: "Carrer d'Antoni Roig 23",
    },
  },
  {
    source: "listingPetals",
    i18n: {
      ru: { title: "Floristeria Pètals", text: "Цветочный адрес показывает более тихую сторону местного каталога." },
      en: { title: "Floristeria Pètals", text: "A flower shop that shows the quieter side of the local directory." },
      es: { title: "Floristeria Pètals", text: "Una floristería que muestra el lado más tranquilo del directorio local." },
      ca: { title: "Floristeria Pètals", text: "Una floristeria que mostra el costat més tranquil del directori local." },
    },
    meta: {
      ru: "C. Lleida 3",
      en: "C. Lleida 3",
      es: "C. Lleida 3",
      ca: "C. Lleida 3",
    },
  },
  {
    source: "listingPupiFlors",
    i18n: {
      ru: { title: "Pupi Flors", text: "Ещё одна цветочная точка, уже на Joan Güell: городская лента расширяется за один проспект." },
      en: { title: "Pupi Flors", text: "Another flower stop, this time on Joan Güell: the feed reaches beyond one avenue." },
      es: { title: "Pupi Flors", text: "Otra parada floral, ahora en Joan Güell: la lista sale de una sola avenida." },
      ca: { title: "Pupi Flors", text: "Una altra parada floral, ara a Joan Güell: la llista surt d'una sola avinguda." },
    },
    meta: {
      ru: "Carrer de Joan Güell 13",
      en: "Carrer de Joan Güell 13",
      es: "Carrer de Joan Güell 13",
      ca: "Carrer de Joan Güell 13",
    },
  },
  {
    source: "listingAbucViatges",
    i18n: {
      ru: { title: "Abuc Viatges", text: "Туристическое агентство в центре напоминает, что commerce тут не только про покупки, но и услуги." },
      en: { title: "Abuc Viatges", text: "A central travel agency that shows commerce here includes services, not only shopping." },
      es: { title: "Abuc Viatges", text: "Agencia de viajes en el centro: el comercio local también son servicios, no solo compras." },
      ca: { title: "Abuc Viatges", text: "Agència de viatges al centre: el comerç local també són serveis, no només compres." },
    },
    meta: {
      ru: "C. Antoni Roig 40",
      en: "C. Antoni Roig 40",
      es: "C. Antoni Roig 40",
      ca: "C. Antoni Roig 40",
    },
  },
  {
    source: "viulaTorre",
    i18n: {
      ru: { title: "Viu La Torre", text: "Приложение удобно держать под рукой: новости, афиша, уведомления и карта в одном городском канале." },
      en: { title: "Viu La Torre", text: "A useful app to keep nearby: news, agenda, alerts and map in one town channel." },
      es: { title: "Viu La Torre", text: "Una app útil a mano: noticias, agenda, avisos y mapa en un canal local." },
      ca: { title: "Viu La Torre", text: "Una app útil a mà: notícies, agenda, avisos i mapa en un canal local." },
    },
  },
];

const CULTURE = [
  {
    source: "santaRosalia",
    i18n: {
      ru: { title: "Santa Rosalia", text: "Главная festa major в конце лета: городские фигуры, музыка, огонь, церковь, площадь и тот самый розовый плакатный жест." },
      en: { title: "Santa Rosalia", text: "The late-summer festa major: figures, music, fire, church, square and that strong pink poster gesture." },
      es: { title: "Santa Rosalia", text: "La festa major de final de verano: figuras, música, fuego, iglesia, plaza y ese gesto rosa de cartel." },
      ca: { title: "Santa Rosalia", text: "La festa major de final d'estiu: figures, música, foc, església, plaça i aquell gest rosa de cartell." },
    },
  },
  {
    source: "festaQuadre",
    i18n: {
      ru: { title: "El Quadre de Santa Rosalia", text: "Летний узел перед большой Festa Major: религиозная память, улица, музыка и короткая городская концентрация." },
      en: { title: "El Quadre de Santa Rosalia", text: "The summer knot before the big festa: religious memory, street, music and a tight town rhythm." },
      es: { title: "El Quadre de Santa Rosalia", text: "El nudo de verano antes de la gran fiesta: memoria religiosa, calle, música y pulso local." },
      ca: { title: "El Quadre de Santa Rosalia", text: "El nus d'estiu abans de la festa gran: memòria religiosa, carrer, música i pols local." },
    },
  },
  {
    source: "santJoan",
    i18n: {
      ru: { title: "Sant Joan", text: "Летняя ночь с огнем и площадью: один из тех праздников, где берег и старый центр звучат вместе." },
      en: { title: "Sant Joan", text: "A summer night of fire and square: one of the moments where coast and old center sound together." },
      es: { title: "Sant Joan", text: "Noche de verano con fuego y plaza: uno de esos momentos donde costa y casco antiguo suenan juntos." },
      ca: { title: "Sant Joan", text: "Nit d'estiu amb foc i plaça: un d'aquells moments on costa i nucli antic sonen junts." },
    },
  },
  {
    source: "carnaval",
    i18n: {
      ru: { title: "Carnaval", text: "Зимний шум: костюмы, улица и La Mascarada, когда город разрешает себе быть совсем другим." },
      en: { title: "Carnival", text: "Winter noise: costumes, street and La Mascarada, when the town allows itself another face." },
      es: { title: "Carnaval", text: "Ruido de invierno: disfraces, calle y La Mascarada, cuando la ciudad se permite otra cara." },
      ca: { title: "Carnaval", text: "Soroll d'hivern: disfresses, carrer i La Mascarada, quan la vila es permet una altra cara." },
    },
  },
  {
    source: "santSebastia",
    i18n: {
      ru: { title: "Sant Sebastià", text: "Зимняя festa major: спокойнее летних дней, но важная для городского календаря." },
      en: { title: "Sant Sebastia", text: "The winter festa major: quieter than summer, but essential to the town calendar." },
      es: { title: "Sant Sebastia", text: "La festa mayor de invierno: más tranquila que el verano, pero clave en el calendario local." },
      ca: { title: "Sant Sebastia", text: "La festa major d'hivern: més tranquil-la que l'estiu, però clau al calendari local." },
    },
  },
  {
    source: "nadal",
    i18n: {
      ru: { title: "Nadal, Reis, Home dels Nassos", text: "Декабрь и январь не пустые: огни, детские маршруты, Reis и городской юмор последнего дня года." },
      en: { title: "Christmas, Kings, Home dels Nassos", text: "December and January stay busy: lights, children's routes, Kings and the town joke of the last day." },
      es: { title: "Navidad, Reyes, Home dels Nassos", text: "Diciembre y enero no se vacían: luces, rutas infantiles, Reyes y humor local de fin de año." },
      ca: { title: "Nadal, Reis, Home dels Nassos", text: "Desembre i gener no es buiden: llums, rutes infantils, Reis i humor local de final d'any." },
    },
  },
  {
    source: "unescoCastells",
    i18n: {
      ru: { title: "Castells и seguici", text: "Человеческие башни, gegants, музыка и фигуры праздника дают сайту вертикаль и движение." },
      en: { title: "Castells and seguici", text: "Human towers, giants, music and festive figures give the page its vertical movement." },
      es: { title: "Castells y seguici", text: "Torres humanas, gigantes, música y figuras festivas dan verticalidad y movimiento." },
      ca: { title: "Castells i seguici", text: "Torres humanes, gegants, música i figures festives donen verticalitat i moviment." },
    },
  },
  {
    source: "markets",
    i18n: {
      ru: { title: "Mercat setmanal", text: "Не праздник, но традиция с расписанием: вторник собирает город без сцены и афиш." },
      en: { title: "Weekly market", text: "Not a festival, but a timed tradition: Tuesday gathers the town without a stage." },
      es: { title: "Mercado semanal", text: "No es fiesta, pero sí tradición con horario: el martes reúne a la ciudad sin escenario." },
      ca: { title: "Mercat setmanal", text: "No és festa, però sí tradició amb horari: el dimarts reuneix la vila sense escenari." },
    },
  },
];

const TIMELINE = [
  {
    source: "tourismVilla",
    date: { ru: "II до н. э. - II н. э.", en: "2nd BCE - 2nd CE", es: "II a. C. - II d. C.", ca: "II aC - II dC" },
    text: { ru: "Римская вилла напоминает, что город начался задолго до летних пляжей.", en: "The Roman villa shows the town began long before summer beaches.", es: "La villa romana recuerda que la ciudad empezó antes de las playas de verano.", ca: "La vil-la romana recorda que la vila va començar abans de les platges d'estiu." },
    image: {
      src: "assets/timeline-art/roman-villa-mosaic.jpg",
      alt: { ru: "Римская вилла в стиле античной мозаики", en: "Roman villa in an ancient mosaic style", es: "Villa romana en estilo de mosaico antiguo", ca: "Vil-la romana en estil de mosaic antic" },
    },
  },
  {
    source: "tourismTower",
    date: { ru: "XII - XIII век", en: "12th - 13th century", es: "Siglos XII - XIII", ca: "Segles XII - XIII" },
    text: { ru: "Torre de la Vila держит средневековую вертикаль рядом с церковью.", en: "Torre de la Vila keeps the medieval vertical beside the church.", es: "La Torre de la Vila mantiene la vertical medieval junto a la iglesia.", ca: "La Torre de la Vila manté la vertical medieval vora l'església." },
    image: {
      src: "assets/timeline-art/torre-vila-romanesque.jpg",
      alt: { ru: "Torre de la Vila в стиле каталонской романской миниатюры", en: "Torre de la Vila in a Catalan Romanesque miniature style", es: "Torre de la Vila en estilo de miniatura románica catalana", ca: "Torre de la Vila en estil de miniatura romànica catalana" },
    },
  },
  {
    source: "tourismCastle",
    date: { ru: "Ренессанс", en: "Renaissance", es: "Renacimiento", ca: "Renaixement" },
    text: { ru: "Castell dels Icart превращает центр в гражданский ренессансный знак.", en: "Castell dels Icart turns the center into a civic Renaissance sign.", es: "Castell dels Icart convierte el centro en señal civil renacentista.", ca: "Castell dels Icart converteix el centre en senyal civil renaixentista." },
    image: {
      src: "assets/timeline-art/castell-icart-engraving.jpg",
      alt: { ru: "Castell dels Icart в стиле ренессансной архитектурной гравюры", en: "Castell dels Icart in a Renaissance architectural engraving style", es: "Castell dels Icart en estilo de grabado arquitectonico renacentista", ca: "Castell dels Icart en estil de gravat arquitectonic renaixentista" },
    },
  },
  {
    source: "wikiTorredembarra",
    date: { ru: "XIX - XX век", en: "19th - 20th century", es: "Siglos XIX - XX", ca: "Segles XIX - XX" },
    text: { ru: "Antoni Roig и Pere Badia оставляют в городе школы, улицы и гражданскую память.", en: "Antoni Roig and Pere Badia leave schools, streets and civic memory in town.", es: "Antoni Roig y Pere Badia dejan escuelas, calles y memoria cívica.", ca: "Antoni Roig i Pere Badia deixen escoles, carrers i memòria cívica." },
    image: {
      src: "assets/timeline-art/roig-badia-schools-modernisme.jpg",
      alt: { ru: "Школы Antoni Roig и Pere Badia в стиле каталонского модернизма", en: "Antoni Roig and Pere Badia schools in a Catalan modernisme style", es: "Escuelas Antoni Roig y Pere Badia en estilo modernista catalan", ca: "Escoles Antoni Roig i Pere Badia en estil modernista catala" },
    },
  },
  {
    source: "memorialDemocratic",
    date: { ru: "1934 - 1980", en: "1934 - 1980", es: "1934 - 1980", ca: "1934 - 1980" },
    text: { ru: "Memorial Democràtic возвращает в маршрут память о репрессиях, изгнании и депортации.", en: "Memorial Democràtic brings repression, exile and deportation into the walking route.", es: "Memorial Democràtic incorpora a la ruta la memoria de la represión, el exilio y la deportación.", ca: "Memorial Democràtic incorpora a la ruta la memòria de la repressió, l'exili i la deportació." },
    image: {
      src: "assets/timeline-art/memorial-democratic-screenprint.jpg",
      alt: { ru: "Memorial Democràtic в стиле каталонского демократического плаката", en: "Memorial Democratic in a Catalan democratic poster style", es: "Memorial Democratic en estilo de cartel democratico catalan", ca: "Memorial Democratic en estil de cartell democratic catala" },
    },
  },
  {
    source: "tourismFaro",
    date: { ru: "2000", en: "2000", es: "2000", ca: "2000" },
    text: { ru: "Маяк делает новый век видимым в силуэте Торредембарры.", en: "The lighthouse makes the new century visible in Torredembarra's silhouette.", es: "El faro hace visible el nuevo siglo en la silueta de Torredembarra.", ca: "El far fa visible el nou segle en la silueta de Torredembarra." },
    image: {
      src: "assets/timeline-art/lighthouse-civic-poster.jpg",
      alt: { ru: "Маяк Торредембарры в стиле современного гражданского плаката", en: "Torredembarra lighthouse in a contemporary civic poster style", es: "Faro de Torredembarra en estilo de cartel civico contemporaneo", ca: "Far de Torredembarra en estil de cartell civic contemporani" },
    },
  },
];

const SEED_EVENTS = [
  { source: "markets", date: { ru: "Каждый вторник", en: "Every Tuesday", es: "Cada martes", ca: "Cada dimarts" }, i18n: { ru: { title: "Mercat setmanal", text: "Рынок по вторникам остается самым простым способом войти в местный ритм." }, en: { title: "Weekly market", text: "The Tuesday market is the easiest way to step into local rhythm." }, es: { title: "Mercado semanal", text: "El mercado de los martes es la forma más fácil de entrar en el ritmo local." }, ca: { title: "Mercat setmanal", text: "El mercat dels dimarts és la manera més fàcil d'entrar al ritme local." } } },
  { source: "agenda", date: "26.06.2026, 20:30", i18n: { ru: { title: "10a Mostra de Cinema LGTBIQ+", text: "Показ в Espai Cultural Sala del Mar." }, en: { title: "10th LGTBIQ+ Film Showcase", text: "Screening at Espai Cultural Sala del Mar." }, es: { title: "10a Mostra de Cinema LGTBIQ+", text: "Proyección en Espai Cultural Sala del Mar." }, ca: { title: "10a Mostra de Cinema LGTBIQ+", text: "Projecció a l'Espai Cultural Sala del Mar." } } },
  { source: "agenda", date: "26.06.2026, 20:00", i18n: { ru: { title: "Balls country", text: "Танцы country в Pati del Castell." }, en: { title: "Country dances", text: "Country dancing at Pati del Castell." }, es: { title: "Balls country", text: "Baile country en el Pati del Castell." }, ca: { title: "Balls country", text: "Ball country al Pati del Castell." } } },
  { source: "tdb", date: "28.06.2026", i18n: { ru: { title: "2x2 Mixt Basquet 3x3 d'Estiu", text: "Летний баскетбольный турнир Torredembarra B.C." }, en: { title: "2x2 Mixed Summer 3x3 Basketball", text: "Summer basketball by Torredembarra B.C." }, es: { title: "2x2 Mixt de Basquet 3x3 d'Estiu", text: "Torneo de verano de Torredembarra B.C." }, ca: { title: "2x2 Mixt de Basquet 3x3 d'Estiu", text: "Torneig d'estiu de Torredembarra B.C." } } },
];

const SOURCE_CARDS = [
  { source: "santaRosaliaPoster", topic: { ru: "Плакат Santa Rosalia 25", en: "Santa Rosalia 25 poster", es: "Cartel Santa Rosalia 25", ca: "Cartell Santa Rosalia 25" } },
  { source: "banderaTorredembarra", topic: { ru: "Флаг Торредембарры", en: "Torredembarra flag", es: "Bandera de Torredembarra", ca: "Bandera de Torredembarra" } },
  { source: "escutTorredembarra", topic: { ru: "Герб Торредембарры", en: "Torredembarra coat of arms", es: "Escudo de Torredembarra", ca: "Escut de Torredembarra" } },
  { source: "festes", topic: { ru: "Главные праздники города", en: "Main town festivals", es: "Fiestas principales", ca: "Festes principals" } },
  { source: "festaQuadre", topic: { ru: "Festa del Quadre", en: "Festa del Quadre", es: "Festa del Quadre", ca: "Festa del Quadre" } },
  { source: "santJoan", topic: { ru: "Sant Joan", en: "Sant Joan", es: "Sant Joan", ca: "Sant Joan" } },
  { source: "markets", topic: { ru: "Рынки и еженедельный рынок", en: "Markets and weekly market", es: "Mercados y mercado semanal", ca: "Mercats i mercat setmanal" } },
  { source: "commerce", topic: { ru: "Коммерция и локальные активности", en: "Commerce and local activities", es: "Comercio y actividades", ca: "Comerç i activitats" } },
  { source: "commerceDirectory", topic: { ru: "Городской коммерческий каталог", en: "Town commerce directory", es: "Directorio comercial local", ca: "Directori comercial local" } },
  { source: "wikidataCoordinates", topic: { ru: "Точки на карте", en: "Map places", es: "Lugares del mapa", ca: "Llocs del mapa" } },
  { source: "osm", topic: { ru: "OpenStreetMap", en: "OpenStreetMap", es: "OpenStreetMap", ca: "OpenStreetMap" } },
  { source: "unescoCastells", topic: { ru: "Castells", en: "Castells", es: "Castells", ca: "Castells" } },
  { source: "viulaTorre", topic: { ru: "Viu La Torre", en: "Viu La Torre", es: "Viu La Torre", ca: "Viu La Torre" } },
  { source: "tdb", topic: { ru: "Локальные новости", en: "Local news", es: "Noticias locales", ca: "Notícies locals" } },
  { source: "torredembarrin", topic: { ru: "Уголок Торредембаррина", en: "Torredembarrin corner", es: "Rincón de Torredembarrin", ca: "Racó de Torredembarrin" } },
];

let currentLang = localStorage.getItem("tdb-lang") || "ru";
let map;
let selectedPlaceId = "faro";
const markers = new Map();
const TORREDEMBARRIN_ARTICLES = globalThis.TORREDEMBARRIN_ARTICLES || [];
const TORREDEMBARRIN_TRANSLATIONS = globalThis.TORREDEMBARRIN_TRANSLATIONS || {};

function translate(path) {
  return path.split(".").reduce((value, key) => (value ? value[key] : undefined), COPY[currentLang]) || path;
}

function local(obj) {
  return obj[currentLang] || obj.ru || obj.en;
}

function make(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function sourceAnchor(sourceKey, label) {
  const source = SOURCES[sourceKey];
  const anchor = make("a", "source-link", label || translate("places.source"));
  anchor.href = source.url;
  anchor.target = "_blank";
  anchor.rel = "noreferrer";
  anchor.title = source.label;
  return anchor;
}

function routeArt(place, title) {
  const figure = make("figure", "route-art");
  const img = document.createElement("img");
  img.src = ROUTE_ART[place.id] || ROUTE_ART.faro;
  img.alt = "";
  img.loading = "lazy";
  img.decoding = "async";
  figure.setAttribute("role", "img");
  figure.setAttribute("aria-label", title);
  figure.append(img);
  return figure;
}

function timelineArt(item) {
  const figure = make("figure", "timeline-art");
  const img = document.createElement("img");
  img.src = item.image.src;
  img.alt = local(item.image.alt);
  img.loading = "lazy";
  img.decoding = "async";
  img.width = 724;
  img.height = 724;
  figure.append(img);
  return figure;
}

function applyTranslations() {
  document.documentElement.lang = currentLang;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = translate(node.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((node) => {
    node.alt = translate(node.dataset.i18nAlt);
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((node) => {
    node.setAttribute("aria-label", translate(node.dataset.i18nAriaLabel));
  });
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === currentLang);
  });
}

function renderPlaces() {
  const grid = document.getElementById("placesGrid");
  grid.replaceChildren();

  PLACES.forEach((place, index) => {
    const text = local(place.i18n);
    const card = make("article", "place-card");
    const media = make("div", place.image ? "place-media" : "place-media no-photo");
    if (place.image) {
      const img = document.createElement("img");
      img.src = place.image;
      img.alt = text.title;
      img.loading = "lazy";
      media.append(img);
    } else {
      media.textContent = String(index + 1).padStart(2, "0");
    }

    const content = make("div", "place-card-content");
    content.append(make("h3", "", text.title), make("p", "", text.desc), make("p", "", text.fact), sourceAnchor(place.source));
    card.append(media, content);
    grid.append(card);
  });
}

function renderCommerce() {
  const grid = document.getElementById("commerceGrid");
  grid.replaceChildren();
  COMMERCE.forEach((item, index) => {
    const text = local(item.i18n);
    const meta = item.meta ? local(item.meta) : "";
    const card = make("article", "commerce-card");
    card.style.setProperty("--tilt", `${index % 2 ? 1.2 : -0.8}deg`);
    const children = [make("span", "commerce-index", String(index + 1).padStart(2, "0")), make("h3", "", text.title)];
    if (meta) children.push(make("p", "commerce-meta", meta));
    children.push(make("p", "", text.text), sourceAnchor(item.source, translate("sources.open")));
    card.append(...children);
    grid.append(card);
  });
}

function renderMapList() {
  const list = document.getElementById("mapList");
  list.replaceChildren();
  PLACES.forEach((place, index) => {
    const button = make("button", "", `${index + 1}. ${local(place.i18n).title}`);
    button.type = "button";
    button.classList.toggle("is-active", place.id === selectedPlaceId);
    button.addEventListener("click", () => selectPlace(place.id, true));
    list.append(button);
  });
}

function renderMapDetail() {
  const place = PLACES.find((item) => item.id === selectedPlaceId) || PLACES[0];
  const text = local(place.i18n);
  const detail = document.getElementById("mapDetail");
  detail.replaceChildren(
    routeArt(place, text.title),
    make("h3", "", text.title),
    make("p", "", text.fact),
    make("code", "coord-chip", `${place.coords[0].toFixed(6)}, ${place.coords[1].toFixed(6)}`),
    sourceAnchor(place.source, translate("map.open"))
  );
}

function selectPlace(placeId, fly) {
  selectedPlaceId = placeId;
  renderMapList();
  renderMapDetail();
  const place = PLACES.find((item) => item.id === selectedPlaceId);
  if (fly && map && place) {
    map.flyTo(place.coords, 15, { duration: 0.7 });
  }
}

function initMap() {
  const mapNode = document.getElementById("cityMap");
  if (!window.L || !mapNode) {
    mapNode.textContent = translate("map.fallback");
    return;
  }

  map = L.map(mapNode, {
    scrollWheelZoom: false,
    zoomControl: true,
  }).setView([41.1448, 1.4072], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  PLACES.forEach((place, index) => {
    const marker = L.marker(place.coords, {
      icon: L.divIcon({
        className: "",
        html: `<span class="map-marker">${index + 1}</span>`,
        iconSize: [36, 36],
        iconAnchor: [18, 18],
      }),
      title: local(place.i18n).title,
    }).addTo(map);
    marker.on("click", () => selectPlace(place.id, false));
    markers.set(place.id, marker);
  });
}

function renderCulture() {
  const grid = document.getElementById("cultureGrid");
  grid.replaceChildren();
  CULTURE.forEach((item) => {
    const text = local(item.i18n);
    const card = make("article", "culture-card");
    card.append(make("h3", "", text.title), make("p", "", text.text), sourceAnchor(item.source));
    grid.append(card);
  });
}

function renderTimeline() {
  const list = document.getElementById("timelineList");
  list.replaceChildren();
  TIMELINE.forEach((item) => {
    const row = make("li");
    row.append(make("time", "", local(item.date)));
    row.append(timelineArt(item));
    const content = make("div");
    content.append(make("p", "", local(item.text)), sourceAnchor(item.source));
    row.append(content);
    list.append(row);
  });
}

function renderEvents(events) {
  const grid = document.getElementById("eventsGrid");
  grid.replaceChildren();
  events.forEach((item) => {
    const text = item.i18n ? local(item.i18n) : item;
    const card = make("article", "event-card");
    const date = typeof item.date === "object" ? local(item.date) : item.date || "";
    card.append(make("div", "event-date", date), make("h3", "", text.title), make("p", "", text.text || ""));
    if (SOURCES[item.source]) {
      card.append(sourceAnchor(item.source, translate("events.source")));
    }
    grid.append(card);
  });
}

function formatArticleDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat(currentLang, { day: "numeric", month: "long", year: "numeric" }).format(date);
}

function articleText(article) {
  return currentLang === "ru" ? article.text : TORREDEMBARRIN_TRANSLATIONS[article.id]?.[currentLang] || article.text;
}

function articleTitle(article) {
  const firstLine = articleText(article).split("\n").find((line) => line.trim()) || `#${article.id}`;
  return firstLine.length > 96 ? `${firstLine.slice(0, 93).trim()}...` : firstLine;
}

function articleParagraphs(article) {
  const chunks = articleText(article).split(/\n{2,}/).map((item) => item.trim()).filter(Boolean);
  if (chunks.length === 1) {
    return chunks[0].length > 96 ? chunks : [];
  }
  return chunks[0].length > 96 ? chunks : chunks.slice(1);
}

function renderArticleImages(article) {
  const images = article.images || [];
  if (!images.length) return null;
  const gallery = make("div", `torredembarrin-media${images.length === 1 ? " is-single" : ""}`);
  images.forEach((src, index) => {
    const frame = make("figure", "torredembarrin-photo");
    const img = document.createElement("img");
    img.src = src;
    img.alt = `${translate("torredembarrin.photoAlt")} #${article.id}.${index + 1}`;
    img.loading = "lazy";
    img.decoding = "async";
    frame.append(img);
    gallery.append(frame);
  });
  return gallery;
}

function renderTorredembarrin() {
  const feed = document.getElementById("torredembarrinFeed");
  const count = document.getElementById("torredembarrinCount");
  if (!feed) return;

  feed.replaceChildren();
  if (count) count.textContent = String(TORREDEMBARRIN_ARTICLES.length);

  if (!TORREDEMBARRIN_ARTICLES.length) {
    feed.append(make("p", "torredembarrin-empty", translate("torredembarrin.empty")));
    return;
  }

  TORREDEMBARRIN_ARTICLES.slice().reverse().forEach((article) => {
    const card = make("article", "torredembarrin-card");
    const meta = make("div", "torredembarrin-meta");
    const time = make("time", "", formatArticleDate(article.datetime));
    time.dateTime = article.datetime;
    meta.append(time, make("span", "", `#${article.id}`));

    const body = make("div", "torredembarrin-body");
    articleParagraphs(article).forEach((text) => body.append(make("p", "", text)));

    const original = make("a", "source-link", translate("torredembarrin.original"));
    original.href = article.url;
    original.target = "_blank";
    original.rel = "noreferrer";

    card.append(meta, make("h3", "", articleTitle(article)));
    const images = renderArticleImages(article);
    if (images) card.append(images);
    if (body.childNodes.length) card.append(body);
    card.append(original);
    feed.append(card);
  });
}

function renderSources() {
  const grid = document.getElementById("sourcesGrid");
  grid.replaceChildren();
  SOURCE_CARDS.forEach((card) => {
    const source = SOURCES[card.source];
    const node = make("article", "source-card");
    node.append(make("h3", "", local(card.topic)), make("p", "", source.label), sourceAnchor(card.source, translate("sources.open")));
    grid.append(node);
  });
}

function translateLiveTitleToRu(title) {
  const replacements = [
    ["Mercat", "Рынок"],
    ["Cinema", "Кино"],
    ["Mostra", "Показ"],
    ["Dansa", "Танцы"],
    ["Balls", "Танцы"],
    ["Bàsquet", "Баскетбол"],
    ["Basquet", "Баскетбол"],
    ["Festa", "Праздник"],
    ["Concert", "Концерт"],
    ["Exposició", "Выставка"],
    ["Torredembarra", "Торредембарра"],
  ];
  return replacements.reduce((value, pair) => value.replaceAll(pair[0], pair[1]), title);
}

async function tryLoadLiveEvents() {
  const status = document.getElementById("feedStatus");
  status.textContent = translate("events.liveFallback");
  const candidates = [
    { url: "https://www.tdbactualitat.cat/feed/", source: "tdb" },
    { url: "https://torredembarra.cat/lajuntament/comunicacio/agenda?format=feed&type=rss", source: "agenda" },
  ];

  for (const candidate of candidates) {
    try {
      const response = await fetch(candidate.url, { mode: "cors" });
      if (!response.ok) continue;
      const text = await response.text();
      const doc = new DOMParser().parseFromString(text, "text/xml");
      const items = [...doc.querySelectorAll("item")].slice(0, 4);
      const events = items.map((item) => {
        const title = item.querySelector("title")?.textContent?.trim() || "";
        const date = item.querySelector("pubDate")?.textContent?.slice(0, 16) || "";
        return {
          source: candidate.source,
          date,
          title: currentLang === "ru" ? translateLiveTitleToRu(title) : title,
          text: title,
        };
      }).filter((item) => item.title);
      if (events.length) {
        renderEvents(events);
        status.textContent = translate("events.liveOk");
        return;
      }
    } catch (error) {
      status.textContent = translate("events.liveFallback");
    }
  }
  renderEvents(SEED_EVENTS);
}

function rerender() {
  applyTranslations();
  renderPlaces();
  renderCommerce();
  renderMapList();
  renderMapDetail();
  renderCulture();
  renderTimeline();
  renderTorredembarrin();
  renderSources();
  renderEvents(SEED_EVENTS);
  tryLoadLiveEvents();
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => {
      currentLang = button.dataset.lang;
      localStorage.setItem("tdb-lang", currentLang);
      rerender();
      if (map) {
        PLACES.forEach((place) => {
          const marker = markers.get(place.id);
          if (marker) marker.options.title = local(place.i18n).title;
        });
      }
    });
  });

  applyTranslations();
  renderPlaces();
  renderCommerce();
  renderMapList();
  renderMapDetail();
  renderCulture();
  renderTimeline();
  renderTorredembarrin();
  renderSources();
  renderEvents(SEED_EVENTS);
  initMap();
  tryLoadLiveEvents();
});
