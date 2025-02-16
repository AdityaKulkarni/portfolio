'use client'

const Introduction = () => {

	return (
		<div className='flex flex-row flex-1 items-center min-h-screen'>
			{/* <div className="absolute inset-0 flex">
				<h1 className="text-white text-[230px] font-bold text-center">Aditya Kulkarni</h1>
			</div>
			<div className='relative top-10 left-[50%] translate-x-[-50%]'>
				<img src='/aditya.jpeg'
					className='h-[50vh] rounded-xl opacity-0 animate-fade'
					/>
			</div> */}
			<div className=" flex flex-1 items-center justify-center">
				<img src='/aditya.jpeg'
					className='h-[80vh] rounded-xl opacity-0 animate-fade'
				/>
			</div>
			<div className="flex flex-1">
				<h1 className="text-white text-[140px] font-bold">Aditya Kulkarni</h1>
			</div>
		</div>
	)
}

export default Introduction
