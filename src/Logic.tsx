import { Button, Input } from "@chakra-ui/react";
import { useCallback, useRef, useState } from "react";
import { useMoralis, useWeb3Contract, useMoralisFile } from "react-moralis";

const Logic = () => {
	const { isAuthenticated, authenticate } = useMoralis();
	const [file, setFile] = useState<any | null>(null);
	// const file = useRef();

	const { saveFile } = useMoralisFile();

	let mydata = {
		name: "my name",
		description: "this is mine",
		image: "",
	};

	const onimagechange = (e: {
		target: { files: any };
		preventDefault: () => void;
	}) => {
		setFile(e.target.files[0]);
	};

	const savefile = async (e: { preventDefault: () => void }) => {
		e.preventDefault();

		const tags = { groupId: "some-group-id" };

		if (file != null)
			await saveFile("lloook.png", file, {
				saveIPFS: true,
				onSuccess: (file) => {
					console.log(file);
				},
				onError: (err) => {
					console.log(err);
				},
			});
	};

	const { data, error, runContractFunction, isFetching, isLoading } =
		useWeb3Contract({
			abi: {},
			contractAddress: "0x0AdBa63215ed927F24fA8C2446dD5C5aa3196185",
			functionName: "setCompleted",
			params: {
				secondsAgos: [0, 10],
			},
		});

	const [web, setWeb] = useState<any>();

	useCallback(() => {
		setWeb(data);
	}, [isLoading]);

	if (!isAuthenticated)
		return (
			<div style={{ padding: 30 }}>
				<Button
					onClick={() =>
						authenticate().then((user) => {
							user?.set("name", "mihledamoyi");
							user?.set("email", "mihle.damoyi@sovtech.com");
							user?.save();
						})
					}
				>
					Login
				</Button>
			</div>
		);

	if (error) return <span>nd</span>;

	return (
		<div style={{ padding: 30 }}>
			<div>
				<form onSubmit={savefile}>
					<input
						type="file"
						accept="image/*"
						disabled={false}
						id="file"
						onChange={(e) => setFile(e.target.files && e.target.files[0])}
					/>
					<button disabled={isFetching}>save</button>
				</form>
				{/* <div>{web ? JSON.stringify(web) : " "}</div> */}
				Butt
			</div>
		</div>
	);
};

export default Logic;
