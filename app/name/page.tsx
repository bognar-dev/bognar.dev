export default function Page({ params }: { params: { name: string } }) {
  return <div>My Name: {params.name}</div>
}