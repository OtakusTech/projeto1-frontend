import { MutatingDots } from "react-loader-spinner";
import { Container } from "reactstrap";

const Loading = () => {
    return (
        <Container className="mt--300 justify-content-center d-flex">
            <MutatingDots color="white" secondaryColor="white" width={100}/>
        </Container>
    );
};

export default Loading;