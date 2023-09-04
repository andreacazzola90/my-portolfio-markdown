import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem,  faSeedling, faShirt,  } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Collections',
  description: 'Collections listing',
}

async function getData() {
  const url = `${ process.env.DB_HOST }/collection_listings.json`
  const data = fetch(url).then(response => response.json())

  return data
}

export default async function Home() {
  const { collection_listings } = await getData()

  const menuIcons: IconProp[] = [
    faSeedling, faShirt, faGem
  ]

  return (
    <main className=" p-6 md:p-24 bg-base-100 text-base-content">

      <h1 className="text-5xl font-bold mb-12 mb:mb-20 mt-20 mb:mt-12">Le nostre collezioni</h1>
      <div className={`grid md:grid-cols-3 gap-12 p-2`}>
        {collection_listings.map((c: Collection, i: number) =>
          <>
            <Link href={`/collection/${c.collection_id}`} key={i} >
              <div className="flex items-center justify-center ">
                <div className="overflow-hidden  aspect-video bg-red-400 cursor-pointer rounded-xl relative group">
                  <div className="rounded-xl z-50  group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                    <div>
                      <div className="transform-gpu p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transition duration-300 ease-in-out">
                        <div className="font-bold"><FontAwesomeIcon icon={menuIcons[i]} className="text-primary" /> {c.title}</div>
                        <div dangerouslySetInnerHTML={{ __html: c.body_html! }} className="opacity-60 text-sm" />
                      </div>
                    </div>
                  </div>
                  <Image
                    src={c?.default_product_image?.src!}
                    alt={c?.title!}
                    className="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
                    width={800}
                    height={800}
                  />
                </div>
              </div>
            </Link>
          </>
        )}
      </div>
    </main >
  )
}
