import LeftSidebar from "@/components/LeftSidebar";
import HomeComponent from "@/components/HomeComponent";
import RightSidebar from "@/components/RightSidebar";
import { Database } from "@/lib/supabase";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { headers, cookies } from "next/headers";
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";

const Home = async () => {
	const supabase = createServerComponentSupabaseClient<Database>({ headers, cookies });

	const { data, error } = await supabase.auth.getUser();

	console.log(data, error);

	return (
		<div className="w-full h-full flex justify-center items-center relative bg-black">
			<Dialog defaultOpen={error?.status === 401}>
				<DialogContent>
					<Input />
				</DialogContent>
			</Dialog>

			<div className="max-w-[70vw] w-full h-full flex relative">
				<LeftSidebar />
				<HomeComponent />
				<RightSidebar />
			</div>
		</div>
	);
};

export default Home;
