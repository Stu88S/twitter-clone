import { BiHomeCircle, BiUser } from "react-icons/bi";
import { HiOutlineHashtag } from "react-icons/hi";
import { BsBell, BsBookmark, BsTwitter, BsEnvelope, BsThreeDots } from "react-icons/bs";
import Link from "next/link";

const NAVIGATION_ITEMS = [
	{
		title: "Twitter",
		icon: BsTwitter,
	},
	{
		title: "Home",
		icon: BiHomeCircle,
	},
	{
		title: "Explore",
		icon: HiOutlineHashtag,
	},
	{
		title: "Notifications",
		icon: BsBell,
	},
	{
		title: "Messages",
		icon: BsEnvelope,
	},
	{
		title: "Bookmarks",
		icon: BsBookmark,
	},
	{
		title: "Profile",
		icon: BiUser,
	},
];

const Home = () => {
	return (
		<div className="w-full h-full flex justify-center items-center relative bg-black">
			<div className="max-w-screen-xl w-full h-full flex relative">
				{/* LEFT SIDEBAR FOR NAVIGATION */}
				<section className="fixed w-[275px] flex flex-col items-stretch h-screen ">
					<div className="w-full flex flex-col items-stretch h-full space-y-4 my-4">
						{NAVIGATION_ITEMS.map(item => (
							<Link
								className="hover:bg-white/10 text-3xl transition duration-200 flex item-center justify-start w-fit space-x-4 rounded-3xl py-2 px-6"
								href={`/${item.title.toLowerCase()}`}
								key={item.title}>
								<div>
									<item.icon />
								</div>
								{item.title !== "Twitter" && <div>{item.title}</div>}
							</Link>
						))}
						<button className="w-full m-4 rounded-full bg-twitter py-4 text-2xl text-center hover:bg-opacity-70 transition duration-200">
							Tweet
						</button>
					</div>
					<button className="w-full rounded-full flex items-center space-x-2 m-4 bg-transparent p-4 text-center hover:bg-white/10 transition duration-200 justify-between">
						<div className="flex items-center space-x-2">
							<div className="rounded-full bg-slate-400 w-10 h-10"></div>
							<div className="text-left text-sm">
								<div className="font-semibold">Club of Coders</div>
								<div className="">@clubofcoders</div>
							</div>
						</div>
						<div>
							<BsThreeDots />
						</div>
					</button>
				</section>
				{/* <main>Home timeline</main>
				<section>right section</section> */}
			</div>
		</div>
	);
};

export default Home;

