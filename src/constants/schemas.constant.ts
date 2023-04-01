import type { Schema } from '../types/tree-species.type';

const TOLERANCE_SCHEMA_BLOCK_LABELS: string[] = [
	'Minder tolerant',
	'Matig tolerant',
	'Meer tolerant'
];

export const SALT_TOLERANCE_SCHEMA: Schema = {
	label: 'Zouttolerantie in de wortelzone',
	blockLabels: TOLERANCE_SCHEMA_BLOCK_LABELS
};

export const SALT_SPRAY_TOLERANCE_SCHEMA: Schema = {
	label: 'Spatzouttolerantie tegen de stam',
	blockLabels: TOLERANCE_SCHEMA_BLOCK_LABELS
};
