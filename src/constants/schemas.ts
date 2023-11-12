import type { SpeciesSpecificCharacteristicSchemas } from '../types/tree-species';

const TOLERANCE_SCHEMA_BLOCK_LABELS: string[] = [
	'Minder tolerant',
	'Matig tolerant',
	'Meer tolerant'
];

const GRADE_SCHEMA_BLOCK_LABELS: string[] = ['Zwak', 'Matig', 'Sterk'];

export const DEFAULT_SPECIES_SPECIFIC_CHARACTERISTIC_SCHEMAS: SpeciesSpecificCharacteristicSchemas =
	{
		soilCompactionToleranceSchema: {
			label: 'Tolerantie voor bodemverdichting',
			blockLabels: TOLERANCE_SCHEMA_BLOCK_LABELS,
			activeBlockIndexes: [0],
			isDisabled: true
		},
		saltInSoilToleranceSchema: {
			label: 'Tolerantie voor zout in de bodem',
			blockLabels: TOLERANCE_SCHEMA_BLOCK_LABELS,
			activeBlockIndexes: [0],
			isDisabled: true
		},
		saltSprayToleranceSchema: {
			label: 'Tolerantie voor spatzout tegen de stam',
			blockLabels: TOLERANCE_SCHEMA_BLOCK_LABELS,
			activeBlockIndexes: [0],
			isDisabled: true
		},
		coastalWindToleranceSchema: {
			label: 'Tolerantie voor zeewind',
			blockLabels: TOLERANCE_SCHEMA_BLOCK_LABELS,
			activeBlockIndexes: [0],
			isDisabled: true
		},
		windthrowToleranceSchema: {
			label: 'Tolerantie voor windworp',
			blockLabels: TOLERANCE_SCHEMA_BLOCK_LABELS,
			activeBlockIndexes: [1],
			isDisabled: true
		},
		branchBreakToleranceSchema: {
			label: 'Tolerantie voor takbreuk',
			blockLabels: TOLERANCE_SCHEMA_BLOCK_LABELS,
			activeBlockIndexes: [1],
			isDisabled: true
		},
		airPollutionToleranceSchema: {
			label: 'Tolerantie voor luchtvervuiling',
			blockLabels: TOLERANCE_SCHEMA_BLOCK_LABELS,
			activeBlockIndexes: [0],
			isDisabled: true
		},
		springFrostToleranceSchema: {
			label: 'Tolerantie voor voorjaarsvorst',
			blockLabels: TOLERANCE_SCHEMA_BLOCK_LABELS,
			activeBlockIndexes: [1],
			isDisabled: true
		},
		bleedingToleranceSchema: {
			label: 'Tolerantie voor bloeden',
			blockLabels: TOLERANCE_SCHEMA_BLOCK_LABELS,
			activeBlockIndexes: [1],
			isDisabled: true
		},
		waterShootsGradeSchema: {
			label: 'Vorming van waterlot',
			blockLabels: GRADE_SCHEMA_BLOCK_LABELS,
			activeBlockIndexes: [1],
			isDisabled: true
		},
		suckerBranchesGradeSchema: {
			label: 'Vorming van zuigers en/of elleboogtakken',
			blockLabels: GRADE_SCHEMA_BLOCK_LABELS,
			activeBlockIndexes: [1],
			isDisabled: true
		},
		multipleBranchesOnSameHeightGradeSchema: {
			label: 'Vorming van takparen -of kransen',
			blockLabels: GRADE_SCHEMA_BLOCK_LABELS,
			activeBlockIndexes: [1],
			isDisabled: true
		},
		coDominantStemsWithIncludedBarkGradeSchema: {
			label: 'Vorming van plakoksels',
			blockLabels: GRADE_SCHEMA_BLOCK_LABELS,
			activeBlockIndexes: [1],
			isDisabled: true
		},
		saggingBranchesGradeSchema: {
			label: 'Mate van doorhangende takken',
			blockLabels: GRADE_SCHEMA_BLOCK_LABELS,
			activeBlockIndexes: [1],
			isDisabled: true
		},
		easyCatchOnGradeSchema: {
			label: 'Mate van gemakkelijk aanslaan',
			blockLabels: GRADE_SCHEMA_BLOCK_LABELS,
			activeBlockIndexes: [1],
			isDisabled: true
		}
	};
