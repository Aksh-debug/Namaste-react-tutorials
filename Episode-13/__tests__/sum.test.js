import { sum } from "../src/sum"

test("This expects the sum of two numbers",()=>{
    const result=sum(3,4);
    expect(result).toBe(7);
})