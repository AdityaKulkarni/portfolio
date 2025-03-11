import { Google, Instagram, LinkedIn } from "developer-icons";

const Contact = () => {
	return (
		<div className="flex flex-col flex-1 items-start text-black py-2">
			<div
				className={`text-white text-[40px] lg:text-[120px] text-start w-full p-4 lg:px-16`}
			>
				Contact
			</div>
			<div className="flex flex-col bg-white rounded-lg p-4 text-black m-4 lg:mx-16">
				<div className="flex flex-row mb-2">
					Email:
					<a href="mailto:kulkarniaditya1997@gmail.com">
						<span className="underline">
							kulkarniaditya1997@gmail.com
						</span>
					</a>
				</div>

                <div className="flex flex-row mb-2">
                    Phone:
					<a href="tel:+1-408-393-6393">
						<span className="underline">
                            +1-408-393-6393
						</span>
					</a>
				</div>

                
                <a href="/Aditya_Kulkarni_Resume.pdf" download="Aditya_Kulkarni_Resume">
                    <span className="underline">
                        Download My Resume
                    </span>
                </a>
			</div>
			<div className="flex flex-row flex-wrap gap-4 justify-normal p-4 lg:px-16">
				<a href="https://www.linkedin.com/in/adityakulkarni1997/">
					<LinkedIn />
				</a>
				<a href="https://www.instagram.com/adi_kulkarni97/?hl=en">
					<Instagram />
				</a>
				<a href="https://g.dev/AdityaKulkarni">
					<Google />
				</a>
                <a href="https://medium.com/@kulkarniaditya1997">
					<img height={84} width={84} src="medium.svg" alt="Medium" />
				</a>
			</div>
		</div>
	);
};

export default Contact;
