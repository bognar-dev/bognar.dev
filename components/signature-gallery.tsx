import fs from 'fs/promises'
import path from 'path'
import Image from 'next/image'
import SignatureForm from './signature-form'
import Link from 'next/link'
import { list } from '@vercel/blob'



export default async function SignatureGallery() {
  async function allSignatures() {
    const blobs = await list();
    return blobs;
  }
  const signatures = await allSignatures();

  return (
    <div className="mt-8 min-h-96 flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold mb-4">Approved by</h2>
      {signatures.blobs.length === 0 ? (
        <p>No signatures found.</p>
      ) : (
        <div className="flex flex-wrap justify-center">
          {signatures.blobs.slice(-8).map((signature) => (
            <div key={signature.pathname} className="m-2">
              <Image
                alt={signature.pathname}
                key={signature.pathname}
                src={signature.url}
                width={300}
                height={150}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      )}
      <p>If you want to approve this project, please click <Link className='underline' href='/contact'>here</Link></p>
    </div>
  )
}