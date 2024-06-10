import { useRootData } from "@/root";

export function Avatar() {
	const { S3_URL } = useRootData();
	return (
		<div className="overflow-hidden relative w-9/12 rounded-full aspect-square">
			<img
				src={`${S3_URL}/images/avatar-scaled.jpeg`}
				alt="portrait"
				className="object-cover object-center w-full h-full"
			/>
		</div>
	);
}
