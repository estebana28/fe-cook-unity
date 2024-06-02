type ShowResultProps = {
  result: { result: string }
}

type BattleResultTypes = {
  [key: string]: string
}

const battleResult: BattleResultTypes = {
  WIN: 'You won!! Your pokemon defeated the opponent in just one strike!!',
  LOSE: "You couldn't beat the opponent in just one strike!!",
  DRAW: 'Opps! You Draw!!',
}

export const ShowResult = ({ result }: ShowResultProps) => {
  console.log(result)

  return <div>{result && battleResult[result.result]}</div>
}
