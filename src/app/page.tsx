import LeftSidebar from "@/components/LeftSidebar";
import HomeComponent from "@/components/HomeComponent";
import RightSidebar from "@/components/RightSidebar";

const Home = async () => {
	return (
		<div className="w-full h-full flex justify-center items-center relative bg-black">
			<div className="xl:max-w-[70vw] justify-center w-full h-full flex relative">
				<LeftSidebar />
				<HomeComponent />
				<RightSidebar />
			</div>
		</div>
	);
};

export default Home;
