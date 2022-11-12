import matchers from "@testing-library/jest-dom/matchers";
import { expect } from "vitest";

//所有test起源於此
expect.extend(matchers);
