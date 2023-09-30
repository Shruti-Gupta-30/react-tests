import { render, screen, fireEvent } from "@testing-library/react";
import { RandomUser } from "components/RandomUser/RandomUser";
import axios from "axios";

jest.mock("axios");

describe("<RandomUser />", () => {
	it("loads user when clicking on the button", async () => {
		render(<RandomUser />);
		const button = screen.getByRole("button");

		axios.get.mockResolvedValueOnce({ data: MOCK_USER_RESPONSE });

		fireEvent.click(button);
		const titleElement = await screen.findByText("Simone Martins");
		expect(titleElement.textContent).toBe("Simone Martins");

		axios.get.mockResolvedValueOnce({ data: MOCK_USER_RESPONSE_2 });

		fireEvent.click(button);
		const titleElement2 = await screen.findByText("Jake Taylor");
		expect(titleElement2.textContent).toBe("Jake Taylor");
	});
});

const MOCK_USER_RESPONSE = {
	results: [
		{
			gender: "female",
			name: {
				title: "Ms",
				first: "Simone",
				last: "Martins",
			},
			location: {
				street: {
					number: 6151,
					name: "Rua Santo Ant\u00F4nio ",
				},
				city: "Cod\u00F3",
				state: "Paran\u00E1",
				country: "Brazil",
				postcode: 56600,
				coordinates: {
					latitude: "-78.7957",
					longitude: "91.7950",
				},
				timezone: {
					offset: "+5:30",
					description: "Bombay, Calcutta, Madras, New Delhi",
				},
			},
			email: "simone.martins@example.com",
			login: {
				uuid: "d9cb9a37-81de-47ca-986d-f3d79850fe0c",
				username: "ticklishwolf302",
				password: "google",
				salt: "eY4EWOuG",
				md5: "ef05f5b176dad5aa1397a93464cd69fc",
				sha1: "f41e7a595159a41614d9a147f6485b967b571984",
				sha256:
					"efa89934108212fc1f2a6d98f682272f12539aa8181ba776b765b69fd870bfea",
			},
			dob: {
				date: "1990-10-16T03:23:30.596Z",
				age: 32,
			},
			registered: {
				date: "2012-02-22T09:34:38.568Z",
				age: 11,
			},
			phone: "(53) 0980-7940",
			cell: "(48) 1758-6050",
			id: {
				name: "CPF",
				value: "977.554.499-49",
			},
			picture: {
				large: "https://randomuser.me/api/portraits/women/60.jpg",
				medium: "https://randomuser.me/api/portraits/med/women/60.jpg",
				thumbnail: "https://randomuser.me/api/portraits/thumb/women/60.jpg",
			},
			nat: "BR",
		},
	],
	info: {
		seed: "f0fd0eeaf1568192",
		results: 1,
		page: 1,
		version: "1.4",
	},
};
const MOCK_USER_RESPONSE_2 = {
	results: [
		{
			gender: "male",
			name: {
				title: "Mr",
				first: "Jake",
				last: "Taylor",
			},
			location: {
				street: {
					number: 1803,
					name: "Karamu Road",
				},
				city: "Taupo",
				state: "Tasman",
				country: "New Zealand",
				postcode: 20937,
				coordinates: {
					latitude: "54.4811",
					longitude: "-48.9796",
				},
				timezone: {
					offset: "-5:00",
					description: "Eastern Time (US & Canada), Bogota, Lima",
				},
			},
			email: "jake.taylor@example.com",
			login: {
				uuid: "8b326bc1-97f8-4d11-88d9-e41048a7de16",
				username: "ticklishmeercat888",
				password: "love123",
				salt: "KD7FZfhr",
				md5: "f3f99e710c521e2c7a0563686e8cb6c4",
				sha1: "ec4b8313696091557a2e6df94cb99006d23b55ad",
				sha256:
					"88cbb4ea634ae88bf8505ef10da144d9808dd1dfd5fa7beb317813cbb74592e2",
			},
			dob: {
				date: "1961-09-13T17:13:19.384Z",
				age: 62,
			},
			registered: {
				date: "2004-05-31T08:07:28.718Z",
				age: 19,
			},
			phone: "(256)-488-1314",
			cell: "(851)-284-3416",
			id: {
				name: "",
				value: null,
			},
			picture: {
				large: "https://randomuser.me/api/portraits/men/2.jpg",
				medium: "https://randomuser.me/api/portraits/med/men/2.jpg",
				thumbnail: "https://randomuser.me/api/portraits/thumb/men/2.jpg",
			},
			nat: "NZ",
		},
	],
	info: {
		seed: "0884c487afd3e705",
		results: 1,
		page: 1,
		version: "1.4",
	},
};
