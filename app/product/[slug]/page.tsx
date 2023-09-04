import PdpActions from '@/app/components/pdpActions';
import PdpTabs from '@/app/components/pdp-tabs';
import Image from 'next/image'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'single product',
  description: 'sigle product detail',
}

async function getData(slug: string) {
  const res = await fetch(`${process.env.DB_HOST}/products/${slug}.json`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function Product({ params }: { params: { slug: string } }) {
  const { product }: { product: Product } = await getData(params.slug)
  const { options, variants } = product
  let tags = product?.tags?.split(", ") || []

  return (
    <main className=" p-6 md:p-24 bg-base-100 text-base-content">
      <div className=" flex flex-col w-full lg:flex-row">
        <div className="grid flex-shrink-0   mt-20 md:my-20 lg:pr-6">
          <Image
            src={product?.image?.src!}
            alt="Vercel Logo"
            className="img-fluid"
            width={800}
            height={800}
            priority
          />
        </div>
        <div className="divider lg:divider-horizontal" />
        <div className="grid flex-shrink md:my-20 w-full">
          <div className="flex flex-col space-y-5 lg:pl-4">
            <div className='flex justify-between items-center'>
              <h1 className="text-4xl text-black font-bold">
                {product.title}
              </h1>
              <div className='flex'>{tags.map((t: any, i: number) => <div key={i} className="badge badge-secondary text-xs mr-2">{t}</div>)}</div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: product.body_html! }} />
            <div className="text-md">
              <p className='mb-2'><span className='font-bold'>Vendor:</span> {product.vendor}</p>
              <p className='mb-2'><span className='font-bold'>Type:</span> {product.product_type}</p>
              {variants.map((v: any, i: number) =>
                <div key={i}>
                  <p className='mb-2'><span className='font-bold'>Weight:</span> {v.weight} {v.weight_unit}</p>
                  <p className='mb-2'><span className='font-bold'>Tequires shipping:</span> {v.requires_shipping ? 'Yes' : 'No'}</p>
                  <p className='mb-2'><span className='font-bold'>Quantity:</span> {v.inventory_quantity}</p>
                </div>
              )}
            </div>
            {variants.map((v: any, i: number) =>
              <div key={i}>
                <h3 className="text-black text-4xl font-semibold">
                  {v.price}€
                </h3>
              </div>
            )}
            <PdpActions product={product}></PdpActions>
          </div>
        </div>
      </div>
      <PdpTabs></PdpTabs>
    </main>
  )

}