import { Play, Plus, Minus } from "phosphor-react";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { differenceInSeconds, startOfDay } from "date-fns"; 

import {
    HomeContainer,
    FormContainer,
    CountdownContainer,
    Divider,
    ButtonContainer,
    TaskInput,
    MinutesAmountInput,
} from "./styles";
import { useEffect, useState } from "react";

const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, 'Informe a tarefa'),
    minutesAmount: zod.number().min(5, 'O ciclo precisa ser no mínimo de 60 minutos').max(60, 'O ciclo precisa ser no máximo de 60 minutos'),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

interface Cycle {
    id: string
    task: string
    minutesAmount: number
    startDate: Date
}


export function Home() {
    const [cycles, setCycles]  = useState<Cycle[]>([])
    const [activeCycleId, setActiveCycleId] = useState<string | null>()
    const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

    const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
            task: '',
            minutesAmount: 0,
        }
    });

    const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

    useEffect(() => {
        if(activeCycle) {
            setInterval(() => {
                setAmountSecondsPassed(
                    differenceInSeconds(new Date(), activeCycle.startDate)
                )
            }, 1000)
        }
    },[activeCycle])

    const task = watch('task');
    const isSubmitDisabled = !task;

    

    function handleCreateNewCycle(data: NewCycleFormData) {
        const id =String(new Date().getTime());

        const newCycle: Cycle = {
            id,
            task: data.task,
            minutesAmount: data.minutesAmount,
            startDate: new Date(),
        }
        
        setCycles((state) => [...state, newCycle])
        setActiveCycleId(id)

        reset();
    }



    const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
    const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

    const minutesAmount = Math.floor(currentSeconds / 60)
    const secondsAmounts = currentSeconds % 60
    
    const minutes = String(minutesAmount).padStart(2, '0')
    const seconds = String(secondsAmounts).padStart(2, '0')


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
            <span>{minutes[0]}</span>
            <span>{minutes[1]}</span>
            <Divider>:</Divider>
            <span>{seconds[0]}</span>
            <span>{seconds[1]}</span>
            </CountdownContainer>
            <ButtonContainer disabled={isSubmitDisabled} type="submit">
            <Play size={24} />
            Começar
            </ButtonContainer>
        </form>
        </HomeContainer>
    );
}
