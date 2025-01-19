# TypeScript: Null check works, but undefined check fails

This repository demonstrates a common TypeScript error where a null check works correctly, but an undefined check fails even when the function accepts both null and undefined values. 

## Problem

A function accepts a parameter of type `string | null`.  A null check works, but if `undefined` is passed, TypeScript throws an error even though `undefined` should be handled as well.

## Solution

The solution changes the type to `string | null | undefined` allowing TypeScript to properly handle the `undefined` case.

## How to Reproduce

1. Clone this repository.
2. Compile the `bug.ts` file using TypeScript compiler (tsc bug.ts).
3. Observe the compilation error.
4. Compile the `bugSolution.ts` file using TypeScript compiler (tsc bugSolution.ts).
5. Observe that the compilation is successful.
