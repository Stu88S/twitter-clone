import LeftSidebar from "@/components/LeftSidebar";
import HomeComponent from "@/components/HomeComponent";

import RightSidebar from "@/components/RightSidebar";

const Home = () => {
	return (
		<div className="w-full h-full flex justify-center items-center relative bg-black">
			<div className="max-w-[70vw] w-full h-full flex relative">
				<LeftSidebar />
				<HomeComponent />
				<RightSidebar />
			</div>
		</div>
	);
};

export default Home;
