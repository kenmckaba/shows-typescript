// export interface ShowScore {
//   score: number
//   show: Show
// }

// export interface Show {
//   id: number
//   url: string
//   name: string
//   type: string
//   language: string
//   genres: any[]
//   status: string
//   runtime: number
//   averageRuntime: number
//   premiered: string
//   ended: string
//   officialSite: null
//   schedule: Schedule
//   rating: Rating
//   weight: number
//   network: Network
//   webChannel: null
//   dvdCountry: null
//   externals: Externals
//   image: Image
//   summary: string
//   updated: number
//   _links: {
//     self: {
//       href: string
//     }
//     previousepisode: {
//       href: string
//       name: string
//     }
//   }
// }

interface Image {
  medium: string
  original: string
}

// interface Externals {
//   tvrage: null
//   thetvdb: number
//   imdb: string
// }

// interface Network {
//   id: number
//   name: string
//   country: Country
//   officialSite: string
// }

// interface Country {
//   name: string
//   code: string
//   timezone: string
// }

// interface Rating {
//   average: null
// }

// interface Schedule {
//   time: string
//   days: any[]
// }

export interface Episode {
  id: number
  url: string
  name: string
  season: number
  number: number
  type: string
  airdate: string
  airtime: string
  airstamp: string
  runtime: number
  rating: {}
  image: Image
  summary: null
  _links: Links
}

export interface Rating {
  average?: number
}

interface Links {
  self: {
    href: string
  }
}

// interface Show {
//   href: string
//   name: string
// }

// interface Self {
//   href: string
// }

// interface Rating {
//   average: null
// }
