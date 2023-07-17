import Categorie from './categorie';
import Livre from './livre';

export const CATEGORIES = [
  new Categorie('c1', 'historique', '#f5428d'),
  new Categorie('c2', 'policier', '#f54242'),
  new Categorie('c3', 'SF', '#f5a442'),
  new Categorie('c4', 'romance', '#f5d142'),
  new Categorie('c5', 'tous', '#808080'),
];

export const LIVRES = [
  new Livre(
    'm1',
    ['c2'],
    'Detective conan',
    "Le manga retrace le parcours de Shinichi Kudo, détective lycéen rajeuni à la suite de l'ingestion d'une mystérieuse drogue qui le fait rajeunir au stade d'écolier de 7 ans. Hébergé chez son amie d'enfance Ran et son père Kogoro Mouri, il va devoir, secrètement, chercher à retrouver son corps d'antan et mettre l'Organisation responsable de son état sous les verrous…",
    100,
    'https://upload.wikimedia.org/wikipedia/fr/thumb/0/06/Logo_D%C3%A9tective_Conan.svg/langfr-2880px-Logo_D%C3%A9tective_Conan.svg.png',
    true,
  ),
  new Livre(
    'm2',
    ['c1', 'c2'],
    "Les disparus de Blackmore",
    "Octobre 1925. À Blackmore, une île coupée du monde au large de Guernesey, meurtres et disparitions sèment la terreur. Alors que la police piétine, Lorraine Chapelle, première femme diplômée de l’Institut de criminologie de Paris, est appelée en renfort. Cette cartésienne irréductible va devoir mener l’enquête aux côtés d’Edward Pierce, un Britannique spécialisé dans les sciences occultes qui se présente comme « détective de l’étrange ».",
    1,
    "https://www.xoeditions.com/wp-content/uploads/2023/02/LES-DISPARUS-DE-BLACKMORE-copie-654x1024.jpg",
    false
  ),
  new Livre(
    'm3',
    ['c3'],
    "Metro 2033",
    "Vingt années se sont écoulées depuis l'apocalypse nucléaire qui a ravagé la planète, obligeant les quelques survivants à se mettre à l'abri sous terre pour fuir une surface désormais inhabitable. Réfugiés dans les souterrains du métro de Moscou, ils se sont organisés en micro-sociétés et survivent tant bien que mal aux pénuries, maladies et aux guerres pour la possession des dernières ressources.",
    1,
    "https://images.epagine.fr/213/9782367930213_1_75.jpg",
    false
  ),
  new Livre(
    'm4',
    ['c3'],
    "Dune",
    "Le duc Leto Atréides, chef de la Maison Atréides, règne sur son fief planétaire de Caladan, une planète constituée de jungles et de vastes océans dont il tire sa puissance. Sa concubine officielle, Dame Jessica, est une adepte du Bene Gesserit, une école exclusivement féminine qui poursuit de mystérieuses visées politiques et qui enseigne des capacités non moins étranges.",
    2,
    "https://images.noosfere.org/couv/p/pp5069-1981.jpg",
    false
  ),
  new Livre(
    'm5',
    ['c4'],
    "La rose écarlate",
    "Dans le Périgord, Maud mène une vie paisible avec son père forgeron et ses amis. Mais un soir, son père se fait assassiner par un inconnu venant de Paris, et qui convoitait le carnet de voyage de son père dans l'Empire ottoman ; elle réussit cependant à infliger une balafre au meurtrier. Très vite, elle apprend qu'elle a un grand-père, un noble, qui vit près de la capitale, et décide donc de le rejoindre dans le but de venger son père.",
    19,
    "https://static.wikia.nocookie.net/bestlecture/images/6/63/La_Rose_%C3%A9carlate%2C_tome_1_Je_savais_que_je_te_rencontrerais_de_Patricia_Lyfoung.jpg/revision/latest?cb=20150112131040&path-prefix=fr",
    true
),
  // Nouveaux livres
  new Livre(
    'm6',
    ['c1'],
    "Les Misérables",
    "Dans la France du XIXe siècle, l'histoire de Jean Valjean, un ancien bagnard en quête de rédemption, et de l'inspecteur Javert qui le poursuit sans relâche.",
    3,
    "URL de l'image du livre Les Misérables",
    false
  ),
  new Livre(
    'm7',
    ['c1'],
    "Le Comte de Monte-Cristo",
    "L'histoire d'Edmond Dantès, un homme injustement emprisonné qui cherche à se venger de ceux qui l'ont trahi.",
    2,
    "URL de l'image du livre Le Comte de Monte-Cristo",
    true
  ),
  new Livre(
    'm8',
    ['c1', 'c3'],
    "Fondation",
    "Premier tome de la saga de science-fiction de l'auteur Isaac Asimov, qui raconte l'histoire de la Fondation, une organisation qui tente de préserver la connaissance et la civilisation humaine face à l'effondrement de l'Empire galactique.",
    5,
    "URL de l'image du livre Fondation",
    false
  ),
  new Livre(
    'm9',
    ['c2'],
    "Meurtre sur le Nil",
    "Hercule Poirot enquête sur un meurtre mystérieux qui a eu lieu à bord d'un bateau de croisière sur le Nil.",
    1,
    "URL de l'image du livre Meurtre sur le Nil",
    true
  ),
  new Livre(
    'm10',
    ['c2'],
    "Le Chien des Baskerville",
    "Sherlock Holmes et le Dr. Watson enquêtent sur une malédiction qui pèse sur la famille Baskerville dans les landes sinistres du Devonshire.",
    4,
    "URL de l'image du livre Le Chien des Baskerville",
    false
  ),
  new Livre(
    'm11',
    ['c2'],
    "Gone Girl",
    "L'histoire du mystérieux et troublant disparition d'Amy Dunne et des secrets que son mari Nick cache.",
    8,
    "URL de l'image du livre Gone Girl",
    true
  ),
  new Livre(
    'm12',
    ['c2'],
    "La Fille du train",
    "Rachel, une femme alcoolique et dépressive, devient témoin d'un événement troublant depuis le train qu'elle prend chaque jour. Lorsqu'elle décide d'enquêter, elle se retrouve impliquée dans un mystère inquiétant.",
    2,
    "URL de l'image du livre La Fille du train",
    false
  ),
  new Livre(
    'm13',
    ['c2'],
    "Le Silence des Agneaux",
    "L'agent du FBI Clarice Starling demande l'aide du psychopathe incarcéré Hannibal Lecter pour attraper un tueur en série connu sous le nom de Buffalo Bill.",
    6,
    "URL de l'image du livre Le Silence des Agneaux",
    true
  ),
  new Livre(
    'm14',
    ['c3'],
    "2001 : l'Odyssée de l'espace",
    "Un vaisseau spatial équipé d'une intelligence artificielle nommée HAL 9000 est envoyé en mission pour enquêter sur un mystérieux monolithe noir qui influence l'évolution de l'humanité.",
    2,
    "URL de l'image du livre 2001 : l'Odyssée de l'espace",
    false
  ),
  new Livre(
    'm15',
    ['c3'],
    "Le Cycle de Dune",
    "Dans un lointain futur, l'histoire de la famille Atréides et de la planète désertique Arrakis, source de l'épice, une substance aux pouvoirs mystérieux.",
    3,
    "URL de l'image du livre Le Cycle de Dune",
    true
  ),
  new Livre(
    'm16',
    ['c3'],
    "Fahrenheit 451",
    "Dans une société dystopique, où la lecture est interdite et les livres brûlés, un pompier chargé de détruire les livres commence à remettre en question son rôle.",
    1,
    "URL de l'image du livre Fahrenheit 451",
    false
  ),
  new Livre(
    'm17',
    ['c4'],
    "Orgueil et Préjugés",
    "L'histoire de Elizabeth Bennet et de Mr. Darcy, qui se détestent mutuellement au début, mais finissent par se découvrir des sentiments amoureux.",
    7,
    "URL de l'image du livre Orgueil et Préjugés",
    true
  ),
  new Livre(
    'm18',
    ['c4'],
    "Outlander",
    "Claire Randall, une infirmière de guerre, est transportée dans le temps depuis 1945 jusqu'en 1743 en Écosse, où elle est impliquée dans des intrigues politiques et des romances passionnées.",
    5,
    "URL de l'image du livre Outlander",
    false
  ),
  new Livre(
    'm19',
    ['c4'],
    "P.S. I Love You",
    "Après la mort de son mari, Holly reçoit des lettres qu'il a écrites avant de mourir, l'aidant à faire son deuil et à retrouver le bonheur.",
    3,
    "URL de l'image du livre P.S. I Love You",
    true
  ),
  new Livre(
    'm20',
    ['c4'],
    "Roméo et Juliette",
    "La tragique histoire d'amour entre Roméo Montaigu et Juliette Capulet, deux jeunes amants issus de familles rivales.",
    2,
    "URL de l'image du livre Roméo et Juliette",
    false
  ),
  new Livre(
    'm21',
    ['c3'],
    "Harry Potter à l'école des sorciers",
    "Le premier tome de la célèbre saga de J.K. Rowling, qui raconte l'histoire du jeune sorcier Harry Potter et de son entrée à Poudlard, l'école de sorcellerie.",
    10,
    "URL de l'image du livre Harry Potter à l'école des sorciers",
    false
  ),
];