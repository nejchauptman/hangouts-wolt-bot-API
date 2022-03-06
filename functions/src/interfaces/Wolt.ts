export interface ICreated {
	$date: number;
}

export interface Value {
	id: string;
	name: string;
}

export interface Filter {
	id: string;
	name: string;
	type: string;
	values: Value[];
}

export interface Filtering {
	filters: Filter[];
}

export interface SectionFilter {
	id: string;
	values: string[];
}

export interface SectionFiltering {
	filters: SectionFilter[];
}

export interface Image {
	blurhash: string;
	url: string;
	variants: string[];
}

export interface Link {
	target: string;
	target_sort: string;
	target_title: string;
	title: string;
	type: string;
	venue_mainimage_blurhash: string;
}

export interface Sortable {
	id: string;
	value: number;
}

export interface Sorting {
	sortables: Sortable[];
}

export interface Badge {
	text: string;
	variant: string;
}

export interface Rating {
	rating: number;
	score: number;
}

export interface Venue {
	address: string;
	badges: Badge[];
	categories: string[];
	city: string;
	currency: string;
	delivers: boolean;
	delivery_price: string;
	delivery_price_highlight: boolean;
	estimate: number;
	estimate_range: string;
	franchise: string;
	id: string;
	location: number[];
	name: string;
	online: boolean;
	price_range: number;
	product_line: string;
	rating: Rating;
	short_description: string;
	show_wolt_plus: boolean;
	slug: string;
	tags: string[];
}

export interface Item {
	filtering: SectionFiltering;
	image: Image;
	link: Link;
	sorting: Sorting;
	template: string;
	title: string;
	track_id: string;
	venue: Venue;
	overlay: string;
}

export interface LinkDetails {
	target: string;
	target_sort: string;
	target_title: string;
	title: string;
	type: string;
}

export interface Section {
	items: Item[];
	link: LinkDetails;
	name: string;
	template: string;
}

export interface SortingDetails {
	id: string;
	name: string;
	type: string;
}

export interface ClientSorting {
	sortables: SortingDetails[];
}

export interface IWolt {
	created: ICreated;
	expires_in_seconds: number;
	filtering: Filtering;
	name: string;
	page_title: string;
	sections: Section[];
	show_large_title: boolean;
	show_map: boolean;
	sorting: ClientSorting;
	track_id: string;
}

export interface IWoltJoiner {
	name: string;
	lowercaseName: string;
	tags: string[];
	slug: string;
}
