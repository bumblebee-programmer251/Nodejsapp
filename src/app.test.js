
import supertest from "supertest";
import app from "./app.js"

const request = supertest(app);

describe("/testNod endpoint",()=>{
    it("should return a response",async()=>{
        const response = await request.get("/testNode");
        expect (response.status).toBe(200);
        expect (response.text).toBe("yes the test node endpoint work");
    });
});