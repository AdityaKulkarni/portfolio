import Introduction from './pages/introduction'
import Experience from './pages/experience'
import Projects from './pages/projects'
import Medium from './pages/medium'
import Hobbies from './pages/hobbies'
import Spacer from './components/spacer'

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col justify-between p-24 bg-black text-white'>
			<Introduction />

			<Experience />
			<Projects />
			<Medium />
			<Hobbies />
		</main>
	)
}
