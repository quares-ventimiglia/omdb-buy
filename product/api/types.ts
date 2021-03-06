export interface RawProduct {
  Title: string,
  Year: string,
  Poster: string,
  imdbID: string
}

export interface Movie {
  Error?: string;
  Response?: string;
  Title: string,
  Year: string,
  Rated: string,
  Runtime: string,
  Actors: string,
  Plot: string,
  Poster: string,
  imdbRating: string
}


export interface OmdbResponse {
  Search?: RawProduct[],
  Error?: string,
  Response?: string
}