import type { Schema } from '../types/tree-species.type';

const TOLERANCE_SCHEMA_BLOCK_LABELS: string[] = [
	'Minder tolerant',
	'Matig tolerant',
	'Meer tolerant'
];

export const SALT_TOLERANCE_SCHEMA: Schema = {
	label: 'Tolerantie voor zout in de wortelzone',
	blockLabels: TOLERANCE_SCHEMA_BLOCK_LABELS
};

export const SALT_SPRAY_TOLERANCE_SCHEMA: Schema = {
	label: 'Tolerantie voor spatzout tegen de stam',
	blockLabels: TOLERANCE_SCHEMA_BLOCK_LABELS
};

export const COAST_WIND_TOLERANCE_SCHEMA: Schema = {
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
