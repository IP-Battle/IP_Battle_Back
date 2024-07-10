export type roomType = {
  [roomId: number]: {
    playerData: {
      questionData: {
        [questionId: number]: boolean,
      }
      finish: boolean
    }[]
  }
}