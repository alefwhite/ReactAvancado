type Props = {
  title: string
}

export default function Home({ title = 'Teste 2' }: Props) {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}
