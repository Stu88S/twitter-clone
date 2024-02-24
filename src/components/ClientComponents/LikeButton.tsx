"use client";

import { toast } from "sonner";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { likeTweet, unlikeTweet } from "@/lib/supabase/mutations";
import React, { useState, useTransition } from "react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";

type LikeButtonProps = {
	tweetId: string;
	likesCount: number | null;
	hasUserLiked: boolean;
};

const LikeButton = ({ tweetId, likesCount, hasUserLiked }: LikeButtonProps) => {
	let [isLikePending, startTransition] = useTransition();
	const [supabase] = useState(createBrowserSupabaseClient);

	return (
		<button
			disabled={isLikePending}
			onClick={() => {
				supabase.auth
					.getUser()
					.then(res => {
						if (res.data && res.data.user) {
							const user = res.data.user;
							startTransition(() => (hasUserLiked ? unlikeTweet({ tweetId, userId: user.id }) : likeTweet({ tweetId, userId: user.id })));
						} else {
							toast("please login to like a tweet");
						}
					})
					.catch(() => {
						toast.error("authentication failed");
					});
			}}
			className="rounded-full flex item-center space-x-2 hover:bg-white/10 transition duration-200 p-2 cursor-pointer">
			{likesCount ?? 0}

			{hasUserLiked ? <AiFillHeart className="w-5 h-5 text-rose-600" /> : <AiOutlineHeart className="w-5 h-5" />}
		</button>
	);
};

export default LikeButton;
