import Head from 'next/head'
import WeatherApp from '../components'

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Head>
        <title>Weather App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <WeatherApp />
    </div>
  )
}
