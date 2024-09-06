import './App.css'
import SignIn from "./components/SignIn.jsx";
import ResponsiveDialog from "./components/Test.jsx";
import Register from "./components/Register.jsx";

function App() {

    return (
        <>
            <ResponsiveDialog name="Login">
                <SignIn/>
            </ResponsiveDialog>
            <ResponsiveDialog name="Register">
                <Register/>
            </ResponsiveDialog>
        </>
    )
}

export default App
