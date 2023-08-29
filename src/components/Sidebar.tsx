import {FC} from 'react'
import LinkSide from './LinkSide'

const Leagues = [
  { id:1,name:"Premier League",href:"premier-league",emblem:"/img/leagues/premier_league.webp"},
  { id:2,name:"Primera Division",href:"la-liga",emblem:"/img/leagues/laliga.svg"},
  { id:3,name:"Bundesliga",href:"bundesliga",emblem:"/img/leagues/bundesliga.webp"},
  { id:4,name:"Serie A",href:"serie-a",emblem:"/img/leagues/serie_a.webp"},
  { id:5,name:"Ligue 1",href:"ligue-1",emblem:"/img/leagues/ligue_1.webp"},
  { id:6,name:"Championship",href:"championship",emblem:"/img/leagues/championship.webp"},
  { id:7,name:"Primeira Liga",href:"primeira-liga",emblem:"/img/leagues/liga_portugal.webp"},
  { id:8,name:"Brazilian Championship Series A",href:"brazilian-series-a",emblem:"/img/leagues/brazilian_serie_a.webp"},
  { id:9,name:"Copa Libertadores",href:"copa-libertadores",emblem:"/img/leagues/copa_libertadores.webp"},
]

const Sidebar:FC = async() => {
  return (
    <section className='px-2 md:px-4 py-2 bg-[rgb(40,46,58)] rounded-md'>
      <div>
        <h1 className='font-bold text-xl mb-4 text-teal-400'>Leagues</h1>
        <ul className='space-y-2'>
          {
            Leagues.map((league) => (
              <div key={league?.id} className='flex'>
                <LinkSide href={league.href} name={league?.name} src={league?.emblem} />
              </div>
            ))
          }
        </ul>
      </div>
    </section>
  )
}

export default Sidebar