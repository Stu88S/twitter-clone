import Tweet from "./ClientComponents/Tweet";
import { cookies, headers } from "next/headers";
import { getTweets } from "@/lib/supabase/queries";
import ComposeTweet from "./ServerCompnents/ComposeTweet";
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";

const HomeComponent = async () => {
	const supabaseClient = createServerComponentSupabaseClient({ cookies, headers });

	const { data: userData, error: userError } = await supabaseClient.auth.getUser();
	const userId = userData?.user?.id;
	const res = await getTweets(userData.user?.id);

	return (
		<main className="flex xl:w-[50%] w-[600px] h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600">
			<h1 className="text-xl font-bold p-6 backdrop-blur bg-black/10 sticky top-0">Home</h1>
			<div className="flex items-stretch px-4 py-4 space-x-2 border-t-[0.5px] border-b-[0.5px] border-gray-600 relative">
				<div className="w-10 h-10 bg-slate-400 rounded-full flex-none"></div>
				<ComposeTweet />
			</div>
			<div className="flex flex-col w-full ">
				{res?.error && <div>Server error</div>}
				{res?.data && res.data.map((tweet: any) => <Tweet key={tweet.id} tweet={tweet} currentUserId={userId} />)}
			</div>
		</main>
	);
};

export default HomeComponent;
