import type { Schema } from '../types/tree-species';

export const SPECIES_SPECIFIC_CHARACTERISTIC_SCHEMA_NAMES: string[] = [
	'soilCompactionToleranceSchema',
	'saltInSoilToleranceSchema',
	'saltSprayToleranceSchema',
	'coastalWindToleranceSchema',
	'windthrowToleranceSchema',
	'branchBreakToleranceSchema',
	'airPollutionToleranceSchema',
	'springFrostToleranceSchema',
	'bleedingToleranceSchema',
	'basalShootsToleranceSchema',
	'suckerBranchesGradeSchema',
	'saggingBranchesGradeSchema'
];

const TOLERANCE_SCHEMA_BLOCK_LABELS: string[] = [
	'Minder tolerant',
	'Matig tolerant',
	'Meer tolerant'
];

const GRADE_SCHEMA_BLOCK_LABELS: string[] = ['Zwak', 'Matig', 'Sterk'];

export const SOIL_COMPACTION_TOLERANCE_SCHEMA: Schema = {
	label: 'Tolerantie voor bodemverdichting',
	blockLabels: TOLERANCE_SCHEMA_BLOCK_LABELS
};

export const SALT_IN_SOIL_TOLERANCE_SCHEMA: Schema = {
	label: 'Tolerantie voor zout in de bodem',
	blockLabels: TOLERANCE_SCHEMA_BLOCK_LABELS
};

export const SALT_SPRAY_TOLERANCE_SCHEMA: Schema = {
	label: 'Tolerantie voor spatzout tegen de stam',
	blockLabels: TOLERANCE_SCHEMA_BLOCK_LABELS
};

export const COASTAL_WIND_TOLERANCE_SCHEMA: Schema = {
	label: 'Tolerantie voor zeewind',
	blockLabels: TOLERANCE_SCHEMA_BLOCK_LABELS
};

export const WINDTHROW_TOLERANCE_SCHEMA: Schema = {
	label: 'Tolerantie voor windworp',
	blockLabels: TOLERANCE_SCHEMA_BLOCK_LABELS
};

export const BRANCH_BREAK_TOLERANCE_SCHEMA: Schema = {
	label: 'Tolerantie voor takbreuk',
	blockLabels: TOLERANCE_SCHEMA_BLOCK_LABELS
};

export const AIR_POLLUTION_TOLERANCE_SCHEMA: Schema = {
	label: 'Tolerantie voor luchtvervuiling',
	blockLabels: TOLERANCE_SCHEMA_BLOCK_LABELS
};

export const SPRING_FROST_TOLERANCE_SCHEMA: Schema = {
	label: 'Tolerantie voor voorjaarsvorst',
	blockLabels: TOLERANCE_SCHEMA_BLOCK_LABELS
};

export const BLEEDING_TOLERANCE_SCHEMA: Schema = {
	label: 'Tolerantie voor bloeden',
	blockLabels: TOLERANCE_SCHEMA_BLOCK_LABELS
};

export const BASAL_SHOOTS_GRADE_SCHEMA: Schema = {
	label: 'Vorming van waterlot',
	blockLabels: GRADE_SCHEMA_BLOCK_LABELS
};

export const SAGGING_BRANCHES_GRADE_SCHEMA: Schema = {
	label: 'Mate van doorhangende takken',
	blockLabels: GRADE_SCHEMA_BLOCK_LABELS
};

export const SUCKER_BRANCHES_GRADE_SCHEMA: Schema = {
	label: 'Vorming van zuigers en/of elleboogtakken',
	blockLabels: GRADE_SCHEMA_BLOCK_LABELS
};
