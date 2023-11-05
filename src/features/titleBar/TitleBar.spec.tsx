import { RenderResult, render } from "@testing-library/react";
import TitleBar from "./TitleBar";
import { RootState } from "@/store/store";
import { UserState } from "@/features/user/userSlice";
import { useSelector } from "react-redux";

interface MockedUseSelector {
  useSelector: { mockImplementation: typeof useSelector };
}

// Mock the useSelector hook from react-redux
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
}));

// Declare mock function
const mockUseSelector =
  jest.requireMock<MockedUseSelector>("react-redux").useSelector;

describe("TitleBar", () => {
  let renderResult: RenderResult;
  let mockState: RootState;

  beforeEach(() => {
    // Mock the Redux store state
    mockState = {
      user: {
        name: "Test User",
        title: "Test Title",
        email: "test@email.com",
        githubLink: "https://github.com/test",
        linkedInLink: "https://linkedin.com/in/test",
      },
    };
    // Implement the useSelector function
    mockUseSelector.mockImplementation(
      (callback: (state: RootState) => UserState) => callback(mockState),
    );

    renderResult = render(<TitleBar />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly", () => {
    expect(renderResult).toBeTruthy();
  });

  it("renders email correctly", () => {
    expect(renderResult.getByText(mockState.user.email)).toBeInTheDocument();
  });

  it("renders LinkedIn link correctly", () => {
    expect(renderResult.getByText("LinkedIn").closest("a")).toHaveAttribute(
      "href",
      mockState.user.linkedInLink,
    );
  });

  it("renders GitHub link correctly", () => {
    expect(renderResult.getByText("GitHub").closest("a")).toHaveAttribute(
      "href",
      mockState.user.githubLink,
    );
  });
});
