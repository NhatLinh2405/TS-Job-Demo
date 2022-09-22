import React, { useState } from "react";
import { IState as Props } from "../App";
interface IProps {
	people: Props["people"];
	setPeople: React.Dispatch<
		React.SetStateAction<
			{
				name: string;
				age: number;
				bio: string;
			}[]
		>
	>;
}
export default function Form({ people, setPeople }: IProps) {
	const [inputData, setInputData] = useState({ name: "", age: "", bio: "" });

	const onChangeData = (
		e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
	): void => {
		setInputData({ ...inputData, [e.target.name]: e.target.value });
	};

	const onSubmitData = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		setPeople([
			...people,
			{
				name: inputData.name,
				age: Number(inputData.age),
				bio: inputData.bio,
			},
		]);
		setInputData({ name: "", age: "", bio: "" });
	};

	return (
		<div className="form-container">
			<h1>Form</h1>
			<form onSubmit={onSubmitData}>
				<input
					value={inputData.name}
					type="text"
					name="name"
					id="name"
					placeholder="name"
					onChange={onChangeData}
				/>
				<input
					value={inputData.age}
					type="number"
					name="age"
					id="age"
					placeholder="age"
					onChange={onChangeData}
				/>
				<textarea
					value={inputData.bio}
					name="bio"
					id="bio"
					placeholder="Bio Description"
					onChange={onChangeData}
				></textarea>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}
