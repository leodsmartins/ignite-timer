import { Play, Plus, Minus, HandPalm } from "phosphor-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { differenceInSeconds, startOfDay } from "date-fns";

import {
    HomeContainer,
    FormContainer,
    CountdownContainer,
    Divider,
    StartCountdownButton,
    StopCountdownButton,
    TaskInput,
    MinutesAmountInput,
} from "./styles";
import { useEffect, useInsertionEffect, useState } from "react";

const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, "Informe a tarefa"),
    minutesAmount: zod
        .number()
        .min(5, "O ciclo precisa ser no mínimo de 60 minutos")
        .max(60, "O ciclo precisa ser no máximo de 60 minutos"),
    });

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

interface Cycle {
    id: string;
    task: string;
    minutesAmount: number;
    startDate: Date;
    interruptedDate?: Date;
    finishedDate?: Date;
}

export function Home() {
    const [cycles, setCycles] = useState<Cycle[]>([]);
    const [activeCycleId, setActiveCycleId] = useState<string | null>();
    const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

    const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
        task: "",
        minutesAmount: 0,
        },
    });

    const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

    const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;

    useEffect(() => {
    let interval: number;

    if (activeCycle) {
        interval = setInterval(() => {
            const secondsDifference = differenceInSeconds(
            new Date(),
            activeCycle.startDate
            );

            if (secondsDifference >= totalSeconds) {
            setCycles((state) =>
                state.map((cycle) => {
                if (cycle.id === activeCycleId) {
                    return { ...cycle, finishedDate: new Date() };
                } else {
                    return cycle;
                }
                })
            );
            setAmountSecondsPassed(totalSeconds);
            clearInterval(interval);
            } else {
            setAmountSecondsPassed(secondsDifference);
            }
        }, 1000);
        }

        return () => {
        clearInterval(interval);
        };
    }, [activeCycle, totalSeconds, activeCycleId]);

    const task = watch("task");
    const isSubmitDisabled = !task;

    function handleCreateNewCycle(data: NewCycleFormData) {
        const id = String(new Date().getTime());

        const newCycle: Cycle = {
        id,
        task: data.task,
        minutesAmount: data.minutesAmount,
        startDate: new Date(),
        };

        setCycles((state) => [...state, newCycle]);
        setActiveCycleId(id);
        setAmountSecondsPassed(0);

        reset();
    }

    function handleInterruptCycle() {
        setCycles((state) =>
        state.map((cycle) => {
            if (cycle.id === activeCycleId) {
            return { ...cycle, interruptedDate: new Date() };
            } else {
            return cycle;
            }
        })
        );

        setActiveCycleId(null);
    }

    const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;

    const minutesAmount = Math.floor(currentSeconds / 60);
    const secondsAmounts = currentSeconds % 60;

    const minutes = String(minutesAmount).padStart(2, "0");
    const seconds = String(secondsAmounts).padStart(2, "0");

    useEffect(() => {
        document.title = `${minutes}:${seconds}`;
    }, [minutes, seconds]);

    return (
        <HomeContainer>
        <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
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
            <CountdownContainer>
            <span>{minutes[0]}</span>
            <span>{minutes[1]}</span>
            <Divider>:</Divider>
            <span>{seconds[0]}</span>
            <span>{seconds[1]}</span>
            </CountdownContainer>

            {activeCycle ? (
            <StopCountdownButton onClick={handleInterruptCycle} type="button">
                <HandPalm size={24} />
                Interromper
            </StopCountdownButton>
            ) : (
            <StartCountdownButton disabled={isSubmitDisabled} type="submit">
                <Play size={24} />
                Começar
            </StartCountdownButton>
            )}
        </form>
        </HomeContainer>
    );
}
