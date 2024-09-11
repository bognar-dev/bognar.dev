import fs from 'fs/promises'
import path from 'path'
import Image from 'next/image'
import SignatureForm from './signature-form'
import Link from 'next/link'

async function getSignatures() {
  const signaturesDir = path.join(process.cwd(), 'public', 'signatures')
  try {
    const files = await fs.readdir(signaturesDir)
    return files.filter(file => file.endsWith('.png'))
  } catch (error) {
    console.error('Error reading signatures directory:', error)
    return []
  }
}

export default async function SignatureGallery() {
  const signatures = await getSignatures()

  return (
    <div className="mt-8 min-h-96 flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold mb-4">Approved by</h2>
      {signatures.length === 0 ? (
        <p>No signatures found.</p>
      ) : (
        <div className="flex flex-wrap justify-center">
          {signatures.slice(-8).map((signature) => (
            <div key={signature} className="m-2">
              <Image
            src={`/signatures/${signature}`}
            alt={`Signature ${signature}`}
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