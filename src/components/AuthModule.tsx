"use client";

import { Dialog } from "@radix-ui/react-dialog";
import React, { useState } from "react";
import { DialogContent } from "./ui/dialog";
import { Input } from "./ui/input";

const AuthModule = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Dialog open={isOpen} onOpenChange={setIsOpen}>
			<DialogContent>
				<Input />
			</DialogContent>
		</Dialog>
	);
};

export default AuthModule;
