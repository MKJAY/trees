import type { Tree } from '../types/tree.type';
import { SALT_SPRAY_TOLERANCE_SCHEMA, SALT_TOLERANCE_SCHEMA } from './schemas.constant';

export const TREES: Tree[] = [
	{
		id: '377516a5-cc75-4162-8f7a-fbcbb475bf7a',
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
		similarTrees: [
			{
				id: '377516a5-cc75-4162-8f7a-fbcbb475bf7a',
				differences: [
					'Grotere naalden (3 - 5 cm lang) t.o.v. {scientificName} (1 - 3 cm lang)',
					'Beharste knoppen t.o.v. {scientificName}'
				]
			}
		]
	},
	{
		id: '24e23bd9-8a52-4ac5-8c4f-c7a8facc6fef',
		scientificName: 'Acer campestre',
		dutchName: { value: 'Veldesdoorn' },
		otherDutchNames: ['Spaanse aak'],
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
		id: 'f6b02973-d725-4bb7-993b-c8f242aa8888',
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
		id: '888afce4-4592-4e26-bff0-890b7686c7d9',
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
		id: '28dff984-7531-4189-8a39-6fc42ba4c08c',
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
		id: 'ea0565c0-23b7-4722-afb1-9960e14a4302',
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
		id: '303406fe-f2aa-4785-bb29-d03a522d6607',
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
		id: '996730f9-2324-4c15-919d-0b4c6b0b2867',
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
		id: 'a2e4ddc6-183c-4fd7-8ccd-e486b00e59f1',
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
		id: 'ad5f5128-3088-439b-8418-75c0ba577c3d',
		scientificName: "Alnus x spaethii 'Spaeth'",
		dutchName: {
			value: 'Spaeths els',
			isDisabled: true
		},
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
		id: '5b329ef7-3907-4d2b-b01c-1ed688752092',
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
		id: '28433d91-e60f-4a7b-b75d-e751be2e3065',
		scientificName: 'Platanus x hispanica',
		otherScientificNames: ['Platanus x acerifolia'],
		dutchName: { value: 'Gewone plataan' },
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
		id: '1573336e-89f0-434c-abbe-375a8f7a1765',
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
		id: 'f9ec8611-8ce1-41cb-a5dd-4c6c669bc245',
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
		id: '15d3a7c4-df2d-44c3-aabb-082a2798e305',
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
		id: '6ba43d3c-99cd-4496-9733-f404ff993782',
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
		id: 'ea822d32-f3b0-4c68-9d59-f519ec5bdf09',
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
		id: '3e32e7b5-5705-4a64-a728-e193c326ff5f',
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
		id: 'faac40fb-f513-4173-aa4b-1cd557a2f75e',
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
		id: '7206d5da-89fb-46af-894f-4e1ecf686cfb',
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
		id: '21448385-3e87-4b64-b79e-c44124f86c65',
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
		id: 'c9bc7f6b-ad48-4545-bf9c-779bf29647a6',
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
		id: '847a4925-9048-45ce-a037-701703152b95',
		scientificName: 'Aesculus hippocastanum',
		dutchName: { value: 'Witte paardenkastanje' },
		otherDutchNames: ['Paardenkastanje'],
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
		id: '4dc1a8f4-93ce-43e3-b2da-647f16063e76',
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
		id: '95fa2467-74ff-49c7-9118-f0d72f83bcad',
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
		id: '18d73b55-95ce-4a46-be69-e5e82ec9a2f2',
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
		id: '90d4708e-baa6-45cd-9777-71d6ec175d02',
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
		id: '81fcda01-5552-4ae8-8ac3-492c8261dcd8',
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
		id: 'c779601f-9896-4f76-ae42-9c32edf90bf1',
		scientificName: 'Tilia x europaea',
		dutchName: { value: 'Hollandse linde' },
		otherDutchNames: ['Gewone linde'],
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
		id: '390ee051-f7e9-4bc8-b10a-a3d37f41942c',
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
		id: 'ada545b3-3f3a-4c06-ac28-866febbf8cc1',
		scientificName: 'Acer pseudoplatanus',
		dutchName: { value: 'Gewone esdoorn' },
		otherDutchNames: ['Bergesdoorn'],
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
		id: '083c7538-3768-4104-88b6-772cda809927',
		scientificName: 'Acer platanoides',
		dutchName: { value: 'Noorse esdoorn' },
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
		id: '2b0e46b5-ba31-42c5-bea2-9df222776fea',
		scientificName: 'Aesculus x carnea',
		dutchName: { value: 'Rode paardenkastanje' },
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
		id: 'da2d4f57-7746-45c4-988d-e02d23820d97',
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
	}
];
