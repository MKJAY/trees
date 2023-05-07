import type { TreeSpecies } from '../types/tree-species.type';
import { SALT_SPRAY_TOLERANCE_SCHEMA, SALT_TOLERANCE_SCHEMA } from './schemas.constant';

export const TREE_SPECIES: TreeSpecies[] = [
	{
		scientificName: 'Abies alba',
		dutchName: { value: 'Zilverspar' },
		otherDutchNames: ['Zilverden'],
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
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		},
		determinationCharacteristics: [
			'Twee wit-grijze strepen aan de onderkant van de naalden',
			'Citrusgeur bij het kneuzen van de naalden'
		],
		similarTreeSpecies: [
			{
				scientificName: 'Abies grandis',
				differences: [
					'Kleinere naalden (1 - 3 cm lang) t.o.v. {scientificName} (3 - 5 cm lang)',
					'Onbeharste knoppen t.o.v. {scientificName}'
				]
			}
		]
	},
	{
		scientificName: 'Abies grandis',
		dutchName: { value: 'Reuzenzilverspar' },
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
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		},
		determinationCharacteristics: [
			'Twee wit-grijze strepen aan de onderkant van de naalden',
			'Citrusgeur bij het kneuzen van de naalden en twijgen'
		],
		similarTreeSpecies: [
			{
				scientificName: 'Abies alba',
				differences: [
					'Grotere naalden (3 - 5 cm lang) t.o.v. {scientificName} (1 - 3 cm lang)',
					'Beharste knoppen t.o.v. {scientificName}'
				]
			}
		]
	},
	{
		scientificName: 'Acer campestre',
		dutchName: { value: 'Veldesdoorn' },
		otherDutchNames: ['Spaanse aak'],
		images: [
			{
				label: 'Blad',
				source: 'images/acer-campestre/leaf-1.jpeg'
			},
		],
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [1]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2]
			}
		}
	},
	{
		scientificName: 'Robinia pseudoacacia',
		dutchName: { value: 'Valse acacia' },
		otherDutchNames: ['Gewone acacia', 'Schijnacacia', 'Witte acacia', 'Robinia'],
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [1]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2]
			}
		}
	},
	{
		scientificName: 'Quercus robur',
		dutchName: { value: 'Zomereik' },
		otherDutchNames: ['Inlandse eik'],
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [1]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2]
			}
		}
	},
	{
		scientificName: 'Quercus petraea',
		dutchName: { value: 'Wintereik' },
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [1]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Quercus rubra',
		dutchName: { value: 'Amerikaanse eik' },
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [1]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Alnus cordata',
		dutchName: { value: 'Hartbladige els' },
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [1]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Alnus glutinosa',
		dutchName: { value: 'Zwarte els' },
		otherDutchNames: ['Gewone els'],
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [1]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Alnus incana',
		dutchName: { value: 'Witte els' },
		otherDutchNames: ['Grijze els'],
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [1]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [1]
			}
		}
	},
	{
		scientificName: "Alnus x spaethii 'Spaeth'",
		dutchName: {
			value: 'Spaeths els',
			isDisabled: true
		},
		crossedTreeSpeciesScientificNames: ['Alnus japonica', 'Alnus subcordata'],
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [1]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Gleditsia triacanthos',
		dutchName: { value: 'Valse Christusdoorn' },
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [1]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2]
			}
		}
	},
	{
		scientificName: 'Platanus x hispanica',
		otherScientificNames: ['Platanus x acerifolia'],
		dutchName: { value: 'Gewone plataan' },
		crossedTreeSpeciesScientificNames: ['Platanus orientalis', 'Platanus occidentalis'],
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [1]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [1]
			}
		}
	},
	{
		scientificName: 'Betula pendula',
		dutchName: { value: 'Ruwe berk' },
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [1]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Styphnolobium japonicum',
		otherScientificNames: ['Sophora japonica'],
		dutchName: { value: 'Honingboom' },
		otherDutchNames: ['Japanse honingboom'],
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [1]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Populus alba',
		dutchName: { value: 'Witte abeel' },
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [1]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2]
			}
		}
	},
	{
		scientificName: 'Ginkgo biloba',
		dutchName: { value: 'Japanse notenboom' },
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [1]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Ailanthus altissima',
		dutchName: { value: 'Hemelboom' },
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [1]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Fraxinus excelsior',
		dutchName: { value: 'Gewone es' },
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2]
			}
		}
	},
	{
		scientificName: 'Crataegus monogyna',
		dutchName: { value: 'Eénstijlige meidoorn' },
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Sorbus aucuparia',
		dutchName: { value: 'Gewone lijsterbes' },
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Fagus sylvatica',
		dutchName: { value: 'Gewone beuk' },
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Carpinus betulus',
		dutchName: { value: 'Gewone haagbeuk' },
		otherDutchNames: ['Haagbeuk'],
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Aesculus hippocastanum',
		dutchName: { value: 'Witte paardenkastanje' },
		otherDutchNames: ['Paardenkastanje'],
		images: [
			{
				label: 'Blad',
				source: 'images/aesculus-hippocastanum/leaf-1.webp'
			},
		],
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Prunus avium',
		dutchName: { value: 'Boskers' },
		otherDutchNames: ['Zoete kers', 'Wilde kers'],
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Salix alba',
		dutchName: { value: 'Schietwilg' },
		otherDutchNames: ['Gewone wilg', 'Witte wilg'],
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Tilia cordata',
		dutchName: { value: 'Winterlinde' },
		otherDutchNames: ['Kleinbladige linde'],
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Tilia platyphyllos',
		dutchName: { value: 'Zomerlinde' },
		otherDutchNames: ['Grootbladige linde'],
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Tilia tomentosa',
		dutchName: { value: 'Zilverlinde' },
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Tilia x europaea',
		dutchName: { value: 'Hollandse linde' },
		otherDutchNames: ['Gewone linde'],
		crossedTreeSpeciesScientificNames: ['Tilia cordata', 'Tilia platyphyllos'],
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Populus nigra',
		dutchName: { value: 'Zwarte populier' },
		otherDutchNames: ['Europese zwarte populier', 'Italiaanse populier'],
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2]
			}
		}
	},
	{
		scientificName: 'Acer pseudoplatanus',
		dutchName: { value: 'Gewone esdoorn' },
		otherDutchNames: ['Bergesdoorn'],
		images: [
			{
				label: 'Blad',
				source: 'images/acer-pseudoplatanus/leaf-1.jpg'
			},
		],
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2]
			}
		}
	},
	{
		scientificName: 'Acer platanoides',
		dutchName: { value: 'Noorse esdoorn' },
		images: [
			{
				label: 'Blad',
				source: 'images/acer-platanoides/leaf-1.jpeg'
			},
		],
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2]
			}
		}
	},
	{
		scientificName: 'Aesculus x carnea',
		dutchName: { value: 'Rode paardenkastanje' },
		crossedTreeSpeciesScientificNames: ['Aesculus hippocastanum', 'Aesculus pavia'],
		images: [
			{
				label: 'Blad',
				source: 'images/aesculus-x-carnea/leaf-1.jpg'
			},
		],
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Platanus orientalis',
		dutchName: { value: 'Oosterse plataan' },
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [1]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Acer negundo',
		dutchName: { value: 'Vederesdoorn' },
		otherDutchNames: ['Californische esdoorn'],
		images: [
			{
				label: 'Blad #1',
				source: 'images/acer-negundo/leaf-1.jpg'
			},
			{
				label: 'Blad #2',
				source: 'images/acer-negundo/leaf-2.jfif'
			},
		],
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		},
		notes: [
			'De enige soort binnen het Acer geslacht dat een geveerd blad heeft.',
			'Het blad kan drie of vijf deelblaadjes hebben.',
			'Het blad kan wel of niet diepgesneden zijn.',
		]
	},
	{
		scientificName: 'Acer saccharinum',
		dutchName: { value: 'Zilveresdoorn' },
		otherDutchNames: ['Witte esdoorn'],
		images: [
			{
				label: 'Blad',
				source: 'images/acer-saccharinum/leaf-1.jpeg'
			}
		],
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Acer cappadocicum',
		dutchName: { value: 'Kolchische esdoorn' },
		images: [
			{
				label: 'Blad',
				source: 'images/acer-cappadocicum/leaf-1.jpeg'
			},
		],
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Acer x freemanii',
		dutchName: {
			value: 'Freemans esdoorn',
			isDisabled: true
		},
		crossedTreeSpeciesScientificNames: ['Acer rubrum', 'Acer saccharinum'],
		images: [
			{
				label: 'Blad #1',
				source: 'images/acer-x-freemanii/leaf-1.jpg'
			},
			{
				label: 'Blad #2',
				source: 'images/acer-x-freemanii/leaf-2.jpg'
			},
		],
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Acer rubrum',
		dutchName: { value: 'Rode esdoorn' },
		images: [
			{
				label: 'Blad #1',
				source: 'images/acer-rubrum/leaf-1.jpeg'
			},
			{
				label: 'Blad #2',
				source: 'images/acer-rubrum/leaf-2.webp'
			},
		],
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Betula utilis',
		dutchName: { value: 'Himalayaberk' },
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Betula nigra',
		dutchName: { value: 'Zwarte berk' },
		otherDutchNames: ['Rode berk'],
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Betula pubescens',
		dutchName: { value: 'Zachte berk' },
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Castanea sativa',
		dutchName: { value: 'Tamme kastanje' },
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Catalpa bignonioides',
		dutchName: { value: 'Trompetboom' },
		otherDutchNames: ['Grote trompetboom'],
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Cedrus libani',
		dutchName: { value: 'Libanonceder' },
		otherDutchNames: ['Atlasceder'],
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Cercidiphyllum japonicum',
		dutchName: { value: 'Katsuraboom' },
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Chamaecyparis lawsoniana',
		dutchName: { value: 'Californische cypres' },
		otherDutchNames: ['Schijncypres'],
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Corylus colurna',
		dutchName: { value: 'Boomhazelaar' },
		otherDutchNames: ['Turkse hazelaar'],
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Davidia involucrata',
		dutchName: { value: 'Vaantjesboom ' },
		otherDutchNames: ['Zakdoekenboom', 'Luierboom'],
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Fraxinus angustifolia',
		dutchName: { value: 'Smalbladige es' },
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			}
		}
	},
	{
		scientificName: 'Fraxinus ornus',
		dutchName: { value: 'Pluimes' },
		otherDutchNames: ['Bloem-es', 'Manna-es'],
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [1]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Fraxinus americana',
		dutchName: { value: 'Amerikaanse es' },
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [1]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Juglans regia',
		dutchName: { value: 'Gewone walnoot' },
		otherDutchNames: ['Gewone notelaar', 'Okkernoot'],
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Juglans nigra',
		dutchName: { value: 'Zwarte walnoot' },
		otherDutchNames: ['Zwarte notelaar'],
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Koelreuteria paniculata',
		dutchName: { value: 'Lampionboom' },
		otherDutchNames: ['Blazenboom', 'Chinese vernisboom', 'Gele zeepboom'],
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Laburnum x watereri',
		dutchName: { value: 'Goude regen' },
		crossedTreeSpeciesScientificNames: ['Laburnum anagyroides', 'Laburnum alpinum'],
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Larix decidua',
		dutchName: { value: 'Europese lork' },
		otherDutchNames: ['Europese lariks'],
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Liquidambar styraciflua',
		dutchName: { value: 'Amberboom' },
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			}
		}
	},
	{
		scientificName: 'Liriodendron tulipifera',
		dutchName: { value: 'Tulpenboom' },
		otherDutchNames: ['Amerikaanse tulpenboom'],
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Magnolia kobus',
		dutchName: {
			value: 'Beverboom',
			isDisabled: true
		},
		otherDutchNames: ['Noordelijke Japanse magnolia'],
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [1]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Malus sylvestris',
		dutchName: { value: 'Wilde appel' },
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Metasequoia glyptostroboides',
		dutchName: { value: 'Watercypres' },
		otherDutchNames: ['Chinese watercypres'],
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Morus alba',
		dutchName: { value: 'Witte moerbei' },
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			}
		}
	},
	{
		scientificName: 'Morus nigra',
		dutchName: { value: 'Zwarte moerbei' },
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			}
		}
	},
	{
		scientificName: 'Nothofagus antarctica',
		dutchName: { value: 'Schijnbeuk' },
		otherDutchNames: ['Zuidelijke beuk'],
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Ostrya carpinifolia',
		dutchName: { value: 'Europese hopbeuk' },
		otherDutchNames: ['Hopbeuk'],
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Parrotia persica',
		dutchName: { value: 'Perzisch ijzerhout' },
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Paulownia tomentosa',
		dutchName: { value: 'Anna Paulowniaboom' },
		otherDutchNames: ['Anna Paulowna boom'],
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Picea abies',
		dutchName: { value: 'Fijnspar' },
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Pinus nigra',
		dutchName: { value: 'Zwarte den' },
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Pinus sylvestris',
		dutchName: { value: 'Grove den' },
		otherDutchNames: ['Vliegden'],
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Populus x canescens',
		dutchName: { value: 'Grauwe abeel' },
		otherDutchNames: ['Grijze abeel'],
		crossedTreeSpeciesScientificNames: ['Populus alba', 'Populus tremula'],
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [1]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Populus tremula',
		dutchName: { value: 'Ratelpopulier' },
		otherDutchNames: ['Trilpopulier', 'Esp'],
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [1]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Populus x canadensis',
		otherScientificNames: ['Populus x euramericana'],
		dutchName: { value: 'Canadapopulier' },
		otherDutchNames: ['Canadese populier', 'Zwarte hybride populier'],
		crossedTreeSpeciesScientificNames: ['Populus deltoides', 'Populus nigra'],
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Prunus cerasifera',
		dutchName: { value: 'Kerspruim' },
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Prunus serrulata',
		dutchName: { value: 'Japanse sierkers' },
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Prunus padus',
		dutchName: { value: 'Europese vogelkers' },
		otherDutchNames: ['Gewone vogelkers'],
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Prunus serotina',
		dutchName: { value: 'Amerikaanse vogelkers' },
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Pseudotsuga menziesii',
		dutchName: { value: 'Douglasspar' },
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Pterocarya fraxinifolia',
		dutchName: { value: 'Kaukasische vleugelnoot' },
		otherDutchNames: ['Gewone vleugelnoot'],
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Pyrus calleryana',
		dutchName: {
			value: 'Callery-peer',
			isDisabled: true
		},
		otherDutchNames: ['Sierpeer'],
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Quercus cerris',
		dutchName: { value: 'Moseik' },
		otherDutchNames: ['Turkse eik'],
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [1]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Quercus frainetto',
		dutchName: { value: 'Hongaarse eik' },
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [1]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Quercus palustris',
		dutchName: { value: 'Moeraseik' },
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [1]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Quercus ilex',
		dutchName: { value: 'Steeneik' },
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [1]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Quercus phellos',
		dutchName: { value: 'Wilgbladige eik' },
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [1]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: "Quercus x turneri 'Pseudoturneri'",
		dutchName: { value: 'Turners eik' },
		otherDutchNames: ['Oostenrijkse eik'],
		crossedTreeSpeciesScientificNames: ['Quercus ilex', 'Quercus robur'],
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [1]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Quercus x hispanica',
		dutchName: {
			value: 'Spaanse eik',
			isDisabled: true
		},
		crossedTreeSpeciesScientificNames: ['Quercus cerris', 'Quercus suber'],
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [1]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: "Salix x sepulcralis 'Chrysocoma'",
		dutchName: { value: 'Gele treurwilg' },
		otherDutchNames: ['Treurwilg'],
		crossedTreeSpeciesScientificNames: ['Salix babylonica', "Salix alba 'Vitellina'"],
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Sequoiadendron giganteum',
		dutchName: { value: 'Mammoetboom' },
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Sorbus aria',
		dutchName: { value: 'Meelbes' },
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Sorbus intermedia',
		dutchName: { value: 'Zweedse meelbes' },
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Taxodium distichum',
		dutchName: { value: 'Moerascypres' },
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Taxus baccata',
		dutchName: { value: 'Venijnboom' },
		otherDutchNames: ['Gewone taxus'],
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Thuja plicata',
		dutchName: { value: 'Reuzenlevensboom' },
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Ulmus minor',
		dutchName: { value: 'Gladde iep' },
		otherDutchNames: ['Veldiep'],
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Ulmus glabra',
		dutchName: { value: 'Ruwe iep' },
		otherDutchNames: ['Bergiep'],
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	},
	{
		scientificName: 'Zelkova serrata',
		dutchName: { value: 'Japanse zelkova' },
		otherDutchNames: ['Japanse schijniep'],
		speciesSpecificCharacteristics: {
			saltToleranceSchema: {
				...SALT_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			}
		}
	}
];
