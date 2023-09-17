"use client";

import React from "react";
import { useRef } from "react";
import { PostgrestError } from "@supabase/supabase-js";
import { toast } from "sonner";

type FormClientComponentProps = {
	serverAction: (
		formData: FormData
	) => Promise<{ error: { message: string }; data?: undefined } | { data: null; error: PostgrestError | null } | undefined>;
};

const FormClientComponent = ({ serverAction }: FormClientComponentProps) => {
	const resetRef = useRef<HTMLButtonElement>(null);

	const handleSubmitTweet = async (data: any) => {
		try {
			const res = await serverAction(data);
			if (res?.error) {
				return toast.error(res.error.message);
			}
			toast.success("Tweet sent successfully!");
			resetRef.current?.click();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<form action={handleSubmitTweet} className="flex flex-col w-full h-full">
			<input
				type="text"
				name="tweet"
				className="w-full h-full text-2xl placeholder:text-gray-600 bg-transparent border-b-[0.5px] border-gray-600 p-4 outline-none border-none"
				placeholder="What's happening?"
			/>
			<div className="w-full justify-between items-center flex">
				<div></div>
				<div className="w-full max-w-[100px]">
					<button
						type="submit"
						className="w-full rounded-full bg-primary px-4 py-2 text-lg text-center hover:bg-opacity-70 transition duration-200 font-bold">
						Tweet
					</button>
					<button ref={resetRef} type="reset" className="invisible"></button>
				</div>
			</div>
		</form>
	);
};

export default FormClientComponent;
