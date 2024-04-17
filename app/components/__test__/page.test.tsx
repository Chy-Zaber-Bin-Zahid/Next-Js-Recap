// RoleSlider.test.js
import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RoleSlider from "../RoleSlider";
import "@testing-library/jest-dom";

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

  
});
