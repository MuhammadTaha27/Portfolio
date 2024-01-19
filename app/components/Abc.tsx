import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image'

const url = `${process.env.BASE_URL}/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}`


export default async function Abc () {
    const response = await fetch(url,{
         cache : 'no-store'
    })
    const data = await response.json()

    return (
        <div>
        {data.items.map((a: any, index: number) => {
          const image = data.includes.Asset.find((asset:any)=>
          asset.sys.id === a.fields.me.sys.id
          )
          return (
            <div key={index} className="px-24 mx-auto">
              <div className="py-4 ">
                {documentToReactComponents(a.fields.fullstackDevelopment)}
              </div>
              <Image src={`https:${image.fields.file.url}`}width={500} height={500} alt="blogimage" />
            </div>
          );
        })}
        </div>
      )
    }


