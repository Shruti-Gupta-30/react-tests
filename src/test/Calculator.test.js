import { render, screen } from "@testing-library/react";
import { Calculator } from "components/Calculator";

describe("<Calculator />", () => {
	it(" had 'Calculator' displayed somewhere", () => {
		render(<Calculator />);

		const textElement = screen.getByText("Calculator");
		screen.debug(textElement);
		expect(textElement.textContent).toBe("Calculator");
	});
});
