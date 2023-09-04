import Plp from '../../components/plp';
import { categories } from '@/app/utils';
import Head from 'next/head';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'single collection',
  description: 'sigle collection detail',
}

async function getData(slug: string) {
  const url = `${process.env.DB_HOST}/collections/${slug}/products.json`
  const data = fetch(url).then(response => response.json())
  return data
}

export default async function Page({ searchParams, params }: { searchParams: any, params: { slug: string } }) {

  const currentPage: number = searchParams?.currentPage || 0
  const collection: Collection = await getData(params.slug)
  const currentCollection = categories.find((c: any) => c.id == params.slug)

  return (
    <main className=" p-6 md:p-24 bg-base-100 text-base-content">
      <h1 className="text-5xl font-bold mb-12 mt-20 mb:mb-20 md:mt-12">{currentCollection.title} collection</h1 >
      <Plp products={collection.products} limit={4} currentPage={currentPage}></Plp>
    </main >
  )
}

