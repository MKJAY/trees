import type { TreeSpecies } from '../types/tree-species';
import {
	AIR_POLLUTION_TOLERANCE_SCHEMA,
	BRANCH_BREAK_TOLERANCE_SCHEMA,
	COASTAL_WIND_TOLERANCE_SCHEMA,
	SALT_IN_SOIL_TOLERANCE_SCHEMA,
	SALT_SPRAY_TOLERANCE_SCHEMA,
	SOIL_COMPACTION_TOLERANCE_SCHEMA,
	SPRING_FROST_TOLERANCE_SCHEMA,
	WINDTHROW_TOLERANCE_SCHEMA
} from './schemas';

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
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
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
		],
		isETW: true
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
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
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
		],
		isETW: true
	},
	{
		scientificName: 'Acer campestre',
		dutchName: { value: 'Veldesdoorn' },
		otherDutchNames: ['Spaanse aak'],
		images: [
			{
				label: 'Blad',
				source: 'images/acer-campestre/leaf-1.jpeg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [1]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2]
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2]
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Robinia pseudoacacia',
		dutchName: { value: 'Valse acacia' },
		otherDutchNames: ['Gewone acacia', 'Schijnacacia', 'Witte acacia', 'Robinia'],
		images: [
			{
				label: 'Blad',
				source: 'images/robinia-pseudoacacia/leaf-1.jpg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [1]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2]
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Quercus robur',
		dutchName: { value: 'Zomereik' },
		otherDutchNames: ['Inlandse eik'],
		images: [
			{
				label: 'Blad',
				source: 'images/quercus-robur/leaf-1.jpg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [1]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2]
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Quercus petraea',
		dutchName: { value: 'Wintereik' },
		images: [
			{
				label: 'Blad',
				source: 'images/quercus-petraea/leaf-1.webp'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [1]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Quercus rubra',
		dutchName: { value: 'Amerikaanse eik' },
		images: [
			{
				label: 'Blad #1',
				source: 'images/quercus-rubra/leaf-1.jpeg'
			},
			{
				label: 'Blad #2',
				source: 'images/quercus-rubra/leaf-2.webp'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [1]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Alnus cordata',
		dutchName: { value: 'Hartbladige els' },
		images: [
			{
				label: 'Blad',
				source: 'images/alnus-cordata/leaf-1.jpg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [1]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2]
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Alnus glutinosa',
		dutchName: { value: 'Zwarte els' },
		otherDutchNames: ['Gewone els'],
		images: [
			{
				label: 'Blad #1',
				source: 'images/alnus-glutinosa/leaf-1.jpg'
			},
			{
				label: 'Blad #2',
				source: 'images/alnus-glutinosa/leaf-2.jpeg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [1]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2]
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Alnus incana',
		dutchName: { value: 'Witte els' },
		otherDutchNames: ['Grijze els'],
		images: [
			{
				label: 'Blad',
				source: 'images/alnus-incana/leaf-1.jpg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [1]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [1]
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: "Alnus x spaethii 'Spaeth'",
		dutchName: {
			value: 'Spaeths els',
			isDisabled: true
		},
		crossedTreeSpeciesScientificNames: ['Alnus japonica', 'Alnus subcordata'],
		images: [
			{
				label: 'Blad',
				source: "images/alnus-x-spaethii-'spaeth'/leaf-1.webp"
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [1]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Gleditsia triacanthos',
		dutchName: { value: 'Valse Christusdoorn' },
		images: [
			{
				label: 'Blad',
				source: 'images/gleditsia-triacanthos/leaf-1.jpg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [1]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2]
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Platanus x hispanica',
		otherScientificNames: ['Platanus x acerifolia'],
		dutchName: { value: 'Gewone plataan' },
		crossedTreeSpeciesScientificNames: ['Platanus orientalis', 'Platanus occidentalis'],
		images: [
			{
				label: 'Blad',
				source: 'images/platanus-x-hispanica/leaf-1.jpg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [1]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [1]
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [1]
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Betula pendula',
		dutchName: { value: 'Ruwe berk' },
		images: [
			{
				label: 'Blad',
				source: 'images/betula-pendula/leaf-1.jpg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [1]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		similarTreeSpecies: [
			{
				scientificName: 'Betula pubescens',
				differences: [
					'Geen behaarde jonge takken t.o.v. Betula pubescens',
					'Takken hangen meestal naar beneden zoals een treurvorm t.o.v. Betula pubescens'
				]
			}
		],
		isETW: true
	},
	{
		scientificName: 'Styphnolobium japonicum',
		otherScientificNames: ['Sophora japonica'],
		dutchName: { value: 'Honingboom' },
		otherDutchNames: ['Japanse honingboom'],
		images: [
			{
				label: 'Blad',
				source: 'images/styphnolobium-japonicum/leaf-1.jpg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [1]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Populus alba',
		dutchName: { value: 'Witte abeel' },
		images: [
			{
				label: 'Blad bovenkant #1',
				source: 'images/populus-alba/leaf-1.jpeg'
			},
			{
				label: 'Blad bovenkant #2',
				source: 'images/populus-alba/leaf-2.jpg'
			},
			{
				label: 'Blad onderkant',
				source: 'images/populus-alba/leaf-3.jpg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [1]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2]
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2]
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Ginkgo biloba',
		dutchName: { value: 'Japanse notenboom' },
		images: [
			{
				label: 'Blad',
				source: 'images/ginkgo-biloba/leaf-1.jpg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [1]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [1]
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Ailanthus altissima',
		dutchName: { value: 'Hemelboom' },
		images: [
			{
				label: 'Blad',
				source: 'images/ailanthus-altissima/leaf-1.png'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [1]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Fraxinus excelsior',
		dutchName: { value: 'Gewone es' },
		images: [
			{
				label: 'Blad',
				source: 'images/fraxinus-excelsior/leaf-1.jpg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2]
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2]
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Crataegus monogyna',
		dutchName: { value: 'Eénstijlige meidoorn' },
		images: [
			{
				label: 'Blad',
				source: 'images/crataegus-monogyna/leaf-1.jpg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Sorbus aucuparia',
		dutchName: { value: 'Gewone lijsterbes' },
		images: [
			{
				label: 'Blad',
				source: 'images/sorbus-aucuparia/leaf-1.jpeg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Fagus sylvatica',
		dutchName: { value: 'Gewone beuk' },
		images: [
			{
				label: 'Blad',
				source: 'images/fagus-sylvatica/leaf-1.jpeg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Carpinus betulus',
		dutchName: { value: 'Gewone haagbeuk' },
		otherDutchNames: ['Haagbeuk'],
		images: [
			{
				label: 'Blad',
				source: 'images/carpinus-betulus/leaf-1.jpg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Aesculus hippocastanum',
		dutchName: { value: 'Witte paardenkastanje' },
		otherDutchNames: ['Paardenkastanje'],
		images: [
			{
				label: 'Blad',
				source: 'images/aesculus-hippocastanum/leaf-1.webp'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Prunus avium',
		dutchName: { value: 'Boskers' },
		otherDutchNames: ['Zoete kers', 'Wilde kers'],
		images: [
			{
				label: 'Blad #1',
				source: 'images/prunus-avium/leaf-1.jpeg'
			},
			{
				label: 'Blad #2',
				source: 'images/prunus-avium/leaf-2.jpeg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Salix alba',
		dutchName: { value: 'Schietwilg' },
		otherDutchNames: ['Gewone wilg', 'Witte wilg'],
		images: [
			{
				label: 'Blad',
				source: 'images/salix-alba/leaf-1.jpeg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Tilia cordata',
		dutchName: { value: 'Winterlinde' },
		otherDutchNames: ['Kleinbladige linde'],
		images: [
			{
				label: 'Blad bovenkant',
				source: 'images/tilia-cordata/leaf-1.jpg'
			},
			{
				label: 'Blad onderkant',
				source: 'images/tilia-cordata/leaf-2.jpg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2]
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Tilia platyphyllos',
		dutchName: { value: 'Zomerlinde' },
		otherDutchNames: ['Grootbladige linde'],
		images: [
			{
				label: 'Blad bovenkant',
				source: 'images/tilia-platyphyllos/leaf-1.jpeg'
			},
			{
				label: 'Blad onderkant',
				source: 'images/tilia-platyphyllos/leaf-2.jpg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Tilia tomentosa',
		dutchName: { value: 'Zilverlinde' },
		images: [
			{
				label: 'Blad',
				source: 'images/tilia-tomentosa/leaf-1.jpg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2]
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Tilia x europaea',
		dutchName: { value: 'Hollandse linde' },
		otherDutchNames: ['Gewone linde'],
		crossedTreeSpeciesScientificNames: ['Tilia cordata', 'Tilia platyphyllos'],
		images: [
			{
				label: 'Blad',
				source: 'images/tilia-x-europaea/leaf-1.jpeg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Populus nigra',
		dutchName: { value: 'Zwarte populier' },
		otherDutchNames: ['Europese zwarte populier', 'Italiaanse populier'],
		images: [
			{
				label: 'Blad #1',
				source: 'images/populus-nigra/leaf-1.jpg'
			},
			{
				label: 'Blad #2',
				source: 'images/populus-nigra/leaf-2.jpg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2]
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2]
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Acer pseudoplatanus',
		dutchName: { value: 'Gewone esdoorn' },
		otherDutchNames: ['Bergesdoorn'],
		images: [
			{
				label: 'Blad',
				source: 'images/acer-pseudoplatanus/leaf-1.jpg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2]
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2]
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Acer platanoides',
		dutchName: { value: 'Noorse esdoorn' },
		images: [
			{
				label: 'Blad',
				source: 'images/acer-platanoides/leaf-1.jpeg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2]
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Aesculus x carnea',
		dutchName: { value: 'Rode paardenkastanje' },
		crossedTreeSpeciesScientificNames: ['Aesculus hippocastanum', 'Aesculus pavia'],
		images: [
			{
				label: 'Blad',
				source: 'images/aesculus-x-carnea/leaf-1.jpg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Platanus orientalis',
		dutchName: { value: 'Oosterse plataan' },
		images: [
			{
				label: 'Blad',
				source: 'images/platanus-orientalis/leaf-1.jpeg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [1]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [1]
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
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
				source: 'images/acer-negundo/leaf-2.jpg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		notes: [
			'Het blad kan 3, 5 of 7 deelblaadjes hebben.',
			'De deelblaadjes kunnen meer of minder ingesneden zijn.'
		],
		isETW: true
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
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Acer cappadocicum',
		dutchName: { value: 'Kolchische esdoorn' },
		images: [
			{
				label: 'Blad',
				source: 'images/acer-cappadocicum/leaf-1.jpeg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
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
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
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
			{
				label: 'Blad #3',
				source: 'images/acer-rubrum/leaf-3.JPG'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Betula utilis',
		dutchName: { value: 'Himalayaberk' },
		images: [
			{
				label: 'Blad',
				source: 'images/betula-utilis/leaf-1.jpg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Betula nigra',
		dutchName: { value: 'Zwarte berk' },
		otherDutchNames: ['Rode berk'],
		images: [
			{
				label: 'Blad',
				source: 'images/betula-nigra/leaf-1.jpg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Betula pubescens',
		dutchName: { value: 'Zachte berk' },
		images: [
			{
				label: 'Blad',
				source: 'images/betula-pubescens/leaf-1.jpg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		similarTreeSpecies: [
			{
				scientificName: 'Betula pendula',
				differences: [
					'Behaarde jonge takken t.o.v. Betula pendula',
					'Takken hangen meestal niet naar beneden zoals een treurvorm t.o.v. Betula pendula'
				]
			}
		],
		isETW: true
	},
	{
		scientificName: 'Castanea sativa',
		dutchName: { value: 'Tamme kastanje' },
		images: [
			{
				label: 'Blad',
				source: 'images/castanea-sativa/leaf-1.jpg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Catalpa bignonioides',
		dutchName: { value: 'Trompetboom' },
		otherDutchNames: ['Grote trompetboom'],
		images: [
			{
				label: 'Blad',
				source: 'images/catalpa-bignonioides/leaf-1.jpeg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Cedrus libani',
		dutchName: { value: 'Libanonceder' },
		otherDutchNames: ['Atlasceder'],
		images: [
			{
				label: 'Blad',
				source: 'images/cedrus-libani/leaf-1.jpeg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Cercidiphyllum japonicum',
		dutchName: { value: 'Katsuraboom' },
		images: [
			{
				label: 'Blad',
				source: 'images/cercidiphyllum-japonicum/leaf-1.jpg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Chamaecyparis lawsoniana',
		dutchName: { value: 'Californische cypres' },
		otherDutchNames: ['Schijncypres'],
		images: [
			{
				label: 'Blad',
				source: 'images/chamaecyparis-lawsoniana/leaf-1.jpg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Corylus colurna',
		dutchName: { value: 'Boomhazelaar' },
		otherDutchNames: ['Turkse hazelaar'],
		images: [
			{
				label: 'Blad',
				source: 'images/corylus-colurna/leaf-1.jpeg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Davidia involucrata',
		dutchName: { value: 'Vaantjesboom ' },
		otherDutchNames: ['Zakdoekenboom', 'Luierboom'],
		images: [
			{
				label: 'Blad',
				source: 'images/davidia-involucrata/leaf-1.webp'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Fraxinus angustifolia',
		dutchName: { value: 'Smalbladige es' },
		images: [
			{
				label: 'Blad',
				source: 'images/fraxinus-angustifolia/leaf-1.jpeg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Fraxinus ornus',
		dutchName: { value: 'Pluimes' },
		otherDutchNames: ['Bloem-es', 'Manna-es'],
		images: [
			{
				label: 'Blad',
				source: 'images/fraxinus-ornus/leaf-1.webp'
			},
			{
				label: 'Bloem',
				source: 'images/fraxinus-ornus/flower-1.webp'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [1]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2]
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Fraxinus americana',
		dutchName: { value: 'Amerikaanse es' },
		images: [
			{
				label: 'Blad',
				source: 'images/fraxinus-americana/leaf-1.jpeg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [1]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Juglans regia',
		dutchName: { value: 'Gewone walnoot' },
		otherDutchNames: ['Gewone notelaar', 'Okkernoot'],
		images: [
			{
				label: 'Blad',
				source: 'images/juglans-regia/leaf-1.jpg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Juglans nigra',
		dutchName: { value: 'Zwarte walnoot' },
		otherDutchNames: ['Zwarte notelaar'],
		images: [
			{
				label: 'Blad',
				source: 'images/juglans-nigra/leaf-1.jpeg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Koelreuteria paniculata',
		dutchName: { value: 'Lampionboom' },
		otherDutchNames: ['Blazenboom', 'Chinese vernisboom', 'Gele zeepboom'],
		images: [
			{
				label: 'Blad',
				source: 'images/koelreuteria-paniculata/leaf-1.jpeg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Laburnum x watereri',
		dutchName: { value: 'Goude regen' },
		crossedTreeSpeciesScientificNames: ['Laburnum anagyroides', 'Laburnum alpinum'],
		images: [
			{
				label: 'Blad',
				source: 'images/laburnum-x-watereri/leaf-1.jpeg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Larix decidua',
		dutchName: { value: 'Europese lork' },
		otherDutchNames: ['Europese lariks'],
		images: [
			{
				label: 'Blad',
				source: 'images/larix-decidua/leaf-1.webp'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Liquidambar styraciflua',
		dutchName: { value: 'Amberboom' },
		images: [
			{
				label: 'Blad',
				source: 'images/liquidambar-styraciflua/leaf-1.jpg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Liriodendron tulipifera',
		dutchName: { value: 'Tulpenboom' },
		otherDutchNames: ['Amerikaanse tulpenboom'],
		images: [
			{
				label: 'Blad',
				source: 'images/liriodendron-tulipifera/leaf-1.jpg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Magnolia kobus',
		dutchName: {
			value: 'Beverboom',
			isDisabled: true
		},
		otherDutchNames: ['Noordelijke Japanse magnolia'],
		images: [
			{
				label: 'Blad',
				source: 'images/magnolia-kobus/leaf-1.jpeg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [1]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Malus sylvestris',
		dutchName: { value: 'Wilde appel' },
		images: [
			{
				label: 'Blad',
				source: 'images/malus-sylvestris/leaf-1.jpg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Metasequoia glyptostroboides',
		dutchName: { value: 'Watercypres' },
		otherDutchNames: ['Chinese watercypres'],
		images: [
			{
				label: 'Blad',
				source: 'images/metasequoia-glyptostroboides/leaf-1.webp'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Morus alba',
		dutchName: { value: 'Witte moerbei' },
		images: [
			{
				label: 'Blad',
				source: 'images/morus-alba/leaf-1.jpeg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Morus nigra',
		dutchName: { value: 'Zwarte moerbei' },
		images: [
			{
				label: 'Blad',
				source: 'images/morus-nigra/leaf-1.jpg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Nothofagus antarctica',
		dutchName: { value: 'Schijnbeuk' },
		otherDutchNames: ['Zuidelijke beuk'],
		images: [
			{
				label: 'Blad',
				source: 'images/nothofagus-antarctica/leaf-1.jpeg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Ostrya carpinifolia',
		dutchName: { value: 'Europese hopbeuk' },
		otherDutchNames: ['Hopbeuk'],
		images: [
			{
				label: 'Blad',
				source: 'images/ostrya-carpinifolia/leaf-1.jpeg'
			},
			{
				label: 'Bloem',
				source: 'images/ostrya-carpinifolia/flower-1.jpg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Parrotia persica',
		dutchName: { value: 'Perzisch ijzerhout' },
		images: [
			{
				label: 'Blad',
				source: 'images/parrotia-persica/leaf-1.jpeg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Paulownia tomentosa',
		dutchName: { value: 'Anna Paulowniaboom' },
		otherDutchNames: ['Anna Paulowna boom'],
		images: [
			{
				label: 'Blad',
				source: 'images/paulownia-tomentosa/leaf-1.jpg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Picea abies',
		dutchName: { value: 'Fijnspar' },
		images: [
			{
				label: 'Blad',
				source: 'images/picea-abies/leaf-1.jpg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Pinus nigra',
		dutchName: { value: 'Zwarte den' },
		images: [
			{
				label: 'Blad',
				source: 'images/pinus-nigra/leaf-1.jpg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Pinus sylvestris',
		dutchName: { value: 'Grove den' },
		otherDutchNames: ['Vliegden'],
		images: [
			{
				label: 'Blad',
				source: 'images/pinus-sylvestris/leaf-1.webp'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Populus x canescens',
		dutchName: { value: 'Grauwe abeel' },
		otherDutchNames: ['Grijze abeel'],
		crossedTreeSpeciesScientificNames: ['Populus alba', 'Populus tremula'],
		images: [
			{
				label: 'Blad #1',
				source: 'images/populus-x-canescens/leaf-1.jpeg'
			},
			{
				label: 'Blad #2',
				source: 'images/populus-x-canescens/leaf-2.jpeg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [1]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2]
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Populus tremula',
		dutchName: { value: 'Ratelpopulier' },
		otherDutchNames: ['Trilpopulier', 'Esp'],
		images: [
			{
				label: 'Blad',
				source: 'images/populus-tremula/leaf-1.jpeg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [1]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2]
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Populus x canadensis',
		otherScientificNames: ['Populus x euramericana'],
		dutchName: { value: 'Canadapopulier' },
		otherDutchNames: ['Canadese populier', 'Zwarte hybride populier'],
		crossedTreeSpeciesScientificNames: ['Populus deltoides', 'Populus nigra'],
		images: [
			{
				label: 'Blad',
				source: 'images/populus-x-canadensis/leaf-1.jpg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2]
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Prunus cerasifera',
		dutchName: { value: 'Kerspruim' },
		images: [
			{
				label: 'Blad #1',
				source: 'images/prunus-cerasifera/leaf-1.jpg'
			},
			{
				label: 'Blad #2',
				source: 'images/prunus-cerasifera/leaf-2.jpeg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Prunus serrulata',
		dutchName: { value: 'Japanse sierkers' },
		images: [
			{
				label: 'Blad',
				source: 'images/prunus-serrulata/leaf-1.jpg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Prunus padus',
		dutchName: { value: 'Europese vogelkers' },
		otherDutchNames: ['Gewone vogelkers'],
		images: [
			{
				label: 'Blad',
				source: 'images/prunus-padus/leaf-1.jpg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Prunus serotina',
		dutchName: { value: 'Amerikaanse vogelkers' },
		images: [
			{
				label: 'Blad',
				source: 'images/prunus-serotina/leaf-1.jpeg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Pseudotsuga menziesii',
		dutchName: { value: 'Douglasspar' },
		images: [
			{
				label: 'Blad #1',
				source: 'images/pseudotsuga-menziesii/leaf-1.jpeg'
			},
			{
				label: 'Blad #2',
				source: 'images/pseudotsuga-menziesii/leaf-2.jpeg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Pterocarya fraxinifolia',
		dutchName: { value: 'Kaukasische vleugelnoot' },
		otherDutchNames: ['Gewone vleugelnoot'],
		images: [
			{
				label: 'Blad',
				source: 'images/pterocarya-fraxinifolia/leaf-1.jpg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Pyrus calleryana',
		dutchName: {
			value: 'Callery-peer',
			isDisabled: true
		},
		otherDutchNames: ['Sierpeer'],
		images: [
			{
				label: 'Blad',
				source: 'images/pyrus-calleryana/leaf-1.jpg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2]
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Quercus cerris',
		dutchName: { value: 'Moseik' },
		otherDutchNames: ['Turkse eik'],
		images: [
			{
				label: 'Blad #1',
				source: 'images/quercus-cerris/leaf-1.jpg'
			},
			{
				label: 'Blad #2',
				source: 'images/quercus-cerris/leaf-2.jpeg'
			},
			{
				label: 'Blad #3',
				source: 'images/quercus-cerris/leaf-3.webp'
			},
			{
				label: 'Blad #4',
				source: 'images/quercus-cerris/leaf-4.jpg'
			},
			{
				label: 'Blad #5',
				source: 'images/quercus-cerris/leaf-5.jpg'
			},
			{
				label: 'Blad #6',
				source: 'images/quercus-cerris/leaf-6.jpg'
			},
			{
				label: 'Blad #7',
				source: 'images/quercus-cerris/leaf-7.jpg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [1]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2]
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Quercus frainetto',
		dutchName: { value: 'Hongaarse eik' },
		images: [
			{
				label: 'Blad #1',
				source: 'images/quercus-frainetto/leaf-1.jpg'
			},
			{
				label: 'Blad #2',
				source: 'images/quercus-frainetto/leaf-2.jpg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [1]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Quercus palustris',
		dutchName: { value: 'Moeraseik' },
		images: [
			{
				label: 'Blad #1',
				source: 'images/quercus-palustris/leaf-1.jpg'
			},
			{
				label: 'Blad #2',
				source: 'images/quercus-palustris/leaf-2.jpeg'
			},
			{
				label: 'Blad #3',
				source: 'images/quercus-palustris/leaf-3.jpg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [1]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Quercus ilex',
		dutchName: { value: 'Steeneik' },
		images: [
			{
				label: 'Blad #1',
				source: 'images/quercus-ilex/leaf-1.jpg'
			},
			{
				label: 'Blad #2',
				source: 'images/quercus-ilex/leaf-2.jpeg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [1]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2]
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Quercus phellos',
		dutchName: { value: 'Wilgbladige eik' },
		images: [
			{
				label: 'Blad',
				source: 'images/quercus-phellos/leaf-1.jpeg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [1]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: "Quercus x turneri 'Pseudoturneri'",
		dutchName: { value: 'Turners eik' },
		otherDutchNames: ['Oostenrijkse eik'],
		crossedTreeSpeciesScientificNames: ['Quercus ilex', 'Quercus robur'],
		images: [
			{
				label: 'Blad',
				source: "images/quercus-x-turneri-'pseudoturneri'/leaf-1.jpeg"
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [1]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Quercus x hispanica',
		dutchName: {
			value: 'Spaanse eik',
			isDisabled: true
		},
		crossedTreeSpeciesScientificNames: ['Quercus cerris', 'Quercus suber'],
		images: [
			{
				label: 'Blad #1',
				source: 'images/quercus-x-hispanica/leaf-1.jpg'
			},
			{
				label: 'Blad #2',
				source: 'images/quercus-x-hispanica/leaf-2.jpg'
			},
			{
				label: 'Blad #3',
				source: 'images/quercus-x-hispanica/leaf-3.jpg'
			},
			{
				label: 'Blad #4',
				source: 'images/quercus-x-hispanica/leaf-4.jpg'
			},
			{
				label: 'Blad #5',
				source: 'images/quercus-x-hispanica/leaf-5.jpg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [1]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: "Salix x sepulcralis 'Chrysocoma'",
		dutchName: { value: 'Gele treurwilg' },
		otherDutchNames: ['Treurwilg'],
		crossedTreeSpeciesScientificNames: ['Salix babylonica', "Salix alba 'Vitellina'"],
		images: [
			{
				label: 'Blad',
				source: "images/salix-x-sepulcralis-'chrysocoma'/leaf-1.jpeg"
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Sequoiadendron giganteum',
		dutchName: { value: 'Mammoetboom' },
		images: [
			{
				label: 'Blad #1',
				source: 'images/sequoiadendron-giganteum/leaf-1.jpg'
			},
			{
				label: 'Blad #2',
				source: 'images/sequoiadendron-giganteum/leaf-2.jpg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Sorbus aria',
		dutchName: { value: 'Meelbes' },
		images: [
			{
				label: 'Blad bovenkant',
				source: 'images/sorbus-aria/leaf-1.jpg'
			},
			{
				label: 'Blad onderkant',
				source: 'images/sorbus-aria/leaf-2.jpg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Sorbus intermedia',
		dutchName: { value: 'Zweedse meelbes' },
		images: [
			{
				label: 'Blad',
				source: 'images/sorbus-intermedia/leaf-1.jpeg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2]
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Taxodium distichum',
		dutchName: { value: 'Moerascypres' },
		images: [
			{
				label: 'Blad',
				source: 'images/taxodium-distichum/leaf-1.jpeg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Taxus baccata',
		dutchName: { value: 'Venijnboom' },
		otherDutchNames: ['Gewone taxus'],
		images: [
			{
				label: 'Blad',
				source: 'images/taxus-baccata/leaf-1.jpeg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Thuja plicata',
		dutchName: { value: 'Reuzenlevensboom' },
		images: [
			{
				label: 'Blad',
				source: 'images/thuja-plicata/leaf-1.jpeg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Ulmus minor',
		dutchName: { value: 'Gladde iep' },
		otherDutchNames: ['Gladde olm', 'Veldiep'],
		images: [
			{
				label: 'Blad',
				source: 'images/ulmus-minor/leaf-1.jpg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Ulmus glabra',
		dutchName: { value: 'Ruwe iep' },
		otherDutchNames: ['Ruwe olm', 'Bergiep'],
		images: [
			{
				label: 'Blad',
				source: 'images/ulmus-glabra/leaf-1.jpg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0]
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	},
	{
		scientificName: 'Zelkova serrata',
		dutchName: { value: 'Japanse zelkova' },
		otherDutchNames: ['Japanse schijniep'],
		images: [
			{
				label: 'Blad',
				source: 'images/zelkova-serrata/leaf-1.jpeg'
			}
		],
		speciesSpecificCharacteristics: {
			soilCompactionToleranceSchema: {
				...SOIL_COMPACTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltInSoilToleranceSchema: {
				...SALT_IN_SOIL_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			saltSprayToleranceSchema: {
				...SALT_SPRAY_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			coastalWindToleranceSchema: {
				...COASTAL_WIND_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			windthrowToleranceSchema: {
				...WINDTHROW_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			branchBreakToleranceSchema: {
				...BRANCH_BREAK_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			},
			airPollutionToleranceSchema: {
				...AIR_POLLUTION_TOLERANCE_SCHEMA,
				activeBlockIndexes: [0],
				isDisabled: true
			},
			springFrostToleranceSchema: {
				...SPRING_FROST_TOLERANCE_SCHEMA,
				activeBlockIndexes: [2],
				isDisabled: true
			}
		},
		isETW: true
	}
];
