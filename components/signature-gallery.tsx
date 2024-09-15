import fs from 'fs/promises'
import path from 'path'
import Image from 'next/image'
import SignatureForm from './signature-form'
import Link from 'next/link'
import { list } from '@vercel/blob'
import { getSignatures } from '@/lib/getSignatures'


export const revalidate = 3 * 60

export default async function SignatureGallery() {
  const signatures = await getSignatures();

  return (
    <div className="mt-8 min-h-96 flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold mb-4">Approved by</h2>
      {signatures.length === 0 ? (
        <p>No signatures found.</p>
      ) : (
        <div className="flex flex-wrap justify-center">
          {signatures.slice(-8).map((signature) => (
            <div key={signature.name} className="m-2">
              <Image
                alt={signature.name}
                key={signature.name}
                src={signature.url}
                width={300}
                height={150}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      )}
      <p className=' text-lg text-center'>If you like this project, please sign <Link className='underline' href='/contact'>here</Link></p>
    </div>
  )
}