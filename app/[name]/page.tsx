export default function Page({ params }: { params: { name: string } }) {
  return <div>Hello {params.name}!</div>
}