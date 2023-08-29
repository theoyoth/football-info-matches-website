import Link from 'next/link'
import Image from 'next/image'

type linkProps = {
  href: string,
  name: string,
  src: string,
}

const LinkSide = ({href,name,src}:linkProps) => {
  return (
    <Link href={href} className='flex items-center py-2 px-2 rounded-md hover:bg-[rgb(54,63,78)]'>
      <Image src={src} alt={name} width={20} height={20} />
      <p className='ml-4 text-xs md:text-sm'>{name}</p>
    </Link>
  )
}

export default LinkSide