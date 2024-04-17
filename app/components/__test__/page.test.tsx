// RoleSlider.test.js
import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RoleSlider from "../RoleSlider";
import "@testing-library/jest-dom";
import { waitFor } from "@testing-library/react";

// Mock CvaClsxButton component
// jest.mock("../CvaClsxButton", () => {
//   return {
//     __esModule: true,
//     default: jest.fn(({ onClick, children }) => (
//       <button onClick={onClick}>{children}</button>
//     )),
//   };
// });

// Mock axiosConfig module
jest.mock("../../utils/axiosConfig/axiosConfig", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("RoleSlider", () => {
  it("Check RoleSlider render", () => {
    const setSliderStatus = jest.fn();
    render(
      <RoleSlider setSliderStatus={setSliderStatus} sliderStatus={false} />
    );
    const addMemberProfileText = screen.getByText("Add Member Profile");
    expect(addMemberProfileText).toBeInTheDocument();
  });

  it("Slider close when cancel button is clicked", async () => {
    const setSliderStatus = jest.fn();
    render(
      <RoleSlider setSliderStatus={setSliderStatus} sliderStatus={false} />
    );
    await userEvent.click(screen.getByRole("button", { name: "Cancel" }));
    expect(setSliderStatus).toHaveBeenCalledTimes(1);
  });

  it("Slider toggles when slider button is clicked", async () => {
    const setSliderStatus = jest.fn();
    render(
      <RoleSlider setSliderStatus={setSliderStatus} sliderStatus={false} />
    );
    await userEvent.click(screen.getByRole("button", { name: "Slider" }));
    expect(setSliderStatus).toHaveBeenCalledTimes(1);
  });

  it("Two new inputs added after 'Add more' button is clicked", async () => {
    const setSliderStatus = jest.fn();
    render(
      <RoleSlider setSliderStatus={setSliderStatus} sliderStatus={false} />
    );
    await userEvent.click(screen.getByRole("button", { name: "Add more" }));
    const inputCount = screen.getAllByRole("textbox").length;
    console.log(screen.getAllByRole("textbox"));
    expect(inputCount).toBe(4); // Assuming each input adds one textbox
  });

  it("Delete two new inputs added after 'Trash Icon' button is clicked", async () => {
    const setSliderStatus = jest.fn();
    render(
      <RoleSlider setSliderStatus={setSliderStatus} sliderStatus={false} />
    );

    // Simulate clicking the "Add more" button twice to add two inputs
    await userEvent.click(screen.getByRole("button", { name: "Add more" }));
    await userEvent.click(screen.getByRole("button", { name: "Add more" }));

    // Get the initial count of input elements
    const initialInputCount = screen.getAllByRole("textbox").length;

    // Simulate clicking the "Trash" icon button to remove two inputs
    await userEvent.click(screen.getAllByTestId("trashButton")[0]);
    await userEvent.click(screen.getAllByTestId("trashButton")[1]);

    // Get the updated count of input elements after removal
    const updatedInputCount = screen.getAllByRole("textbox").length;

    // Assert that the count decreased by two after removal
    expect(updatedInputCount).toBe(initialInputCount - 2);
  });

  it("Submit after 'Create' button is clicked", async () => {
    const setSliderStatus = jest.fn();
    const submitMock = jest.fn();

    render(
      <RoleSlider
        setSliderStatus={setSliderStatus}
        sliderStatus={false}
        submitMock={submitMock}
      />
    );

    await userEvent.type(screen.getByLabelText("Role name *"), "Test name");
    await userEvent.type(screen.getByLabelText("Role details"), "Test details");
    await userEvent.click(screen.getByText("Create"));

    // Check if submitMock is called with the expected data
    expect(submitMock).toHaveBeenCalledWith({
      role: [{ name: "Test name", details: "Test details" }],
    });
  });
});
