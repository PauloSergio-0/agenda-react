import { Text } from "../Text";

import { Container } from "./styles";
export default function Header() {
    return(
        <Container>
            <Text size = {24}> 
                ToDO
            <Text size = {24} weight = "700">APP</Text>
            </Text>

            <Text opacity = {0.5}>
                Add, Delete ou marque as tarefas executadas
            </Text>
        </Container>
    )
}