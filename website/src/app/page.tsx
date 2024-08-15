import { DrawerScrollableInputs } from "@/components/DrawerScrollableInputs";

import { Input } from "@/components/ui/input";

export default function Home() {
	return (
		<main className="min-h-screen flex flex-1 flex-col">
			<div className=" flex flex-col gap-5 p-4">
				<Input type="text" placeholder="First Name" />
				<Input type="text" placeholder="Last Name" />
				<DrawerScrollableInputs />
			</div>
			<div className="flex flex-1 justify-end flex-col">
				<p className="bg-orange-300 text-center text-sm">Sticky Footer</p>
			</div>
		</main>
	);
}
