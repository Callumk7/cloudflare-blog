import { useRootData } from "@/root";

export function Avatar() {
	const { S3_URL } = useRootData();
	return (
		<div className="relative aspect-square w-9/12 overflow-hidden rounded-full">
			<img
				src={`${S3_URL}/images/avatar-scaled.jpeg`}
				alt="portrait"
				className="h-full w-full object-cover object-center"
			/>
		</div>
	);
}
