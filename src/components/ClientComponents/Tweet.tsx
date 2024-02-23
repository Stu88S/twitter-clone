"use client";

import { toast } from "sonner";
import React, { useState, useTransition } from "react";
import { TweetType, likeTweet } from "@/lib/supabase/getTweets";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import { BsDot, BsThreeDots, BsChat } from "react-icons/bs";
import { IoStatsChart, IoShareOutline } from "react-icons/io5";
import { AiOutlineHeart, AiOutlineRetweet } from "react-icons/ai";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";

dayjs.extend(relativeTime);

type TweetProps = {
	tweet: TweetType;
};

const Tweet = ({ tweet }: TweetProps) => {
	// const [supabase] = useState(() => createBrowserSupabaseClient());
	const [supabase] = useState(createBrowserSupabaseClient);
	// const user = useUser();
	let [isLikePending, startTransition] = useTransition();

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
								<div className="font-bold">{tweet.profiles.full_name ?? ""}</div>
								<div className="text-gray-500">@{tweet.profiles.username}</div>
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
							<button
								disabled={isLikePending}
								onClick={() => {
									supabase.auth
										.getUser()
										.then(res => {
											if (res.data && res.data.user) {
												const user = res.data.user;
												startTransition(() => likeTweet({ tweetId: tweet.id, userId: user.id }));
											} else {
												toast("please login to like a tweet");
											}
										})
										.catch(() => {
											toast.error("authentication failed");
										});
								}}
								className="rounded-full hover:bg-white/10 transition duration-200 p-2 cursor-pointer">
								<AiOutlineHeart />
							</button>
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
