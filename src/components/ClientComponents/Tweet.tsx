"use server";

import dayjs from "dayjs";
import LikeButton from "./LikeButton";
import { AiOutlineRetweet } from "react-icons/ai";
import relativeTime from "dayjs/plugin/relativeTime";
import { BsDot, BsThreeDots, BsChat } from "react-icons/bs";
import { IoStatsChart, IoShareOutline } from "react-icons/io5";
import { TweetType, getLikesCount, isLiked } from "@/lib/supabase/queries";

dayjs.extend(relativeTime);

type TweetProps = {
	tweet: any;
	currentUserId?: string;
};

const Tweet = async ({ tweet, currentUserId }: TweetProps) => {
	return (
		<div>
			<div key={tweet.id} className="py-4 px-6 border-b-[0.5px] border-gray-600 flex space-x-4 w-full overflow-hidden">
				<div>
					<div className="w-10 h-10 bg-slate-200 rounded-full"></div>
				</div>
				<div>
					<div className="flex flex-col w-full space-y-2">
						<div className="flex items-center justify-between w-full">
							<div className="flex items-center space-x-1 w-full">
								<div className="font-bold">{tweet.full_name ?? ""}</div>
								<div className="text-gray-500">@{tweet.username}</div>
								<div className="text-gray-500">
									<BsDot />
								</div>
								<div className="text-gray-500">{dayjs(tweet.created_at).fromNow()}</div>
							</div>
							<div className="">
								<BsThreeDots />
							</div>
						</div>
						<div className="text-white text-base">{tweet.text}</div>

						<div className="bg-slate-400 aspect-square w-full h-80 rounded-xl "></div>

						<div className="flex items-center justify-around w-full pt-2">
							<div className="rounded-full hover:bg-white/10 transition duration-200 p-2 cursor-pointer">
								<BsChat />
							</div>
							<div className="rounded-full hover:bg-white/10 transition duration-200 p-2 cursor-pointer">
								<AiOutlineRetweet />
							</div>
							<LikeButton tweetId={tweet.id} likesCount={tweet.likes_count} hasUserLiked={Boolean(tweet?.user_has_liked)} />
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
		</div>
	);
};

export default Tweet;
