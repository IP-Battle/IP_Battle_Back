export type roomType = {
  [roomId: number]: {
    playerId: string
    questionData: {
      [questionId: number]: boolean,
    }
    finish: boolean
  }[]
}