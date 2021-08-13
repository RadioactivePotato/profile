import 'styles/global.css'
import 'styles/open-sauce.css'
import 'styles/theme.css'

import { AppProps } from 'next/app'
import { DefaultSeo as DefaultSEO } from 'next-seo'
import { useRouter } from 'next/router'
import Head from 'next/head'
import React, { FC, useEffect } from 'react'
import ReactGA from 'react-ga'

// This should not be needed but apparently it fixes types.
import 'styled-jsx'

const description = `
I'm a young person who's interested in programming, aviation, and music. I'm currently working on several projects including Water.css, Punct, and Doggo.Ninja. 
`.trim()

const App: FC<AppProps> = ({ Component, pageProps }) => {
	const router = useRouter()

	useEffect(() => {
		ReactGA.initialize('UA-116663597-5')
		ReactGA.set({ page: router.pathname })
		ReactGA.pageview(router.pathname)
	}, [])

	return (
		<>
			<Head>
				<title>Kognise</title>
				<link rel='icon' href='https://media.kognise.dev/logos/pfp.png' />
				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link href='https://fonts.googleapis.com/css2?family=Syne:wght@800&display=swap' rel='stylesheet' />
			</Head>

			<DefaultSEO
				title='Kognise'
				description={description}
				canonical='https://kognise.dev/'
				additionalMetaTags={[
					{
						name: 'keywords',
						content: 'kognise,website,personal,portfolio,projects,about,contact,info,developer,designer,resume',
					},
					{
						name: 'theme-color',
						content: '#0e7dde',
					},
				]}
				openGraph={{
					type: 'website',
					locale: 'en_US',
					url: 'https://kognise.dev/',
					title: 'Kognise',
					description,
					images: [
						{
							url: 'https://media.kognise.dev/logos/banner.png',
							width: 1500,
							height: 500,
							alt: 'Kognise: Development and Design',
						},
					],
					site_name: 'Kognise',
				}}
				twitter={{
					handle: '@kognise',
					site: '@kognise',
					cardType: 'summary_large_image',
				}}
			/>

			<Component {...pageProps} />
		</>
	)
}

export default App
