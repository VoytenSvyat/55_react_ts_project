import Button from "../../components/Button/Button";
import { Homework10Container } from "./styles";

function Homework10() {
  return (
    <>
      <Homework10Container>
        <Button name="Send" />
        <Button name="Delete" danger />
      </Homework10Container>
    </>
  );
}

export default Homework10;
