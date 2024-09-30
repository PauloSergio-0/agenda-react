import { Text } from '../Text';
import { Task, TaskHeader, TaskDescripition,TaskFooter, TaskStatus, TaskActions ,TaskIcon}  from './styles'
import pending from '../../assets/images/pending.png';
import done from '../../assets/images/done.png';

export default function Tasks() {
  return (
    <Task>
        <TaskHeader>

        <Text size = {18} weigth = {600}>Estudar simulado</Text>
            </TaskHeader>
            
        <TaskDescripition>
            <Text opacity = {0.5}>Estudando para o  simulado</Text>
        </TaskDescripition>

        <TaskFooter>
            <TaskIcon soucer = {pending}/>
        </TaskFooter>

        <TaskStatus>

            
        </TaskStatus>



    </Task>
  );
}