import { list } from '@vercel/blob';

async function allSignatures() {
  const { blobs } = await list({
    prefix: 'public/signatures/',
  });
  return blobs;
}

export async function getSignatures() {
  const signatures = await allSignatures();
  return signatures.map(blob => ({
    url: blob.url,
    name: blob.pathname.split('/').pop() || '',
  }));
}