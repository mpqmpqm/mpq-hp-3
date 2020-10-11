import Head from "next/head"
import LandingNav from "../components/pages/index/LandingNav"

export default function Home() {
  const routes = [
    {
      href: `/work/resume`,
      text: `Resume`,
    },
    {
      href: `/work`,
      text: `Work`,
    },
    {
      href: `/about`,
      text: "About Moi",
    },
  ]

  return (
    <>
      <Head>
        <title>MPQ</title>
      </Head>
      <main>
        <LandingNav routes={routes} />
      </main>
    </>
  )
}
