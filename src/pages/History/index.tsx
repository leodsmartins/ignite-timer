import { useContext } from "react";
import { CyclesContext } from "../../contexts/CyclesContext";
import { HistoryContainer, HistoryList, Status } from "./styles";

export function History() {
	const { cycles } = useContext(CyclesContext);

	return (
		<HistoryContainer>
			<h1>Minhas tarefas</h1>
			<HistoryList>
				<table>
					<thead>
						<tr>
							<th>Tarefa</th>
							<th>Duração</th>
							<th>Início</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Nome da tarefa</td>
							<td>30 minutos</td>
							<td>Há 2 meses</td>
							<td>
								<Status statusColor="green">Concluído</Status>
							</td>
						</tr>
						<tr>
							<td>Nome da tarefa</td>
							<td>30 minutos</td>
							<td>Há 2 meses</td>
							<td>
								<Status statusColor="green">Concluído</Status>
							</td>
						</tr>
						<tr>
							<td>Nome da tarefa</td>
							<td>30 minutos</td>
							<td>Há 2 meses</td>
							<td>
								<Status statusColor="green">Concluído</Status>
							</td>
						</tr>
						<tr>
							<td>Nome da tarefa</td>
							<td>30 minutos</td>
							<td>Há 2 meses</td>
							<td>
								<Status statusColor="green">Concluído</Status>
							</td>
						</tr>
						<tr>
							<td>Nome da tarefa</td>
							<td>30 minutos</td>
							<td>Há 2 meses</td>
							<td>
								<Status statusColor="green">Concluído</Status>
							</td>
						</tr>
						<tr>
							<td>Nome da tarefa</td>
							<td>30 minutos</td>
							<td>Há 2 meses</td>
							<td>
								<Status statusColor="green">Concluído</Status>
							</td>
						</tr>
					</tbody>
				</table>
			</HistoryList>
		</HistoryContainer>
	);
}
