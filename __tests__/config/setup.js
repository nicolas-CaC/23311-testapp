// import matchers from '@testing-library/jest-dom/matchers'
import { afterEach, vitest } from "vitest";
import { cleanup } from '@testing-library/react';


// expect.extend(matchers)

afterEach(() => {
    vitest.useRealTimers()
    cleanup()
})