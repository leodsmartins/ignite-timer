import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { CyclesContext } from "../..";
import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";


export function NewCycleForm() {
    const { activeCycle } = useContext(CyclesContext)
    const { register } = useFormContext()



    return (
        <FormContainer>
                <label htmlFor="task">Vou trabalhar em</label>
                <TaskInput
                    type="text"
                    id="task"
                    placeholder="Dê um nome para o seu projeto"
                    disabled={!!activeCycle}
                    {...register("task")}
                />

                <label htmlFor="minutesAmount">durante</label>
                <MinutesAmountInput
                    type="number"
                    id="minutesAmount"
                    placeholder="00"
                    min={5}
                    max={60}
                    step={1}
                    disabled={!!activeCycle}
                    {...register("minutesAmount", { valueAsNumber: true })}
                />

                <span>minutos.</span>
        </FormContainer>
    )
    
}