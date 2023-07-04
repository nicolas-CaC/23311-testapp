import { renderHook } from "@testing-library/react";
import { assert, describe, expect, test } from "vitest";
import { useFetch } from "../src/hooks/useFetch";
import { wait } from "./utils/utils";

describe('useFetch (Custom Hook)', () => {

    test('Valor inicial', () => {

        const initialValue = { data: [], loading: true }

        const { result: { current: { loading, data } } } = renderHook(useFetch)

        assert.equal(loading, initialValue.loading);
        expect(data).toEqual(initialValue.data);

    })

    test('Valor Posterior', async () => {

        const { result } = renderHook(useFetch);

        await wait(2000)

        const { loading, data } = result.current;

        // console.log(loading)
        // console.log(data.results)

        expect(loading).toBe(false)
        expect(data.results.length).toBeGreaterThan(0)

    })
})