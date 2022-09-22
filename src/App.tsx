import { useState } from "react";
import "./App.css";

import Form from "./components/Form";
import List from "./components/List";

export interface IState {
	people: { name: string; age: number; bio: string }[];
	// khai báo cái mảng c ó những giá trị trong object như trên
}

export default function App() {
	const [people, setPeople] = useState<IState["people"]>([
		{ name: "Linh", age: 21, bio: "Frontend Developer" },
	]);
	return (
		<div className="container">
			<Form people={people} setPeople={setPeople} />
			<List people={people} />
		</div>
	);
}
