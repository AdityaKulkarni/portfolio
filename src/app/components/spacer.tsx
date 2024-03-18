export type ISpacer = {
	height?: number
	width?: number
}
const Spacer = ({height = 0, width = 0}: ISpacer) => {
	return <div className={`my-[${height}px] mx-[${width}px]`}>&nbsp;</div>
}

export default Spacer
