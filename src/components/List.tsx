import React from "react";
import { IState as IProps } from "../App";
export default function List({ people }: IProps) {
	const result = (): JSX.Element[] => {
		return people.map((person) => (
			<div className="list-item-container">
				{person.name} - {person.age} - {person.bio}
			</div>
		));
	};
	return (
		<div className="list-container">
			<h1>List</h1>
			{result()}
		</div>
	);
}
