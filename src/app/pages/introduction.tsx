'use client'
import {TypeAnimation} from 'react-type-animation'
import Spacer from '../components/spacer'

const Introduction = () => {
	return (
		<div className='flex flex-row flex-1'>
			<div className='flex flex-col flex-1'>
				<div className='text-[2em]'>Hi there!</div>
				<Spacer height={20} />
				<div className='text-[2em]'>
					I am <strong>Aditya Kulkarni</strong>
				</div>
				<Spacer height={20} />
				<div className='text-[2em]'>
					<TypeAnimation
						speed={50}
						repeat={Infinity}
						preRenderFirstString
						sequence={[
							500,
							'I am a student',
							1000,
							'I am a android developer',
							1500,
							'I am a react developer',
							2000,
							'I am a nodejs developer',
						]}
					/>
				</div>
				<Spacer height={20} />
				<div className='text-[1.5em]'>
					<div className='indent-10'>
						Welcome! I'm Aditya Kulkarni, a software engineer
						pursuing a Master's in Software Engineering from San
						Jose State University.
					</div>
					<Spacer height={20} />
					<div>
						With a strong foundation in programming languages, web
						technologies, and databases, I've delivered impactful
						solutions across diverse industries, from education to
						energy.
					</div>
					<Spacer height={20} />
					<div>
						I thrive on innovation and continuous learning, staying
						ahead of industry trends to deliver cutting-edge
						solutions. Explore my portfolio to see my work and how I
						can contribute to your team's success. Let's connect and
						discuss your project needs!
					</div>
				</div>
			</div>
			<div className='flex flex-col flex-1 items-center'>
				<img src='/aditya.jpg' className='h-[60vh] rounded-xl' />
			</div>
		</div>
	)
}

export default Introduction
