import { Play, Plus, Minus } from "phosphor-react";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import {
    HomeContainer,
    FormContainer,
    CountdownContainer,
    Divider,
    ButtonContainer,
    TaskInput,
    MinutesAmountInput,
} from "./styles";

const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, 'Informe a tarefa'),
    minutesAmount: zod.number().min(5, 'O ciclo precisa ser no mínimo de 60 minutos').max(60, 'O ciclo precisa ser no máximo de 60 minutos'),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>


export function Home() {
    const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
            task: '',
            minutesAmount: 0,
        }
    });



    const task = watch('task');
    const isSubmitDisabled = !task;

    

    function handleCreateNewCycle(data: NewCycleFormData) {
        console.log(data);
        reset();
    }


    return (
        <HomeContainer>
        <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
            <FormContainer>
            <label htmlFor="task">Vou trabalhar em</label>
            <TaskInput
                type="text"
                id="task"
                placeholder="Dê um nome para o seu projeto"
                {...register('task')}
            />

            <label htmlFor="minutesAmount">durante</label>
            <MinutesAmountInput
                type="number"
                id="minutesAmount"
                placeholder="00"
                min={5}
                max={60}
                step={5}
                {...register('minutesAmount', { valueAsNumber: true})}
            />

            <span>minutos.</span>
            </FormContainer>
            <CountdownContainer>
            <span>0</span>
            <span>0</span>
            <Divider>:</Divider>
            <span>0</span>
            <span>0</span>
            </CountdownContainer>
            <ButtonContainer disabled={isSubmitDisabled} type="submit">
            <Play size={24} />
            Começar
            </ButtonContainer>
        </form>
        </HomeContainer>
    );
}
