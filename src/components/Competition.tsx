import { matchesType } from '@/types'
import Image from 'next/image'

const Competition = ({data}:{data:matchesType}) => {
  const nd = new Date(data?.utcDate)
  const dateConvert = nd.toDateString()
  return (
    <div className='mb-4 flex justify-between items-center px-4 py-1 bg-slate-600 hover:bg-slate-700 rounded-md'>
      <div className='flex space-x-4'>
        <Image src={data?.competition.emblem} alt={data?.competition.name} width={20} height={20} />
        <p className='text-sm text-teal-400'>{data?.competition.name}</p>
      </div>
      <p className='text-xs md:text-sm'>{dateConvert}</p>
    </div>
  )
}

export default Competition