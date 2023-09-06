import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem, faSeedling, faShirt, } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Metadata } from 'next';
import fsPromises from 'fs/promises';

import { scrapeFbEvent, scrapeFbEventFromFbid } from 'facebook-event-scraper';


async function getData() {

  const url = `https://www.facebook.com/events/1741420522962735`

  // Scrape event using URL
  const eventData = await scrapeFbEvent(url);
  fsPromises.writeFile('data.json', JSON.stringify(eventData));

  return eventData
}

export default async function Home() {
  const data = await getData()

  const menuIcons: IconProp[] = [
    faSeedling, faShirt, faGem
  ]


  return (
    <main className=" p-6 md:p-24 bg-base-100 text-base-content">
      <h1 className="text-5xl font-bold mb-12 mb:mb-20 mt-20 mb:mt-12">test scraper</h1>
      <form>
        {JSON.stringify(data)}
        <label htmlFor="url">Enter an https:// URL:</label>
        {/* <input type="url" name="url" id="url" placeholder="https://example.com" pattern="https://.*" size={30} required /> */}
        <button className="btn btn-primay" >test</button>
      </form>
    </main >
  )
}
