'use client'
const Introduction = dynamic(() => import("./pages/introduction"), {ssr: false})
const Experience = dynamic(() => import('./pages/experience'), {ssr: false})
const Projects = dynamic(() => import('./pages/projects'), {ssr: false})
const Medium = dynamic(() => import('./pages/medium'), {ssr: false})
const Hobbies = dynamic(() => import('./pages/hobbies'), {ssr: false})
import { useRef } from 'react'
import {motion, useScroll, useSpring} from "motion/react"
import useParallax from './hooks/useParallax'
import dynamic from 'next/dynamic'

export default function Home() {

	const scrollable = (Child: () => JSX.Element) => {
		return function ScrollableComponent(){
			const ref = useRef(null)
			const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
    		const y = useParallax(scrollYProgress, 300)
			return <div className='flex flex-col bg-black text-white snap-start relative'>
				<div ref={ref}>
					<Child />
				</div>
			</div>
		}
	}

	const components = [
		Introduction,
		Experience,
		Projects,
		Medium,
		Hobbies
	].map((Child: any) => scrollable(Child))
	const { scrollYProgress } = useScroll()
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })
	return (
		<main>
			{components.map((Component, index) => <Component key={index} />)}
			<motion.div className="fixed top-0 bottom-0 left-0 w-[5px] bg-[#4ff0b7] scale-y-0" style={{ scaleY }} />
		</main>
	)

	// return (
	// 	<main className='flex flex-col bg-black'>
	// 		<Introduction />
	// 		<Experience />
	// 		<Projects />
	// 		<Medium />
	// 		<Hobbies />
	// 	</main>
	// )
}
