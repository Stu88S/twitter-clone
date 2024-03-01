"use client";

import { toast } from "sonner";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { likeTweet, unlikeTweet } from "@/lib/supabase/mutations";
import React, { useTransition } from "react";

type LikeButtonProps = {
	tweetId: string;
	userId: string | null;
	likesCount: number | null;
	hasUserLiked: boolean;
};

const LikeButton = ({ tweetId, userId, likesCount, hasUserLiked }: LikeButtonProps) => {
	let [isLikePending, startTransition] = useTransition();

	return (
		<button
			disabled={isLikePending || !userId}
			onClick={() => {
				if (userId) {
					startTransition(() => (hasUserLiked ? unlikeTweet({ tweetId, userId }) : likeTweet({ tweetId, userId })));
				} else {
					toast("please login to like a tweet");
				}
			}}
			className="rounded-full flex item-center space-x-2 hover:bg-white/10 transition duration-200 p-2 cursor-pointer">
			{hasUserLiked ? <AiFillHeart className="w-5 h-5 text-rose-600" /> : <AiOutlineHeart className="w-5 h-5" />}
			<span>{likesCount ?? 0}</span>
		</button>
	);
};

export default LikeButton;
