import { sum } from "../sum";

test("Sum function calculate the sum of two number",()=>{
     const result=sum(3,4);

    expect(result).toBe(7);
})