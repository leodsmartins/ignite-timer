import { Play, Plus, Minus} from 'phosphor-react'
import { 
    HomeContainer, 
    FormContainer, 
    CountdownContainer, 
    Divider, ButtonContainer, 
    TaskInput, 
    MinutesAmountInput
} from './styles'

export function Home() {
    return (
        <HomeContainer>
            <form action="">
                <FormContainer>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <TaskInput type="text" id="task" placeholder="Dê um nome para o seu projeto"/>

                    <label htmlFor="minutesAmount">durante</label>
                    <MinutesAmountInput type="number" id="minutesAmount" placeholder="00" min={5} max={60} step={5}/>

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