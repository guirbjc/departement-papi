// Informations affichées au verso des cartes.
// Clé = le champ "number" de Data.js (Corse : 20.1 et 20.2, outre-mer : 971, 972...).
// Les lignes marquées "// à vérifier" sont des adresses dont je ne suis pas sûr :
// lancez `node check-links.mjs` pour tester tous les liens.

const depInfo = {
  1: {
    description:
      "Entre Bresse, Dombes, Bugey et pays de Gex, l’Ain varie les plaisirs : étangs, plaines et premiers reliefs du Jura. Il est célèbre pour sa volaille de Bresse, qui bénéficie d’une AOP, et pour Pérouges, cité médiévale aux ruelles pavées. À Bourg-en-Bresse, le monastère royal de Brou est un joyau du gothique flamboyant.",
    tourismUrl: "https://www.ain-tourisme.com",
    siteName: "Ain Tourisme",
  },
  2: {
    description:
      "Au nord de la Champagne, l’Aisne garde la trace de l’Histoire : le Chemin des Dames, haut lieu de la Grande Guerre, et la cathédrale de Laon, perchée sur sa colline. Château-Thierry a vu naître La Fontaine, et Guise abrite le Familistère, utopie sociale de Godin. En Thiérache, on fabrique le fameux fromage de Maroilles.",
    tourismUrl: "https://www.tourisme-aisne.com", // à vérifier
    siteName: "Aisne Tourisme",
  },
  3: {
    description:
      "Au cœur du Bourbonnais, l’Allier réunit Moulins, Montluçon et la ville thermale de Vichy, connue pour ses sources et ses pastilles. La forêt de Tronçais abrite des chênes si réputés qu’ils servent à fabriquer des tonneaux pour de grands vins. Le département produit aussi le saint-pourçain, un très ancien vignoble.",
    tourismUrl: "https://www.allier-auvergne-tourisme.com",
    siteName: "Allier Auvergne Tourisme",
  },
  4: {
    description:
      "Terre de lumière et de lavande, le département offre les gorges du Verdon et le plateau de Valensole, qui se couvre de violet en été. Digne-les-Bains lui consacre un corso fleuri, et Moustiers-Sainte-Marie est célèbre pour ses faïences. Son ciel exceptionnellement pur attire aussi les amateurs d’étoiles.",
    tourismUrl: "https://www.alpes-haute-provence.com",
    siteName: "Alpes-de-Haute-Provence Tourisme",
  },
  5: {
    description:
      "Entre Écrins, Queyras et Serre-Ponçon, les Hautes-Alpes comptent parmi les départements les plus ensoleillés des Alpes. Briançon, la plus haute ville de France, est ceinte de fortifications Vauban inscrites à l’UNESCO. Le lac de Serre-Ponçon offre ses eaux turquoise, et le tourton du Champsaur, beignet fourré, régale les randonneurs.",
    tourismUrl: "https://www.hautes-alpes.net",
    siteName: "Hautes-Alpes Tourisme",
  },
  6: {
    description:
      "Entre mer et montagne, les Alpes-Maritimes alignent Nice et sa promenade des Anglais, Cannes et son festival, Antibes et le parfum de Grasse. Menton fête chaque hiver son citron, et l’arrière-pays mène au parc du Mercantour. Côté assiette, on savoure la socca, la salade niçoise et la pissaladière.",
    tourismUrl: "https://www.cotedazurfrance.fr",
    siteName: "Côte d’Azur France",
  },
  7: {
    description:
      "Entre Cévennes et vallée du Rhône, l’Ardèche est le pays des gorges spectaculaires et du Pont d’Arc, voûte naturelle sur la rivière. La Caverne du Pont d’Arc reproduit la grotte Chauvet et ses peintures vieilles de plus de 30 000 ans. La châtaigne d’Ardèche, AOP, se déguste en crème, en confiture ou en marron glacé.",
    tourismUrl: "https://www.ardeche-guide.com",
    siteName: "Ardèche Guide",
  },
  8: {
    description:
      "Aux confins de la Belgique, les Ardennes dessinent les méandres de la Meuse sous d’épaisses forêts. Charleville-Mézières accueille le Festival mondial des théâtres de marionnettes et rend hommage à Rimbaud, son enfant. Sedan possède l’un des plus grands châteaux forts d’Europe. À table, le boudin blanc de Rethel est une institution.",
    tourismUrl: "https://www.ardennes.com",
    siteName: "Ardennes Tourisme",
  },
  9: {
    description:
      "Au pied des Pyrénées, l’Ariège réunit châteaux, grottes ornées et sites cathares : Foix, Montségur, Niaux ou le Mas-d’Azil. Les randonneurs y trouvent des lacs d’altitude et des vallées préservées, loin des foules. Côté table, l’azinat, soupe-repas au chou, au lard et aux saucisses, réchauffe les journées d’hiver.",
    tourismUrl: "https://www.ariegepyrenees.com",
    siteName: "Ariège Pyrénées",
  },
  10: {
    description:
      "Entre Champagne et Bourgogne, l’Aube séduit par Troyes, ses maisons à pans de bois et ses églises aux vitraux éclatants. La côte des Bar abrite un vignoble de champagne et les rosés des Riceys, tandis que les lacs de la forêt d’Orient attirent oiseaux et voiliers. Troyes a donné son andouillette, et Chaource son fromage.",
    tourismUrl: "https://www.aube-champagne.com",
    siteName: "Aube en Champagne",
  },
  11: {
    description:
      "Entre Méditerranée et Pyrénées, l’Aude impressionne avec Carcassonne, sa cité médiévale classée à l’UNESCO, et ses châteaux cathares perchés comme Peyrepertuse ou Quéribus. Le canal du Midi y serpente jusqu’à la mer. Castelnaudary revendique le cassoulet, et Limoux sa blanquette, dont les moines auraient inventé les bulles dès le XVIe siècle.",
    tourismUrl: "https://www.audetourisme.com", // à vérifier
    siteName: "Aude Tourisme",
  },
  12: {
    description:
      "Entre causses, gorges et plateaux, l’Aveyron cache Conques et son abbatiale romane, étape du chemin de Saint-Jacques, ainsi que Rodez et le musée Soulages. Le viaduc de Millau, l’un des plus hauts ponts du monde, enjambe le Tarn. Sur l’Aubrac, on prépare l’aligot, et à Roquefort le célèbre fromage s’affine dans les caves.",
    tourismUrl: "https://www.tourisme-aveyron.com",
    siteName: "Aveyron Tourisme",
  },
  13: {
    description:
      "Entre Marseille, Aix et Arles, les Bouches-du-Rhône concentrent la Provence : Vieux-Port, calanques, Mucem, atelier de Cézanne, monuments romains et Camargue. Les Baux-de-Provence dominent la vallée des Alpilles. Dans l’assiette, la bouillabaisse, le calisson d’Aix et la navette de Marseille font partie du patrimoine local.",
    tourismUrl: "https://www.myprovence.fr",
    siteName: "My Provence",
  },
  14: {
    description:
      "Sur la côte normande, le Calvados mêle mémoire et élégance : plages du Débarquement, tapisserie de Bayeux, abbayes de Caen, Deauville et Honfleur. Le pays d’Auge est le berceau du livarot et du pont-l’évêque, deux fromages à croûte parfumée. On y distille aussi l’eau-de-vie de cidre qui a donné son nom au département.",
    tourismUrl: "https://www.calvados-tourisme.com", // à vérifier
    siteName: "Calvados Tourisme",
  },
  15: {
    description:
      "Au cœur du Massif central, le Cantal est dominé par un immense massif volcanique érodé, l’un des plus vastes d’Europe. Le Puy Mary, le plateau de Salers et les burons composent un paysage de pâturages ouverts. On y produit le cantal et le salers, deux fromages AOP, et Aurillac s’est fait connaître par ses parapluies.",
    tourismUrl: "https://www.cantal-destination.com",
    siteName: "Cantal Destination",
  },
  16: {
    description:
      "Au fil de la Charente, le département est le pays du cognac : Cognac, ses chais noircis et ses maisons de renom. Angoulême, perchée sur son rempart, accueille chaque année le Festival international de la bande dessinée et cache des fresques sur ses murs. Le pineau des Charentes et les pantoufles charentaises complètent le tableau.",
    tourismUrl: "https://www.lacharente.com",
    siteName: "La Charente Tourisme",
  },
  17: {
    description:
      "Face à l’océan, la Charente-Maritime aligne La Rochelle et ses tours, les îles de Ré et d’Oléron, Rochefort et la frégate Hermione, ainsi que Royan. Les parcs à huîtres de Marennes-Oléron fournissent l’un des produits phares du littoral. La mouclade, moules à la crème et au pineau, se déguste en toute saison.",
    tourismUrl: "https://www.en-charente-maritime.com",
    siteName: "En Charente-Maritime",
  },
  18: {
    description:
      "Au centre géographique de la France, le Cher réunit Bourges et sa cathédrale gothique classée à l’UNESCO, ainsi que le palais de Jacques Cœur. Les coteaux de Sancerre produisent un vin blanc réputé, que l’on déguste avec le crottin de Chavignol. Chaque printemps, le Printemps de Bourges anime la ville en musique.",
    tourismUrl: "https://www.berryprovince.com",
    siteName: "Berry Province",
  },
  19: {
    description:
      "Entre Limousin et Périgord, la Corrèze déroule collines, gorges et plateaux boisés. Collonges-la-Rouge et ses maisons de grès rouge, Turenne perchée sur sa butte et Brive-la-Gaillarde séduisent les visiteurs. Tulle est la ville de l’accordéon, et le département produit de belles noix et d’excellentes châtaignes.",
    tourismUrl: "https://www.correze-tourisme.com", // à vérifier
    siteName: "Corrèze Tourisme",
  },
  20.1: {
    description:
      "Entre mer et montagne, la Corse-du-Sud offre Ajaccio, ville natale de Napoléon, les falaises de calcaire de Bonifacio et les calanques de Piana aux roches rouges. La réserve de Scandola, classée à l’UNESCO, se découvre en bateau. Dans les assiettes, la charcuterie corse, le figatellu et le brocciu rivalisent de saveurs.",
    tourismUrl: "https://www.visit-corsica.com",
    siteName: "Visit Corsica",
  },
  20.2: {
    description:
      "Au nord de l’île, la Haute-Corse réunit Bastia, le Cap Corse, la citadelle de Calvi, le désert des Agriates et Corte, ancienne capitale de Pasquale Paoli. Les plages de sable fin alternent avec les sommets du GR20. La clémentine de Corse, le miel AOP, les canistrelli et le vin de Patrimonio incarnent les saveurs locales.",
    tourismUrl: "https://www.visit-corsica.com",
    siteName: "Visit Corsica",
  },
  21: {
    description:
      "Capitale des ducs de Bourgogne, Dijon séduit par son centre historique, son palais des ducs et sa moutarde. Plus au sud, la côte de Nuits et la côte de Beaune offrent les climats classés à l’UNESCO et les Hospices de Beaune, célèbres pour leur toit de tuiles vernissées. Le bœuf bourguignon et les escargots font la renommée de la table.",
    tourismUrl: "https://www.cotedor-tourisme.com",
    siteName: "Côte-d’Or Tourisme",
  },
  22: {
    description:
      "Aux portes de la Bretagne nord, les Côtes-d’Armor offrent la côte de Granit rose à Ploumanac’h, le cap Fréhel et l’archipel de Bréhat. Dinan et ses remparts reflètent l’histoire médiévale du département. Dans la baie de Saint-Brieuc, on pêche la coquille Saint-Jacques, tandis que le coco de Paimpol, haricot AOP, régale les gourmets.",
    tourismUrl: "https://www.cotesdarmor.com",
    siteName: "Côtes d’Armor Destination",
  },
  23: {
    description:
      "Au cœur de la France verte, la Creuse est une terre de forêts, de lacs et de villages paisibles. Aubusson tisse depuis des siècles des tapisseries reconnues par l’UNESCO, et le lac de Vassivière mêle nature et art contemporain. Les bovins limousins et les châtaignes composent une cuisine rustique et généreuse.",
    tourismUrl: "https://www.tourisme-creuse.com",
    siteName: "Creuse Tourisme",
  },
  24: {
    description:
      "Berceau de l’humanité préhistorique, la Dordogne regorge de grottes ornées : Lascaux, Les Eyzies, Rouffignac. Le Périgord noir offre Sarlat, les châteaux de Beynac et Castelnaud et les jardins de Marqueyssac. Foie gras, truffe, noix, fraise du Périgord et confit de canard font la réputation de sa gastronomie.",
    tourismUrl: "https://www.dordogne-perigord-tourisme.fr",
    siteName: "Dordogne Périgord Tourisme",
  },
  25: {
    description:
      "Entre Jura et vallée du Doubs, le département présente Besançon et sa citadelle de Vauban, classée à l’UNESCO, la saline royale d’Arc-et-Senans et Ornans, patrie de Courbet. Les plateaux du Haut-Doubs accueillent le ski de fond en hiver. Le comté, la saucisse de Morteau et le mont d’or composent un festin hivernal.",
    tourismUrl: "https://www.doubs.travel",
    siteName: "Doubs Travel",
  },
  26: {
    description:
      "Entre Vercors et Provence, la Drôme étonne par ses paysages variés : champs de lavande, oliveraies de Nyons, vignes de l’Hermitage. Le Palais idéal du facteur Cheval, à Hauterives, est un chef-d’œuvre d’art naïf bâti pierre après pierre. Montélimar est la capitale du nougat, et Nyons produit une olive noire AOP.",
    tourismUrl: "https://www.ladrometourisme.com",
    siteName: "La Drôme Tourisme",
  },
  27: {
    description:
      "Entre Seine et forêts normandes, l’Eure abrite Giverny, avec la maison et les jardins de Claude Monet, et Les Andelys, dominés par les ruines de Château-Gaillard. Lyons-la-Forêt, village à pans de bois, compte parmi les plus beaux de France. Les vergers y fournissent un cidre et des produits fermiers recherchés.",
    tourismUrl: "https://www.eure-tourisme.fr",
    siteName: "Eure Tourisme",
  },
  28: {
    description:
      "Au sud de Paris, l’Eure-et-Loir est dominée par Chartres, dont la cathédrale gothique, classée à l’UNESCO, abrite le célèbre bleu de ses vitraux. Illiers-Combray évoque l’enfance de Marcel Proust, et Maintenon le château de la marquise. En ville, la meringue chocolatée appelée mentchikoff est une spécialité chartraine.",
    tourismUrl: "https://www.tourisme-eureetloir.com", // à vérifier
    siteName: "Eure-et-Loir Tourisme",
  },
  29: {
    description:
      "À l’extrémité de la Bretagne, le Finistère offre une côte découpée : pointe du Raz, presqu’île de Crozon, île d’Ouessant. Quimper a sa faïence et sa cathédrale, Pont-Aven a inspiré Gauguin. Côté saveurs, le kouign-amann de Douarnenez, les crêpes et les produits de la mer sont incontournables.",
    tourismUrl: "https://www.finistere360.com",
    siteName: "Finistère 360°",
  },
  30: {
    description:
      "Entre Cévennes et Camargue, le Gard rassemble Nîmes, ses arènes et sa Maison Carrée, le Pont du Gard et les remparts d’Aigues-Mortes. Uzès séduit par ses ruelles de pierre blonde. À table, la brandade de Nîmes, l’oignon doux des Cévennes AOP et le taureau de Camargue AOP font la réputation du terroir.",
    tourismUrl: "https://www.tourismegard.com",
    siteName: "Gard Tourisme",
  },
  31: {
    description:
      "Dans le Sud-Ouest, la Haute-Garonne est dominée par Toulouse, la « ville rose » aux briques claires, dont la basilique Saint-Sernin est classée à l’UNESCO. La Cité de l’espace et les usines Airbus rappellent sa vocation aéronautique. Le département offre aussi le canal du Midi, les Pyrénées et la saucisse de Toulouse.",
    tourismUrl: "https://www.tourisme-haute-garonne.com", // à vérifier
    siteName: "Haute-Garonne Tourisme",
  },
  32: {
    description:
      "Au pays de d’Artagnan, le Gers est un doux paysage de collines, de bastides et de champs de tournesols. Auch s’enorgueillit de sa cathédrale et de son escalier monumental. Terre d’armagnac, la plus ancienne eau-de-vie de France, le département se régale aussi de foie gras, de canard et de floc de Gascogne.",
    tourismUrl: "https://www.tourisme-gers.com",
    siteName: "Gers Tourisme",
  },
  33: {
    description:
      "Autour de Bordeaux, la Gironde est le royaume des grands vins : Médoc, Saint-Émilion, Sauternes. La ville, classée à l’UNESCO, abrite la Cité du Vin et son célèbre miroir d’eau. Sur le bassin d’Arcachon, la dune du Pilat est la plus haute dune d’Europe, et les huîtres comme le canelé font le bonheur des gourmands.",
    tourismUrl: "https://www.gironde-tourisme.com",
    siteName: "Gironde Tourisme",
  },
  34: {
    description:
      "Entre mer et garrigue, l’Hérault réunit Montpellier la vivante, Sète et ses joutes nautiques, Pézenas où vécut Molière et Saint-Guilhem-le-Désert, étape du chemin de Compostelle. L’étang de Thau fournit huîtres et moules. À Sète, la tielle, tourte au poulpe, est un mets typique, à déguster avec un vin du Languedoc.",
    tourismUrl: "https://www.herault-tourisme.com",
    siteName: "Hérault Tourisme",
  },
  35: {
    description:
      "Entre terre et mer, l’Ille-et-Vilaine séduit avec Rennes et ses maisons à pans de bois, Saint-Malo la cité corsaire et la baie du Mont-Saint-Michel. Fougères et Vitré conservent de superbes châteaux. La forêt de Brocéliande évoque les légendes arthuriennes, tandis que Cancale est réputée pour ses huîtres, à déguster face à la mer.",
    tourismUrl: "https://www.bretagne35.com",
    siteName: "Bretagne 35",
  },
  36: {
    description:
      "Au cœur du Berry, l’Indre offre une nature préservée : la Brenne, pays des mille étangs, est un paradis pour les oiseaux et les promeneurs. Nohant fut la maison de George Sand, et Valençay le château de Talleyrand. Le valençay, fromage de chèvre en forme de pyramide, et la lentille verte du Berry sont les produits phares.",
    tourismUrl: "https://www.berryprovince.com",
    siteName: "Berry Province",
  },
  37: {
    description:
      "Au cœur du Val de Loire classé à l’UNESCO, l’Indre-et-Loire aligne Chenonceau, Amboise et le Clos Lucé où vécut Léonard de Vinci, les jardins de Villandry et la forteresse de Chinon. Tours, ville d’art et d’histoire, est la capitale de la Touraine. Les rillettes de Tours, le vouvray et le chinon complètent ce jardin de la France.",
    tourismUrl: "https://www.touraineloirevalley.com",
    siteName: "Touraine Loire Valley",
  },
  38: {
    description:
      "Entre Vercors, Chartreuse et Écrins, l’Isère est un paradis de la montagne. Grenoble et ses célèbres « bulles » vers la Bastille côtoient les grands domaines skiables de l’Alpe d’Huez et des Deux Alpes. La liqueur de chartreuse est fabriquée à Voiron, et le gratin dauphinois, la noix de Grenoble ou le saint-marcellin garnissent la table.",
    tourismUrl: "https://www.isere-tourisme.com",
    siteName: "Isère Tourisme",
  },
  39: {
    description:
      "Pays des lacs, des cascades et des plateaux, le Jura séduit par ses paysages verts et son patrimoine. Arbois, ville de Pasteur, produit le vin jaune, et Salins-les-Bains, classée à l’UNESCO, rappelle l’histoire du sel. Le comté, le morbier et le poulet au vin jaune et aux morilles composent une gastronomie réconfortante.",
    tourismUrl: "https://www.jura-tourism.com",
    siteName: "Jura Tourisme",
  },
  40: {
    description:
      "Face à l’Atlantique, les Landes abritent la plus grande forêt de pins d’Europe occidentale et une côte sauvage chère aux surfeurs, de Mimizan à Hossegor. Dax, ville thermale, et Mont-de-Marsan, capitale des courses landaises, complètent le tableau. Le foie gras, le poulet jaune et l’asperge des sables font la fierté locale.",
    tourismUrl: "https://www.tourismelandes.com",
    siteName: "Landes Tourisme",
  },
  41: {
    description:
      "Dans le Val de Loire, le Loir-et-Cher rassemble Chambord et ses 426 pièces, Cheverny qui inspira Moulinsart à Hergé, Chaumont-sur-Loire et son festival des jardins. Le ZooParc de Beauval, à Saint-Aignan, est l’un des plus beaux de France. La tarte Tatin, née à Lamotte-Beuvron, et le selles-sur-cher AOP sont ses fiertés.",
    tourismUrl: "https://www.valdeloire-france.com",
    siteName: "Val de Loire - Loir-et-Cher",
  },
  42: {
    description:
      "Entre monts du Forez, Pilat et gorges de la Loire, le département propose des paysages variés. Saint-Étienne, ville UNESCO du design, côtoie Firminy et son site Le Corbusier. Roanne, capitale de la gastronomie, fait honneur aux frères Troisgros. La rigotte de Condrieu et l’eau pétillante de Saint-Galmier complètent la carte.",
    tourismUrl: "https://www.tourisme-loire.com",
    siteName: "Loire Tourisme",
  },
  43: {
    description:
      "Dans le Massif central, la Haute-Loire est célèbre pour Le Puy-en-Velay, dont les pitons volcaniques portent la chapelle Saint-Michel d’Aiguilhe et une cathédrale romane. C’est le point de départ de la Via Podiensis vers Compostelle. La lentille verte du Puy, première AOC pour un légume sec, et la verveine du Velay y sont réputées.",
    tourismUrl: "https://www.destination-haute-loire.com", // à vérifier
    siteName: "Haute-Loire Tourisme",
  },
  44: {
    description:
      "Entre Loire et Atlantique, la Loire-Atlantique associe Nantes et ses Machines de l’île, La Baule et ses plages, les marais salants de Guérande et la Brière. Le muscadet, la fleur de sel de Guérande et le beurre blanc forment un trio gagnant. Nantes a aussi vu naître le Petit-Beurre, biscuit LU devenu un classique.",
    tourismUrl: "https://www.loire-atlantique-tourisme.com", // à vérifier
    siteName: "Loire-Atlantique Tourisme",
  },
  45: {
    description:
      "Dans le Val de Loire, le Loiret est la patrie de Jeanne d’Arc, honorée chaque année à Orléans lors des fêtes johanniques. Il abrite Sully-sur-Loire et son château, Gien et sa faïence, Briare et son pont-canal. La Loire à vélo traverse tout le département. Le pithiviers feuilleté et le cotignac d’Orléans sont deux douceurs locales.",
    tourismUrl: "https://www.tourismeloiret.com", // à vérifier
    siteName: "Loiret Tourisme",
  },
  46: {
    description:
      "Entre causses et vallées, le Lot est un département de pierre blanche et de villages perchés : Rocamadour accroché à sa falaise, Saint-Cirq-Lapopie dominant la rivière, Cahors et son pont Valentré. Le gouffre de Padirac et la grotte de Pech Merle sont des merveilles souterraines. On y produit le vin de Cahors et l’agneau du Quercy.",
    tourismUrl: "https://www.tourisme-lot.com",
    siteName: "Lot Tourisme",
  },
  47: {
    description:
      "Au cœur de la Garonne et du Lot, le Lot-et-Garonne est la terre des bastides, comme Monflanquin ou Villeréal, et de villages perchés tels que Pujols. Nérac garde la mémoire d’Henri IV. Agen est la capitale du pruneau, protégé par une IGP, et les vergers y donnent aussi tomates, melons et kiwis.",
    tourismUrl: "https://www.tourisme-lotetgaronne.com",
    siteName: "Lot-et-Garonne Tourisme",
  },
  48: {
    description:
      "Département le moins peuplé de France, la Lozère est un pays de grands espaces : gorges du Tarn, mont Lozère, Cévennes et causses classés à l’UNESCO. Mende, sa préfecture, possède une belle cathédrale. L’aven Armand impressionne par sa forêt de stalagmites, et la région produit le bleu des Causses AOP et l’agneau de Lozère.",
    tourismUrl: "https://www.lozere-tourisme.com", // à vérifier
    siteName: "Lozère Tourisme",
  },
  49: {
    description:
      "Aux portes de la Loire, le Maine-et-Loire réunit Angers et sa tapisserie de l’Apocalypse, Saumur et son célèbre Cadre noir, ainsi que l’abbaye de Fontevraud, nécropole des Plantagenêts. Le département est aussi un grand pays de vins d’Anjou. Le Cointreau, liqueur née près d’Angers, et le crémet d’Anjou complètent le tableau.",
    tourismUrl: "https://www.anjou-tourisme.com",
    siteName: "Anjou Tourisme",
  },
  50: {
    description:
      "Presqu’île tournée vers la mer, la Manche accueille le Mont-Saint-Michel, la rade de Cherbourg, les plages du Débarquement comme Utah Beach, et la pointe de la Hague. Granville et Barfleur sont de beaux ports. L’agneau de pré-salé et les moules de bouchot de la baie du Mont-Saint-Michel sont deux produits AOP réputés.",
    tourismUrl: "https://www.manchetourisme.com",
    siteName: "Manche Tourisme",
  },
  51: {
    description:
      "Capitale du champagne, la Marne rassemble Reims et sa cathédrale du sacre des rois, Épernay et son avenue de Champagne, ainsi que les coteaux, maisons et caves classés à l’UNESCO. Châlons-en-Champagne et le lac du Der complètent ce paysage. Le biscuit rose de Reims et les pieds de porc de Sainte-Menehould sont des spécialités.",
    tourismUrl: "https://www.tourisme-en-champagne.com",
    siteName: "Tourisme en Champagne",
  },
  52: {
    description:
      "Entre Champagne et Lorraine, la Haute-Marne réunit Langres et ses remparts, ville natale de Diderot, et Colombey-les-Deux-Églises, où repose le général de Gaulle. Le lac du Der-Chantecoq accueille en automne des milliers de grues cendrées. Nogent est la capitale de la coutellerie, et le langres AOP est un fromage à croûte lavée.",
    tourismUrl: "https://www.tourisme-hautemarne.com", // à vérifier
    siteName: "Haute-Marne Tourisme",
  },
  53: {
    description:
      "Au carrefour de la Normandie et des Pays de la Loire, la Mayenne séduit par ses rivières, ses bocages et ses villages de caractère : Sainte-Suzanne, Saint-Pierre-sur-Erve. Laval possède un château et vit naître le Douanier Rousseau, et Jublains conserve des vestiges gallo-romains. Le fromage Port-Salut est né à l’abbaye d’Entrammes.",
    tourismUrl: "https://www.tourisme-mayenne.com",
    siteName: "Mayenne Tourisme",
  },
  54: {
    description:
      "Au cœur de la Lorraine, la Meurthe-et-Moselle est dominée par Nancy, dont la place Stanislas est classée à l’UNESCO, et par l’École de Nancy, fleuron de l’Art nouveau. Lunéville possède un château surnommé le Versailles lorrain, et Longwy une citadelle de Vauban. Macarons et bergamotes de Nancy sont ses douceurs, avec la mirabelle.",
    tourismUrl: "https://www.tourisme-meurtheetmoselle.fr",
    siteName: "Meurthe-et-Moselle Tourisme",
  },
  55: {
    description:
      "Terre de mémoire, la Meuse est marquée par la bataille de Verdun, dont l’ossuaire de Douaumont et les forts rappellent l’histoire. Bar-le-Duc est célèbre pour sa confiture de groseilles épépinées à la plume, surnommée « caviar de Bar ». Commercy est réputée pour ses madeleines, et Verdun pour ses dragées.",
    tourismUrl: "https://www.tourisme-meuse.com",
    siteName: "Meuse Tourisme",
  },
  56: {
    description:
      "Entre mégalithes et mer, le Morbihan réunit les alignements de Carnac, le golfe parsemé d’îles, Belle-Île, Vannes et ses maisons à colombages et le château de Josselin. Lorient accueille chaque été le Festival interceltique. Les huîtres de Quiberon, les sardines et le caramel au beurre salé sont des incontournables de la table bretonne.",
    tourismUrl: "https://www.morbihan.com",
    siteName: "Morbihan Tourisme",
  },
  57: {
    description:
      "En Lorraine, la Moselle est dominée par Metz, sa cathédrale aux vitraux gigantesques et le Centre Pompidou-Metz. La ligne Maginot, au fort de Hackenberg, rappelle l’histoire militaire. Sarreguemines est célèbre pour sa faïence, et Saint-Louis-lès-Bitche pour son cristal. La mirabelle de Lorraine IGP et la quiche lorraine y sont à l’honneur.",
    tourismUrl: "https://www.moselle-tourisme.com",
    siteName: "Moselle Tourisme",
  },
  58: {
    description:
      "Au cœur de la Bourgogne, la Nièvre réunit Nevers, sa faïence et sa cathédrale, La Charité-sur-Loire, classée à l’UNESCO, et le parc naturel du Morvan. Magny-Cours est célèbre pour son circuit automobile. Le bœuf charolais, les vignes de Pouilly-Fumé et la nature préservée du Morvan en font un département de caractère.",
    tourismUrl: "https://www.nievre-tourisme.com", // à vérifier
    siteName: "Nièvre Tourisme",
  },
  59: {
    description:
      "Aux portes de la Belgique, le Nord réunit Lille, la Vieille Bourse et sa grande braderie, Dunkerque et son carnaval, ainsi que le bassin minier classé à l’UNESCO. Bergues a servi de décor à « Bienvenue chez les Ch’tis ». Le maroilles, la carbonade flamande et les bêtises de Cambrai racontent une cuisine généreuse.",
    tourismUrl: "https://www.tourisme-nord.fr", // à vérifier
    siteName: "Nord Tourisme",
  },
  60: {
    description:
      "Au nord de Paris, l’Oise aligne de grands noms : Chantilly et son château, Compiègne et la clairière de l’Armistice, Senlis la médiévale et Pierrefonds, forteresse restaurée par Viollet-le-Duc. La cathédrale de Beauvais possède le chœur gothique le plus haut du monde. La crème Chantilly doit son nom à la ville.",
    tourismUrl: "https://www.oisetourisme.com", // à vérifier
    siteName: "Oise Tourisme",
  },
  61: {
    description:
      "Au cœur du bocage normand, l’Orne est le pays du camembert, né à Camembert, près de Vimoutiers, et du haras du Pin, surnommé le « Versailles du cheval ». Alençon est célèbre pour sa dentelle, reconnue par l’UNESCO. Mortagne-au-Perche fait honneur à son boudin noir, et Bagnoles-de-l’Orne à ses thermes.",
    tourismUrl: "https://www.ornetourisme.com", // à vérifier
    siteName: "Orne Tourisme",
  },
  62: {
    description:
      "Entre côte d’Opale et bassin minier, le Pas-de-Calais offre les falaises du cap Blanc-Nez et du cap Gris-Nez, Le Touquet, Boulogne-sur-Mer et son Nausicaá, ainsi qu’Arras, dont les places flamandes sont admirables. Le Louvre-Lens et le mémorial de Vimy rappellent culture et histoire. Les produits de la mer, dont le hareng, sont à l’honneur.",
    tourismUrl: "https://www.pas-de-calais-tourisme.com", // à vérifier
    siteName: "Pas-de-Calais Tourisme",
  },
  63: {
    description:
      "Au cœur de l’Auvergne, le Puy-de-Dôme est dominé par la chaîne des Puys et la faille de Limagne, classées à l’UNESCO. Clermont-Ferrand surprend avec sa cathédrale de pierre de Volvic noire. Thiers est la capitale de la coutellerie, et les fromages saint-nectaire, fourme d’Ambert et bleu d’Auvergne sont tous AOP.",
    tourismUrl: "https://www.puydedome.com", // à vérifier
    siteName: "Puy-de-Dôme Tourisme",
  },
  64: {
    description:
      "Entre Atlantique et Pyrénées, ce département associe Pays basque et Béarn. Biarritz et ses vagues, Bayonne et son jambon, Pau et sa vue sur la chaîne pyrénéenne séduisent les visiteurs. Le piment d’Espelette AOP, le gâteau basque, l’ossau-iraty et le jurançon font partie du patrimoine culinaire. Henri IV est né à Pau.",
    tourismUrl: "https://www.tourisme64.com",
    siteName: "Tourisme 64",
  },
  65: {
    description:
      "Au cœur des Pyrénées, les Hautes-Pyrénées accueillent Lourdes et son sanctuaire, le cirque de Gavarnie classé à l’UNESCO et le Pic du Midi de Bigorre, réserve de ciel étoilé. Cauterets et Saint-Lary comptent parmi les stations. Le haricot tarbais IGP, le porc noir de Bigorre AOP et le mouton de Barèges-Gavarnie AOP font la fierté de la cuisine locale.",
    tourismUrl: "https://www.tourisme-hautespyrenees.com", // à vérifier
    siteName: "Hautes-Pyrénées Tourisme",
  },
  66: {
    description:
      "Entre Méditerranée et Pyrénées, les Pyrénées-Orientales célèbrent la Catalogne française : Perpignan et le palais des rois de Majorque, Collioure peinte par les fauves, Céret, Villefranche-de-Conflent et son train jaune. Le Canigó domine l’horizon. L’anchois de Collioure, le banyuls et la crème catalane sont les stars locales.",
    tourismUrl: "https://www.tourisme-pyreneesorientales.com", // à vérifier
    siteName: "Pyrénées-Orientales Tourisme",
  },
  67: {
    description:
      "Aux portes de l’Allemagne, le Bas-Rhin est dominé par Strasbourg, sa cathédrale gothique, le quartier de la Petite France et le Parlement européen. La route des vins traverse Obernai, tandis que le Haut-Kœnigsbourg domine la plaine. La choucroute, la flammekueche, le baeckeoffe et le kougelhopf font la réputation de la table alsacienne.",
    tourismUrl: "https://www.tourisme-alsace.com",
    siteName: "Tourisme en Alsace",
  },
  68: {
    description:
      "Au pied des Vosges, le Haut-Rhin réunit Colmar et sa Petite Venise, Riquewihr, Eguisheim, Kaysersberg, village natal d’Albert Schweitzer, et la route des vins d’Alsace. Mulhouse accueille la Cité de l’Automobile. Le munster AOP, le riesling, le gewurztraminer et le kougelhopf font la réputation de la gastronomie.",
    tourismUrl: "https://www.tourisme-alsace.com",
    siteName: "Tourisme en Alsace",
  },
  69: {
    description:
      "Autour de Lyon, le Rhône réunit une capitale gastronomique classée à l’UNESCO, avec ses traboules, Fourvière et la Fête des Lumières, et le vignoble du Beaujolais et ses villages de pierres dorées. Les bouchons lyonnais servent quenelles, andouillette, cervelle de canut et tarte à la praline rose.",
    tourismUrl: "https://www.rhonetourisme.com",
    siteName: "Rhône Tourisme",
  },
  70: {
    description:
      "Entre Vosges et Jura, la Haute-Saône est un département discret : Ronchamp et la chapelle de Le Corbusier, classée à l’UNESCO, Vesoul chantée par Jacques Brel, Luxeuil-les-Bains et ses thermes, ou encore la Planche des Belles Filles du Tour de France. Le kirsch de Fougerolles AOP, la cancoillotte et le comté sont des spécialités.",
    tourismUrl: "https://www.destination70.com", // à vérifier
    siteName: "Destination 70",
  },
  71: {
    description:
      "Au cœur de la Bourgogne du Sud, la Saône-et-Loire est riche d’art roman : abbaye de Cluny, Tournus, Paray-le-Monial et communauté de Taizé. La roche de Solutré domine les vignes du Mâconnais, source du pouilly-fuissé. Le bœuf charolais et le poulet de Bresse font l’honneur de la table, avec le chèvre du Mâconnais AOP.",
    tourismUrl: "https://www.bourgogne-du-sud.com",
    siteName: "Bourgogne du Sud",
  },
  72: {
    description:
      "Au sud de la Normandie, la Sarthe est la patrie des 24 Heures du Mans, course d’endurance mythique. Le Mans conserve sa cité Plantagenêt, ses ruelles médiévales et sa cathédrale. Solesmes est connue pour ses moines et son chant grégorien, et Sablé-sur-Sarthe pour ses biscuits. Les rillettes du Mans IGP et le poulet de Loué sont fameux.",
    tourismUrl: "https://www.sarthe-tourisme.com", // à vérifier
    siteName: "Sarthe Tourisme",
  },
  73: {
    description:
      "Entre Alpes et lacs, la Savoie réunit Chambéry et la fontaine des Éléphants, Aix-les-Bains et le lac du Bourget, plus grand lac naturel entièrement français, ainsi que les Trois Vallées, Tignes et Val d’Isère. Le parc national de la Vanoise est le plus ancien de France. Beaufort, fondue savoyarde, tartiflette et diots régalent les skieurs.",
    tourismUrl: "https://www.savoie-mont-blanc.com",
    siteName: "Savoie Mont Blanc",
  },
  74: {
    description:
      "Au pied du mont Blanc, plus haut sommet des Alpes, la Haute-Savoie rassemble Chamonix, Annecy « la Venise des Alpes », Évian, Yvoire et Megève. Le lac Léman et le lac d’Annecy bordent des villes élégantes. Le reblochon AOP, la tartiflette, l’abondance et la fondue savoyarde sont des plats incontournables.",
    tourismUrl: "https://www.savoie-mont-blanc.com",
    siteName: "Savoie Mont Blanc",
  },
  75: {
    description:
      "Capitale de la France, Paris réunit la tour Eiffel, le Louvre, Notre-Dame, Montmartre et le Sacré-Cœur, les Champs-Élysées et l’Arc de Triomphe. Les berges de la Seine sont classées à l’UNESCO, et le Marais comme le Quartier latin cachent mille trésors. La baguette, le croissant, le macaron et le jambon-beurre en sont les symboles gourmands.",
    tourismUrl: "https://parisjetaime.com",
    siteName: "Paris je t’aime",
  },
  76: {
    description:
      "Entre Seine et Manche, la Seine-Maritime offre Rouen et sa cathédrale peinte par Monet, le Gros-Horloge et les falaises d’Étretat. Le Havre, reconstruit par Perret, est classé à l’UNESCO. Fécamp produit la liqueur Bénédictine, et le pays de Bray le neufchâtel AOP, fromage en forme de cœur. Ces richesses incarnent la Normandie.",
    tourismUrl: "https://www.seine-maritime-tourisme.com", // à vérifier
    siteName: "Seine-Maritime Tourisme",
  },
  77: {
    description:
      "À l’est de Paris, la Seine-et-Marne réunit Disneyland Paris, le château de Fontainebleau et sa forêt, Vaux-le-Vicomte, Provins la médiévale et Barbizon, village des peintres. Meaux et Melun sont les capitales du brie AOP. La moutarde de Meaux et la confiture de roses de Provins sont d’autres spécialités locales.",
    tourismUrl: "https://www.tourisme-seine-et-marne.com", // à vérifier
    siteName: "Seine-et-Marne Tourisme",
  },
  78: {
    description:
      "À l’ouest de Paris, les Yvelines comptent Versailles, avec son château, sa galerie des Glaces et ses jardins, mais aussi Saint-Germain-en-Laye, Rambouillet et la villa Savoye à Poissy, signée Le Corbusier. Le Potager du Roi, jardin de Louis XIV, cultive encore fruits et légumes anciens. La forêt de Rambouillet s’offre aux promeneurs.",
    tourismUrl: "https://www.yvelines-tourisme.com", // à vérifier
    siteName: "Yvelines Tourisme",
  },
  79: {
    description:
      "Entre Poitou et Vendée, les Deux-Sèvres abritent la Venise verte du Marais poitevin, et Niort, qui possède un donjon médiéval. Parthenay et Melle conservent un riche patrimoine roman. Le chabichou du Poitou AOP, fromage de chèvre, le beurre Charentes-Poitou AOP et l’angélique de Niort, tige confite, sont les produits phares du terroir.",
    tourismUrl: "https://www.tourisme-deux-sevres.com", // à vérifier
    siteName: "Deux-Sèvres Tourisme",
  },
  80: {
    description:
      "Au bord de la Manche, la Somme est la terre de sa baie, classée parmi les plus belles baies du monde, où vivent des phoques au Crotoy et à Saint-Valery. Amiens possède la plus vaste cathédrale gothique de France et ses hortillonnages. Les champs de bataille de 1916 sont des lieux de mémoire. Macarons d’Amiens et ficelle picarde sont des spécialités.",
    tourismUrl: "https://www.somme-tourisme.com", // à vérifier
    siteName: "Somme Tourisme",
  },
  81: {
    description:
      "Entre Toulouse et Massif central, le Tarn est dominé par Albi, cité épiscopale classée à l’UNESCO avec sa cathédrale de briques et le musée Toulouse-Lautrec. Cordes-sur-Ciel domine la vallée, et le Sidobre aligne ses chaos de granit. Les vignes de Gaillac produisent des vins variés, et l’ail rose de Lautrec est une IGP appréciée.",
    tourismUrl: "https://www.tourisme-tarn.com",
    siteName: "Tarn Tourisme",
  },
  82: {
    description:
      "Au confluent de la Garonne, du Tarn et de l’Aveyron, le Tarn-et-Garonne séduit avec Montauban, ville d’Ingres, Moissac et son cloître roman classé à l’UNESCO, et Auvillar, village de briques et de galets. Saint-Antonin-Noble-Val s’adosse à de beaux rochers. Le chasselas de Moissac AOP est un raisin de table renommé.",
    tourismUrl: "https://www.tourisme-tarnetgaronne.fr", // à vérifier
    siteName: "Tarn-et-Garonne Tourisme",
  },
  83: {
    description:
      "Entre Saint-Tropez et les gorges du Verdon, le Var offre une côte aux plages de rêve, l’archipel des îles d’Hyères avec Porquerolles et Port-Cros, l’abbaye du Thoronet et Fréjus la romaine. Toulon fait face à sa rade. Le bandol, le rosé de Provence et la tarte tropézienne, née à Saint-Tropez, font la réputation de la gastronomie varoise.",
    tourismUrl: "https://www.visitvar.fr",
    siteName: "Visit Var",
  },
  84: {
    description:
      "Au cœur de la Provence, le Vaucluse offre Avignon et son palais des Papes classé à l’UNESCO, Orange et son théâtre antique, le Luberon, avec Gordes et Roussillon aux ocres rouges. Le mont Ventoux domine l’horizon, géant du Tour de France. Châteauneuf-du-Pape, le melon de Cavaillon et les berlingots de Carpentras font la renommée du département.",
    tourismUrl: "https://www.vaucluseprovence.com",
    siteName: "Vaucluse Provence",
  },
  85: {
    description:
      "Entre bocage, marais et Atlantique, la Vendée est connue pour le Puy du Fou, parc à thème couronné de nombreuses récompenses, les Sables-d’Olonne et leur Vendée Globe, ainsi que les îles de Noirmoutier et d’Yeu. Le marais poitevin y déploie ses canaux. La brioche vendéenne IGP, les mogettes et la sardine rythment la table.",
    tourismUrl: "https://www.vendee-tourisme.com",
    siteName: "Vendée Tourisme",
  },
  86: {
    description:
      "Au cœur du Poitou, la Vienne attire grâce au Futuroscope, parc de l’image, et à Poitiers, dont l’église Notre-Dame-la-Grande arbore une façade sculptée. L’abbaye de Saint-Savin, avec ses fresques romanes, est classée à l’UNESCO. Chauvigny et Montmorillon sont de belles cités médiévales, cette dernière célèbre pour ses macarons.",
    tourismUrl: "https://www.tourisme-vienne.com", // à vérifier
    siteName: "Vienne Tourisme",
  },
  87: {
    description:
      "En Limousin, la Haute-Vienne est connue pour Limoges et sa porcelaine, ses émaux et la gare des Bénédictins. Oradour-sur-Glane conserve la mémoire du massacre de 1944, tandis que Saint-Junien est une ville de gantiers. Les monts de Blond offrent de beaux paysages. Le bœuf limousin et la châtaigne sont des produits phares.",
    tourismUrl: "https://www.tourisme-hautevienne.com", // à vérifier
    siteName: "Haute-Vienne Tourisme",
  },
  88: {
    description:
      "Entre Lorraine et Alsace, les Vosges déploient forêts, lacs et ballons. Gérardmer et son grand lac, Épinal et ses imageries, Plombières-les-Bains, Vittel et Contrexéville, villes d’eaux, jalonnent le département. Domrémy-la-Pucelle est le village natal de Jeanne d’Arc. La tarte aux myrtilles et le munster sont les saveurs vosgiennes.",
    tourismUrl: "https://www.tourisme-vosges.com", // à vérifier
    siteName: "Vosges Tourisme",
  },
  89: {
    description:
      "Aux portes de la Bourgogne, l’Yonne réunit Auxerre et sa cathédrale, Vézelay et sa basilique classée à l’UNESCO, point de départ de pèlerins, Sens, Noyers-sur-Serein et le chantier médiéval de Guédelon. Chablis et Irancy produisent des vins réputés, et les gougères, petits choux au fromage, régalent les gourmets.",
    tourismUrl: "https://www.yonne-tourisme.com",
    siteName: "Yonne Tourisme",
  },
  90: {
    description:
      "Entre Vosges et Jura, le Territoire de Belfort est dominé par Belfort, sa citadelle de Vauban et son célèbre Lion sculpté par Bartholdi dans la roche. Le festival des Eurockéennes se tient chaque été au lac du Malsaucy. Le ballon d’Alsace offre de belles vues sur la région. La cancoillotte, fromage fondu, est une spécialité locale.",
    tourismUrl: "https://www.belfort-tourisme.com",
    siteName: "Belfort Tourisme",
  },
  91: {
    description:
      "Au sud de Paris, l’Essonne réunit Étampes, ville médiévale à la tour Guinette, le château de Courances et ses jardins, et la chapelle décorée par Cocteau à Milly-la-Forêt, connue pour ses plantes médicinales. La Ferté-Alais accueille un meeting aérien. Le haricot d’Arpajon et le cresson de Méréville sont des produits locaux.",
    tourismUrl: "https://www.essonnetourisme.com",
    siteName: "Essonne Tourisme",
  },
  92: {
    description:
      "À l’ouest de Paris, les Hauts-de-Seine mêlent La Défense et son quartier d’affaires, la manufacture de Sèvres et ses porcelaines, le château de Sceaux et son parc dessiné par Le Nôtre, ou la maison de Chateaubriand à la Vallée-aux-Loups. Le parc de Saint-Cloud offre une belle promenade, entre art, histoire et architecture.",
    tourismUrl: "https://www.tourisme92.com",
    siteName: "Tourisme 92",
  },
  93: {
    description:
      "Au nord de Paris, la Seine-Saint-Denis possède la basilique de Saint-Denis, nécropole des rois de France et berceau de l’art gothique, le Stade de France et les Puces de Saint-Ouen, immense marché d’antiquités. Le canal de l’Ourcq se longe à pied ou à vélo. Montreuil est célèbre pour ses murs à pêches, héritage horticole.",
    tourismUrl: "https://www.tourisme93.com",
    siteName: "Tourisme 93",
  },
  94: {
    description:
      "Au sud-est de Paris, le Val-de-Marne offre le château de Vincennes et son donjon, les guinguettes des bords de Marne et Rungis, plus grand marché de produits frais du monde. Le MAC VAL, à Vitry-sur-Seine, expose l’art contemporain. Les berges de la Marne invitent à la promenade, à pied ou à vélo, à deux pas de la capitale.",
    tourismUrl: "https://www.tourisme-valdemarne.com", // à vérifier
    siteName: "Val-de-Marne Tourisme",
  },
  95: {
    description:
      "Au nord-ouest de Paris, le Val-d’Oise est le pays de Van Gogh, mort à Auvers-sur-Oise où l’on visite l’auberge Ravoux. Le château d’Écouen abrite le musée de la Renaissance, et l’abbaye de Royaumont accueille concerts et expositions. Le Vexin français, parc naturel régional, offre moulins, fermes et villages de caractère.",
    tourismUrl: "https://www.tourisme-valdoise.com", // à vérifier
    siteName: "Val-d’Oise Tourisme",
  },
  971: {
    description:
      "Papillon des Caraïbes, la Guadeloupe est formée de la Basse-Terre et de la Grande-Terre. La Soufrière, volcan toujours actif, domine le parc national, et la réserve Cousteau abrite des fonds marins riches. Les Saintes et Marie-Galante sont des îles de rêve. Le colombo, les accras de morue et le rhum agricole font vibrer les papilles.",
    tourismUrl: "https://www.lesilesdeguadeloupe.com",
    siteName: "Les Îles de Guadeloupe",
  },
  972: {
    description:
      "Île aux fleurs, la Martinique est dominée par la montagne Pelée, volcan qui détruisit Saint-Pierre en 1902. Fort-de-France abrite la bibliothèque Schœlcher, et Sainte-Anne ses plages des Salines. Les Trois-Îlets sont le berceau de Joséphine de Beauharnais. Le rhum agricole AOC, le ti-punch, le colombo et les accras sont des classiques.",
    tourismUrl: "https://www.martinique.org",
    siteName: "Martinique Tourisme",
  },
  973: {
    description:
      "Vaste territoire d’Amérique du Sud, la Guyane est couverte à plus de 90 % par la forêt amazonienne. Kourou accueille le Centre spatial guyanais, d’où partent les fusées européennes. Les îles du Salut rappellent l’ancien bagne, et Cayenne séduit par son marché. Le bouillon d’awara, plat de Pâques, et le colombo sont des spécialités.",
    tourismUrl: "https://www.guyane-amazonie.fr",
    siteName: "Guyane Amazonie",
  },
  974: {
    description:
      "Île volcanique de l’océan Indien, La Réunion est dominée par le piton de la Fournaise, l’un des volcans les plus actifs du monde. Les cirques de Mafate, Salazie et Cilaos, classés à l’UNESCO, offrent des randonnées uniques. Le lagon de l’Hermitage borde de belles plages. Le rougail saucisse, le cari et la vanille Bourbon sont ses trésors.",
    tourismUrl: "https://www.reunion.fr",
    siteName: "La Réunion Tourisme",
  },
  976: {
    description:
      "Entre Madagascar et l’Afrique, Mayotte est entourée d’un des plus grands lagons fermés du monde, protégé par une double barrière de corail. Tortues vertes et baleines à bosse y croisent. Le maki, lémurien emblématique, vit dans les forêts, et l’ylang-ylang parfume les cultures. Le mataba et le pilao font partie de la cuisine locale.",
    tourismUrl: "https://www.mayotte-tourisme.com",
    siteName: "Mayotte Tourisme",
  },
};

export default depInfo;
