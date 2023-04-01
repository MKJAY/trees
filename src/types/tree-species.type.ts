export interface TreeSpecies {
	scientificName: string;
	otherScientificNames?: string[];
	dutchName: Value;
	otherDutchNames?: string[];
	crossedTreeSpeciesScientificNames?: string[];
	images?: Image[];
	speciesSpecificCharacteristics: {
		saltToleranceSchema?: Schema;
		saltSprayToleranceSchema?: Schema;
	};
	determinationCharacteristics?: string[];
	similarTreeSpecies?: SimilarTreeSpecies[];
	notes?: string;
}

export interface Value {
	value: string;
	isDisabled?: boolean;
}

export interface Image {
	label: string;
	source: string;
}

export interface Schema {
	label: string;
	blockLabels: string[];
	activeBlockIndexes?: number[];
	isDisabled?: boolean;
}

export interface SimilarTreeSpecies {
	scientificName: string;
	differences: string[];
}

export enum LeafShape {
	Rond = 'Rond',
	Ovaal = 'Ovaal',
	Eivormig = 'Eivormig',
	Langwerpig = 'Langwerpig',
	Niervormig = 'Niervormig',
	Lijnvormig = 'Lijnvormig',
	OmgekeerdEivormig = 'Omgekeerd eivormig',
	Lancetvormig = 'Lancetvormig',
	Spatelvormig = 'Spatelvormig',
	Ruitvormig = 'Ruitvormig',
	Hartvormig = 'Hartvormig',
	Deltavormig = 'Deltavormig'
}

export enum LeafEdge {
	Gaafrandig = 'Gaafrandig',
	Gekarteld = 'Gekarteld',
	FijnGezaagd = 'Fijn gezaagd',
	GrofGezaagd = 'Grof gezaagd',
	DubbelGezaagd = 'DubbelGezaagd',
	Getand = 'Getand',
	GeschulptGelobd = 'Geschulpt gelobd',
	VeerspletigGelobd = 'Veerspletig gelobd',
	HanddeligGelobd = 'Handdelig gelobd',
	HandspletigGelobd = 'Handspletig gelobd',
	EvenGelobd = 'Even gelobd'
}

export enum CompoundLeafShape {
	EvenGeveerd = 'Even geveerd',
	OnevenGeveerd = 'Oneven geveerd',
	DubbelGeveerd = 'Dubbel geveerd',
	Drietallig = 'Drietallig',
	HandvormigSamengesteld = 'Handvormig samengesteld'
}

export enum LeafAttachment {
	Gesteeld = 'Gesteeld',
	MetBladschede = 'MetBladschede',
	Zittend = 'Zittend',
	Stengelomvattend = 'Stengelomvattend'
}

export enum BudPlacement {
	Verspreid = 'Verspreid',
	TwijrijigTegenoverstaand = 'Twijrijig tegenoverstaand',
	KruisgewijsTegenoverstaand = 'Kruisgewijs tegenoverstaand',
	InKransen = 'In kransen'
}

export enum BudStance {
	Afstaand = 'Afstaand',
	Aanliggend = 'Aanliggend'
}

export enum BudCharacteristic {
	EindknoppenInBundels = 'Eindknoppen in bundels'
}

export enum NeedleShape {
	Spits = 'Spits',
	Stomp = 'Stomp',
	KruisgewijsSchubvormig = 'Kruisgewijs schubvormig',
	SpiraalgewijsSchubvormig = 'Spiraalgewijs schubvormig'
}

export enum NeedlePlacement {
	Alleenstaand = 'Alleenstaand',
	TweeOpKortlot = 'TweeOpKortlot',
	InBundels = 'In bundels'
}

export enum NeedleType {
	Afvallend = 'Zachte kruidachtige naalden die afvallen in de winter',
	Wintergroen = 'Harde stijve naalden die blijven staan in de winter'
}
