import { filterLeague } from "@/api"
import LeagueTable from "@/components/LeagueTable"


const Bundesliga = async () => {
  const getCopaLibertadores = await filterLeague('Copa Libertadores')
  return (
    <div className='w-[600px]'>
      {getCopaLibertadores.map((data) => (
        <div key={data.id}>
          <LeagueTable data={data} />
        </div>
      ))}
    </div>
  )
}

export default Bundesliga