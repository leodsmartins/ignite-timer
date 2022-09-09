import { Play } from 'phosphor-react'
import { HomeContainer, FormContainer, CountdownContainer, Divider, ButtonContainer} from './styles'

export function Home() {
    return (
        <HomeContainer>
            <form action="">
                <FormContainer>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <input type="text" id="task" />

                    <label htmlFor="minutesAmount"></label>
                    <input type="number" id="minutesAmount" />

                    <span>minutos.</span>
                </FormContainer>
                <CountdownContainer>
                    <span>0</span>
                    <span>0</span>
                    <Divider>:</Divider>
                    <span>0</span>
                    <span>0</span>
                </CountdownContainer>
                <ButtonContainer type="submit"><Play size={24} />Começar</ButtonContainer>
            </form>
        </HomeContainer>
    )
    
}