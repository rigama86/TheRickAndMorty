export class Character {
	constructor(
		public id: number,
		public name: string,
		public status: string,
		public species: string,
		public type: string,
		public gender: string,
		public origin = Origin,
		public location = [],
		public image: string,
		public episode: [],
		public url: string,
		public created: string
	) { }
}


class Origin {
	constructor(
		public name: string,
		public url: string
	) { }
}