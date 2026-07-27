import { RenderResult, render } from "@testing-library/react";
import TitleBar from "./TitleBar";
import { RootState } from "@/store/store";
import { UserState } from "@/features/user/userSlice";
import { useSelector } from "react-redux";

import "@testing-library/jest-dom";

if (typeof document === "undefined") {
  const { JSDOM } = require("jsdom");
  const jsdom = new JSDOM("<!doctype html><html><body></body></html>", {
    url: "http://localhost/",
  });
  const { window } = jsdom;
  (globalThis as any).window = window;
  (globalThis as any).document = window.document;
  (globalThis as any).navigator = window.navigator;
  (globalThis as any).HTMLElement = window.HTMLElement;
  (globalThis as any).Element = window.Element;
  (globalThis as any).Node = window.Node;
}

// Mock the useSelector hook from react-redux
jest.mock("react-redux", () => {
  const actual =
    typeof jest !== "undefined" && typeof jest.requireActual === "function"
      ? jest.requireActual("react-redux")
      : {};
  return {
    ...actual,
    useSelector: jest.fn(),
  };
});

const mockUseSelector = useSelector as unknown as jest.Mock;

describe("TitleBar", () => {
  let renderResult: RenderResult;
  let mockState: RootState;

  beforeEach(() => {
    // Mock IntersectionObserver for JSDOM / Bun test environment
    const mockObserver = jest.fn().mockImplementation(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    }));

    if (typeof window !== "undefined") {
      window.IntersectionObserver = mockObserver;
    }
    if (typeof globalThis !== "undefined") {
      (globalThis as unknown as { IntersectionObserver: unknown }).IntersectionObserver = mockObserver;
    }

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
