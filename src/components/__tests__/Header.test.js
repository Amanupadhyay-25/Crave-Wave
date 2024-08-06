import { BrowserRouter } from "react-router-dom";
import Header from "../Header";
import { render,screen } from '@testing-library/react';
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";

//Describe will store all the test cases of a particular component in a single file
describe("here we write test case for Header Component ",()=>{

it("Should render Header component with a login button",()=>{
    render(
    <BrowserRouter>
   <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter> 
);
   const loginButton=screen.getByRole("button");
    expect(loginButton).toBeInTheDocument();
});


//Here i write test case for my Login button and check whether it is present or not
it("should find login button and render it with a particuar text",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header/>
        </Provider>
        </BrowserRouter>
    );
    //Other way to check particular button with their name 
    const loginButton=screen.getByRole("button",{name:"Login"}); 
    expect(loginButton).toBeInTheDocument();
});


//Now write test cases for onclick event of login-logout
});