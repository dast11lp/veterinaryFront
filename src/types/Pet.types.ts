export interface PetData{
	id: number,
	name: string,
	high: DoubleRange,
	weight: DoubleRange,
	species: string,
	breed: string,
    owner: {
		id: string | undefined
	},
}