export namespace Statistics {
  export interface num {
    year: number
    totalRace: number
    thisYearRace: number
    totalPeople: number
    thisYearWinRate: number
  }

  export interface RaceDatas {
    current?: number | undefined
    pageSize?: number | undefined
    sort?: any
  }

  export interface ResRaces {
    success: boolean
    count: number
    msg: string
    data: [any]
  }

  export type DataSourceType = {
    order: number
    raceName: string
    raceTime: string
    player1: string
    player2: string
    player3: string
    player4: string

    training1: string
    training2: string
    training3: string
    training4: string

    opponent: string

    topic: string
    support: string

    win: string
    best: string
    rate: string
    year: number
    season: string
    other: string | null

    _id: React.Key
    children?: DataSourceType[]
  }

  export interface pieData {
    type: string
    value: number
  }
}
