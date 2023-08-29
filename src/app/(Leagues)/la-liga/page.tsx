import { filterLeague } from "@/api"
import LeagueTable from "@/components/LeagueTable"


const LaLiga = async () => {
  const getLaLiga = await filterLeague('Primera Division')

  return (
    <div className='w-[600px]'>
      {getLaLiga.map((data) => (
        <div key={data.id}>
          <LeagueTable data={data} />
        </div>
      ))}
    </div>
  )
}

export default LaLiga