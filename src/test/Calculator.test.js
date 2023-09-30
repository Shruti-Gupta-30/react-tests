import { render, screen } from "@testing-library/react";
import { Calculator } from "components/Calculator";

describe("<Calculator />", () => {
	it(" has 'Calculator' displayed somewhere", () => {
		render(<Calculator />);
		const textElement = screen.getByText("Calculator");
		expect(textElement.textContent).toBe("Calculator");
	});
	it(" has and h1 that contains 'Calculator'", () => {
		render(<Calculator />);
		const titleElement = screen.getByRole("heading", { level: 1 });
		expect(titleElement.textContent).toBe("Calculator");
	});

	it("performs 0+0 by default", () => {
		render(<Calculator />);
		const { getValueA, getValueB, getOperator, getResult } = getCalculator();

		expect(getValueA()).toBe("0");
		expect(getValueB()).toBe("0");
		expect(getOperator()).toBe("+");
		expect(getResult()).toBe("0");
	});

	it("uses the default values correctly ", () => {
		render(<Calculator defaultA={12} defaultB={"10"} defaultOperator={"/"} />);

		const { getValueA, getValueB, getOperator, getResult } = getCalculator();

		expect(getValueA()).toBe("12");
		expect(getValueB()).toBe("10");
		expect(getOperator()).toBe("/");
		expect(getResult()).toBe("1.2");
	});
});

function getCalculator() {
	return {
		getValueA: () => screen.getByTestId("inputA").value,
		getValueB: () => screen.getByTestId("inputB").value,
		getOperator: () => screen.getByTestId("operator").value,
		getResult: () => screen.getByTestId("result").textContent,
	};
}
