import { BsDot, BsThreeDots, BsChat } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineRetweet } from "react-icons/ai";
import { IoStatsChart, IoShareOutline } from "react-icons/io5";

function HomeComponent() {
	return (
		<main className="flex w-[50%] max-w-[600px] h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600">
			<h1 className="text-xl font-bold p-6 backdrop-blur bg-black/10 sticky top-0">Home</h1>
			<div className="flex items-stretch px-4 py-4 space-x-2 border-t-[0.5px] border-b-[0.5px] border-gray-600 relative">
				<div className="w-10 h-10 bg-slate-400 rounded-full flex-none"></div>
				<div className="flex flex-col w-full h-full">
					<input
						type="text"
						className="w-full h-full text-2xl placeholder:text-gray-600 bg-transparent border-b-[0.5px] border-gray-600 p-4 outline-none border-none"
						placeholder="What's happening?"
					/>
					<div className="w-full justify-between items-center flex">
						<div></div>
						<div className="w-full max-w-[100px]">
							<button className="w-full rounded-full bg-primary px-4 py-2 text-lg text-center hover:bg-opacity-70 transition duration-200 font-bold">
								Tweet
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col">
				{Array.from({ length: 5 }).map((_, i) => (
					<div key={i} className="py-4 px-6 border-b-[0.5px] border-gray-600 flex space-x-4">
						<div>
							<div className="w-10 h-10 bg-slate-200 rounded-full"></div>
						</div>
						<div>
							<div className="flex flex-col space-y-2">
								<div className="flex items-center justify-between w-full">
									<div className="flex items-center space-x-1 w-full">
										<div className="font-bold">Club of Codersd</div>
										<div className="text-gray-500">@clubofcoders</div>
										<div className="text-gray-500">
											<BsDot />
										</div>
										<div className="text-gray-500">1 hour ago</div>
									</div>
									<div className="">
										<BsThreeDots />
									</div>
								</div>
								<div className="text-white text-base">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eveniet, reiciendis, beatae sequi modi provident optio,
									eaque pariatur omnis ea repellat ratione voluptate voluptates sapiente. In vel deserunt eligendi fugiat, consectetur omnis
									expedita aspernatur animi voluptatum velit ratione a rerum labore nisi minima, laborum exercitationem aliquid, harum ipsam
									nesciunt. Eius et similique sunt quam odio, earum minus?
								</div>

								<div className="bg-slate-400 aspect-square w-full h-80 rounded-xl "></div>
								<div className="flex items-center justify-around w-full pt-2">
									<div className="rounded-full hover:bg-white/10 transition duration-200 p-2 cursor-pointer">
										<BsChat />
									</div>
									<div className="rounded-full hover:bg-white/10 transition duration-200 p-2 cursor-pointer">
										<AiOutlineRetweet />
									</div>
									<div className="rounded-full hover:bg-white/10 transition duration-200 p-2 cursor-pointer">
										<AiOutlineHeart />
									</div>
									<div className="rounded-full hover:bg-white/10 transition duration-200 p-2 cursor-pointer">
										<IoStatsChart />
									</div>
									<div className="rounded-full hover:bg-white/10 transition duration-200 p-2 cursor-pointer">
										<IoShareOutline />
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</main>
	);
}

export default HomeComponent;
