'use client'

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { getSignatures, deleteSignature, renameSignature, uploadSignature } from "@/app/actions/signatureActions"

interface Signature {
  url: string;
  pathname: string;
}

export function SignatureGallery() {
  const [signatures, setSignatures] = useState<Signature[]>([])
  const [newName, setNewName] = useState<string>("")
  const [selectedSignature, setSelectedSignature] = useState<Signature | null>(null)
  const [file, setFile] = useState<File | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    fetchSignatures()
  }, [])

  async function fetchSignatures() {
    setIsLoading(true)
    try {
      const fetchedSignatures = await getSignatures()
      setSignatures(fetchedSignatures)
    } catch (error) {
      console.error("Error fetching signatures:", error)
    } finally {
      setIsLoading(false)
    }
  }

  async function handleDelete(pathname: string) {
    setIsLoading(true)
    try {
      await deleteSignature(pathname)
      await fetchSignatures()
    } catch (error) {
      console.error("Error deleting signature:", error)
    } finally {
      setIsLoading(false)
    }
  }

  async function handleRename(oldPathname: string) {
    if (!newName) return
    setIsLoading(true)
    try {
      const fileExtension = oldPathname.split('.').pop()
      const newFilename = `${newName}.${fileExtension}`
      await renameSignature(oldPathname, newFilename)
      await fetchSignatures()
      setNewName("")
      setSelectedSignature(null)
    } catch (error) {
      console.error("Error renaming signature:", error)
    } finally {
      setIsLoading(false)
    }
  }

  async function handleUpload() {
    if (!file) return
    setIsLoading(true)
    try {
      await uploadSignature(file)
      await fetchSignatures()
      setFile(null)
    } catch (error) {
      console.error("Error uploading signature:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Signature Gallery</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px]">
          <div className="grid grid-cols-3 gap-4">
            {signatures.map((signature, index) => (
              <div key={index} className="relative group">
                <img
                  src={signature.url}
                  alt={`Signature ${index + 1}`}
                  className="w-full h-auto object-contain border rounded"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete(signature.pathname)}
                    className="mr-2"
                    disabled={isLoading}
                  >
                    Delete
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => setSelectedSignature(signature)}
                    disabled={isLoading}
                  >
                    Rename
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
        {selectedSignature && (
          <div className="mt-4 flex items-center">
            <Input
              type="text"
              placeholder="New filename"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="mr-2"
            />
            <Button onClick={() => handleRename(selectedSignature.pathname)} disabled={isLoading}>
              Rename
            </Button>
          </div>
        )}
        <div className="mt-4 flex items-center">
          <Input
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="mr-2"
          />
          <Button onClick={handleUpload} disabled={!file || isLoading}>
            Upload
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}