import styled from "styled-components";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Banner from "./components/BannerResults";
import RentalReturnForm from "./components/RentalReturnForm";
import reducer from "./redux/reducer";

const store = createStore(reducer);

const Container = styled.div`
    margin: 50px auto;
    border: 1px solid red;

    @media (min-width: 768px) {
        width: 50%;
    }

    @media (max-width: 768px) {
        width: calc(100% - 10px);
    }
`;

function App() {
    return (
        <Provider store={store}>
            <Container>
                <Banner />
                <RentalReturnForm />
            </Container>
        </Provider>
    );
}

export default App;
