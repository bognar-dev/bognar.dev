'use server'

import { list, del, put } from '@vercel/blob';
import { revalidatePath } from 'next/cache';

export async function getSignatures() {
  try {
    const { blobs } = await list();
    return blobs.map(blob => ({
      url: blob.url,
      pathname: blob.pathname,
    }));
  } catch (error) {
    console.error('Error listing signatures:', error);
    throw new Error('Failed to list signatures');
  }
}

export async function deleteSignature(pathname: string) {
  try {
    await del(pathname);
    revalidatePath('/');
    return { success: true };
  } catch (error) {
    console.error('Error deleting signature:', error);
    throw new Error('Failed to delete signature');
  }
}

export async function renameSignature(oldPathname: string, newFilename: string) {
  try {
    const { blobs } = await list({ prefix: oldPathname });
    if (blobs.length === 0) {
      throw new Error('Original file not found');
    }
    const oldBlob = blobs[0];
    const response = await fetch(oldBlob.url);
    const blob = await response.blob();

    const { url } = await put(newFilename, blob, { access: 'public' });
    await del(oldPathname);

    revalidatePath('/');
    return { success: true, url };
  } catch (error) {
    console.error('Error renaming signature:', error);
    throw new Error('Failed to rename signature');
  }
}

export async function uploadSignature(file: File) {
  try {
    const { url } = await put(file.name, file, { access: 'public' });
    revalidatePath('/');
    return { success: true, url };
  } catch (error) {
    console.error('Error uploading signature:', error);
    throw new Error('Failed to upload signature');
  }
}