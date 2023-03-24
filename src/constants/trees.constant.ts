import type { Tree } from '../types/tree.type';

export const TREES: Tree[] = [
	{
		id: '377516a5-cc75-4162-8f7a-fbcbb475bf7a',
		scientificNames: ['Abies alba'],
		dutchNames: ['Zilverspar', 'Gewone zilverspar', 'Zilverden', 'Gewone zilverden'],
		images: [
			{
				label: 'Boom',
				source: 'images/abies-alba/tree-1.jpg'
			},
			{
				label: 'Naald bovenkant',
				source: 'images/abies-alba/leaf-1.jpg'
			},
			{
				label: 'Naald onderkant',
				source: 'images/abies-alba/leaf-2.jpg'
			},
			{
				label: 'Fruit',
				source: 'images/abies-alba/fruit-1.jpg'
			},
			{
				label: 'Schors',
				source: 'images/abies-alba/bark-1.jpg'
			}
		],
		speciesSpecificCharacteristics: {},
		determinationCharacteristics: [
			'Twee wit-grijze strepen aan de onderkant van de naalden',
			'Citrusgeur bij het kneuzen van de naalden'
		],
		similarTrees: [
			{
				id: '16c56a9e-972e-4891-bc7a-1fdd4f3fa52d',
				differences: [
					'Kleinere naalden (1 - 3 cm lang) t.o.v. {scientificName} (3 - 5 cm lang)',
					'Onbeharste knoppen t.o.v. {scientificName}'
				]
			}
		]
	},
	{
		id: '16c56a9e-972e-4891-bc7a-1fdd4f3fa52d',
		scientificNames: ['Abies grandis'],
		dutchNames: ['Reuzenzilverspar', 'Reuzenzilverden'],
		images: [
			{
				label: 'Boom',
				source: 'images/abies-grandis/tree-1.jpg'
			},
			{
				label: 'Naald bovenkant',
				source: 'images/abies-grandis/leaf-1.jpg'
			},
			{
				label: 'Naald onderkant',
				source: 'images/abies-grandis/leaf-2.jpg'
			},
			{
				label: 'Fruit',
				source: 'images/abies-grandis/fruit-1.jpg'
			},
			{
				label: 'Schors',
				source: 'images/abies-grandis/bark-1.jpg'
			}
		],
		speciesSpecificCharacteristics: {},
		determinationCharacteristics: [
			'Twee wit-grijze strepen aan de onderkant van de naalden',
			'Citrusgeur bij het kneuzen van de naalden en twijgen'
		],
		similarTrees: [
			{
				id: '377516a5-cc75-4162-8f7a-fbcbb475bf7a',
				differences: [
					'Grotere naalden (3 - 5 cm lang) t.o.v. {scientificName} (1 - 3 cm lang)',
					'Beharste knoppen t.o.v. {scientificName}'
				]
			}
		]
	}
];
