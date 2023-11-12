export const copy = <T>(value: T): T => {
	return structuredClone(value);
};
