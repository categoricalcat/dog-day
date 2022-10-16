export interface Breed {
	id: number;
	date: string;
	date_gmt: string;
	guid: Guid;
	modified: string;
	modified_gmt: string;
	slug: string;
	status: string;
	type: string;
	link: string;
	title: Title;
	content: Content;
	featured_media: number;
	template: string;
	activity_level: number[];
	barking_level: number[];
	coat_type: number[];
	good_with_children: number[];
	good_with_dogs: number[];
	shedding: number[];
	size: number[];
	trainability: number[];
	acf: any[];
	_links: Links;
	_embedded: Embedded;
}

export interface Guid {
	rendered: string;
}

export interface Title {
	rendered: string;
}

export interface Content {
	rendered: string;
	protected: boolean;
}

export interface Links {
	self: Self[];
	collection: Collection[];
	about: About[];
	'version-history': VersionHistory[];
	'wp:featuredmedia': Featuredmedum[];
	'wp:attachment': WpAttachment[];
	'wp:term': WpTerm[];
	curies: Cury[];
}

export interface Self {
	href: string;
}

export interface Collection {
	href: string;
}

export interface About {
	href: string;
}

export interface VersionHistory {
	count: number;
	href: string;
}

export interface Featuredmedum {
	embeddable: boolean;
	href: string;
}

export interface WpAttachment {
	href: string;
}

export interface WpTerm {
	taxonomy: string;
	embeddable: boolean;
	href: string;
}

export interface Cury {
	name: string;
	href: string;
	templated: boolean;
}

export interface Embedded {
	'wp:featuredmedia': Featuredmedum2[];
	'wp:term': WpTerm2[][];
}

export interface Featuredmedum2 {
	id: number;
	date: string;
	slug: string;
	type: string;
	link: string;
	title: Title2;
	author: number;
	acf: any[];
	caption: Caption;
	alt_text: string;
	media_type: string;
	mime_type: string;
	media_details: MediaDetails;
	source_url: string;
	_links: Links2;
}

export interface Title2 {
	rendered: string;
}

export interface Caption {
	rendered: string;
}

export interface MediaDetails {
	width: number;
	height: number;
	file: string;
	sizes: Sizes;
	image_meta: ImageMeta;
}

export interface Sizes {
	thumbnail: Thumbnail;
	medium: Medium;
	rectangle_thumbnail: RectangleThumbnail;
	large_square: LargeSquare;
	square_thumbnail: SquareThumbnail;
	large_portrait: LargePortrait;
	mobile_portrait: MobilePortrait;
	odd_landscape: OddLandscape;
	odd_mobile_landscape: OddMobileLandscape;
	full: Full;
}

export interface Thumbnail {
	file: string;
	width: number;
	height: number;
	mime_type: string;
	source_url: string;
}

export interface Medium {
	file: string;
	width: number;
	height: number;
	mime_type: string;
	source_url: string;
}

export interface RectangleThumbnail {
	file: string;
	width: number;
	height: number;
	mime_type: string;
	source_url: string;
}

export interface LargeSquare {
	file: string;
	width: number;
	height: number;
	mime_type: string;
	source_url: string;
}

export interface SquareThumbnail {
	file: string;
	width: number;
	height: number;
	mime_type: string;
	source_url: string;
}

export interface LargePortrait {
	file: string;
	width: number;
	height: number;
	mime_type: string;
	source_url: string;
}

export interface MobilePortrait {
	file: string;
	width: number;
	height: number;
	mime_type: string;
	source_url: string;
}

export interface OddLandscape {
	file: string;
	width: number;
	height: number;
	mime_type: string;
	source_url: string;
}

export interface OddMobileLandscape {
	file: string;
	width: number;
	height: number;
	mime_type: string;
	source_url: string;
}

export interface Full {
	file: string;
	width: number;
	height: number;
	mime_type: string;
	source_url: string;
}

export interface ImageMeta {
	aperture: string;
	credit: string;
	camera: string;
	caption: string;
	created_timestamp: string;
	copyright: string;
	focal_length: string;
	iso: string;
	shutter_speed: string;
	title: string;
	orientation: string;
	keywords: any[];
}

export interface Links2 {
	self: Self2[];
	collection: Collection2[];
	about: About2[];
	author: Author[];
	replies: Reply[];
}

export interface Self2 {
	href: string;
}

export interface Collection2 {
	href: string;
}

export interface About2 {
	href: string;
}

export interface Author {
	embeddable: boolean;
	href: string;
}

export interface Reply {
	embeddable: boolean;
	href: string;
}

export interface WpTerm2 {
	id: number;
	link: string;
	name: string;
	slug: string;
	taxonomy: string;
	acf: any[];
	_links: Links3;
}

export interface Links3 {
	self: Self3[];
	collection: Collection3[];
	about: About3[];
	'wp:post_type': WpPostType[];
	curies: Cury2[];
}

export interface Self3 {
	href: string;
}

export interface Collection3 {
	href: string;
}

export interface About3 {
	href: string;
}

export interface WpPostType {
	href: string;
}

export interface Cury2 {
	name: string;
	href: string;
	templated: boolean;
}
