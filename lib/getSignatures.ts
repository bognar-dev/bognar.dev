import { list } from '@vercel/blob';
import { revalidatePath } from 'next/cache';

async function allSignatures() {
  const { blobs } = await list({
    prefix: 'public/signatures/',
  });
  return blobs;
}

export async function getSignatures() {
  const signatures = await allSignatures();
  revalidatePath('/')
  return signatures.map(blob => ({
    url: blob.url,
    name: blob.pathname.split('/').pop() || '',
  }));
}