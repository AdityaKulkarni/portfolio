import Image from 'next/image'
import Introduction from './pages/introduction'
import Experience from './pages/experience'
import Projects from './pages/projects'
import Medium from './pages/medium'
import Hobbies from './pages/hobbies'

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<Introduction />
			<Experience />
			<Projects />
			<Medium />
			<Hobbies />
		</main>
	)
}
