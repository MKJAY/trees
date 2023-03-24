import type { Schema } from '../types/tree.type';

const TOLERANCE_SCHEMA_BLOCK_LABELS: string[] = [
	'Minder tolerant',
	'Matig tolerant',
	'Meer tolerant'
];

export const SALT_TOLERANCE_SCHEMA: Schema = {
	label: 'Zouttolerantie',
	blockLabels: TOLERANCE_SCHEMA_BLOCK_LABELS
};
