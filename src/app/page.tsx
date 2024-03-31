import Form from "@/components/Form"
import { cookies } from 'next/headers'

export default function Home() {
  const cookieStore = cookies()
  const theme = cookieStore.get('test') || ""
  console.log(theme.value)
  return (
    <section className="w-2/3 mx-auto">
    <h1 className="text-center">Tvorba cvičení</h1>
    <Form/>
    {theme.value}
    </section>
  );
}
