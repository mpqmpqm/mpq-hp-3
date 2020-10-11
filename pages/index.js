import Head from "next/head"
import LandingNav from "../components/pages/index/LandingNav"
import { routes } from "../components/PageNav"

export default function Home() {
  return (
    <>
      <Head>
        <title>MPQ</title>
      </Head>
      <main>
        <LandingNav routes={routes.filter(({ href }) => href !== `/`)} />
      </main>
    </>
  )
}
