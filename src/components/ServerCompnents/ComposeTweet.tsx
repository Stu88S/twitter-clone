import React from "react";
import { randomUUID } from "crypto";
import { revalidatePath } from "next/cache";
import { cookies, headers } from "next/headers";
import { SupabaseClient } from "@supabase/supabase-js";
import ComposeTweetForm from "../ClientComponents/ComposeTweetForm";
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";

const ComposeTweet = () => {
	async function submitTweet(formData: FormData) {
		"use server";

		const tweet = formData.get("tweet");

		if (!tweet) return;

		const supabaseClient = createServerComponentSupabaseClient({ cookies, headers });

		const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
		const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;

		if (!supabaseUrl || !supabaseSecretKey) return { error: { message: "supabase credentials are not provided!" } as any };

		const supabaseServer = new SupabaseClient(supabaseUrl, supabaseSecretKey);

		const { data: userData, error: userError } = await supabaseClient.auth.getUser();

		if (userError) return;

		const { data, error } = await supabaseServer.from("tweets").insert({
			user_id: userData.user.id,
			text: tweet.toString(),
			id: randomUUID(),
		});

		revalidatePath("/");

		return { data, error };
	}

	return <ComposeTweetForm serverAction={submitTweet} />;
};

export default ComposeTweet;
