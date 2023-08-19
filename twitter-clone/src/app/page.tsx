import LeftSidebar from "@/components/LeftSidebar";
import HomeComponent from "@/components/HomeComponent";
import { BsSearch } from "react-icons/bs";

const Home = () => {
	return (
		<div className="w-full h-full flex justify-center items-center relative bg-black">
			<div className="max-w-[70vw] w-full h-full flex relative">
				{/* LEFT SIDEBAR FOR NAVIGATION */}
				<LeftSidebar />
				{/* HOME COMPONENT SECTION */}
				<HomeComponent />
				<section className=" mt-2 max-w-[350px] sticky top-2 flex flex-col items-stretch h-screen px-6">
					<div>
						<div className="relative w-full h-full group">
							<input
								id="searchBox"
								type="text"
								placeholder="Search"
								className="outline-none peer focus:border-twitter focus:border bg-neutral-900/90 w-full h-full rounded-xl py-4 pl-10 pr-4"
							/>
							<label
								htmlFor="searchBox"
								className="absolute top-0  left-0 h-full flex items-center justify-center p-4  peer-focus:text-twitter">
								<BsSearch className="w-5 h-5" />
							</label>
						</div>
					</div>
					<div className="flex flex-col rounded-xl bg-neutral-900/80  my-4">
						<h3 className="font-bold text-xl px-4 my-4">What's happening</h3>
						<div>
							{Array.from({ length: 5 }).map((_, i) => (
								<div key={i} className="hover:bg-white/10 p-4 last:rounded-b-xl transition duration 200">
									<div className="font-bold text-lg">#trending {i + 1}</div>
									<div className="text-xs text-neutral-400">35.4k</div>
								</div>
							))}
						</div>
					</div>
					<div>
						<div className="flex flex-col rounded-xl bg-neutral-900/80  my-4">
							<h3 className="font-bold text-xl px-4 my-4">Who to follow</h3>
							<div>
								{Array.from({ length: 5 }).map((_, i) => (
									<div
										key={i}
										className="hover:bg-white/10 p-4 flex justify-between items-center last:rounded-b-xl transition duration 200">
										<div className="flex items-center space-x-2">
											<div className="w-10 h-10 bg-neutral-600 rounded-full flex-none"></div>
											<div className="flex flex-col">
												<div className="font-bold text-white">Other User</div>
												<div className="text-gray-500 text-xs">@otheruser123</div>
											</div>
										</div>
										<button className="rounded-full px-4 py-2 bg-white text-neutral-950">Follow</button>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Home;
