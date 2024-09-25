import StatisticLine from './StatisticsLine'

const Statistics = props => {
  return (
    <div>
      <h1>Statistics</h1>
      {props.all ? (
        <table>
          <tbody>
            {Object.entries(props).map((prop, ind) => (
              <StatisticLine text={prop[0]} value={prop[1]} key={ind} />
            ))}
          </tbody>
        </table>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  )
}

export default Statistics
