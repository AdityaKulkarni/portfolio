'use client'
import Introduction from './pages/introduction'
import Experience from './pages/experience'
import Projects from './pages/projects'
import Medium from './pages/medium'
import Hobbies from './pages/hobbies'
import { useRef } from 'react'
import {motion, useScroll, useSpring} from "motion/react"
import useParallax from './hooks/useParallax'

export default function Home() {

	const scrollable = (Child: () => JSX.Element) => {
		return function ScrollableComponent(){
			const ref = useRef(null)
			const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
    		const y = useParallax(scrollYProgress, 300)
			return <div className='flex h-[100vh] flex-col bg-black text-white snap-start relative'>
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
}
