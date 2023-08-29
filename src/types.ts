export type apiOptions = {
  next: any,
  headers:{
      'X-Auth-Token': string | any,
      'Content-Type': string | any
  }
}

export type matchesArea = {
  id?: number,
  name: string,
}
export type matchesCompetition = {
  id?: number,
  name: string,
  emblem: string
}
export type matchesHomeTeam = {
  id?: number,
  name: string,
  crest: string
}
export type matchesAwayTeam = {
  id?: number,
  name: string,
  crest: string
}
export type scores = {
  fullTime: {
      home: number,
      away: number,
  },
  halfTime?: {
    home: number,
    away: number,
  }
}

export type matchesType = {
  area: matchesArea,
  competition: matchesCompetition,
  id: number,
  utcDate: string,
  status: string,
  matchday?: number,
  homeTeam?: matchesHomeTeam,
  awayTeam?: matchesAwayTeam,
  score?:scores
}

export type newsType = {
  title: string,
  url: string,
  urlToImage: string,
}