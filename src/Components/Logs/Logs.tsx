import React from 'react'
import LogItem from './Item/LogItem';
import './Logs.css'
import { ILogItem } from '../../Types/Logs/ILogItem';
import Card from '../UI/Card/Card';

interface IState{
    timeArr:Array<ILogItem>
}

class Logs extends React.Component<{},IState>{
    constructor(props: {}){
        super(props);
        this.state = {
            timeArr : [
                {
                    date: new Date(2024,7,1),
                    duration: 90,
                    event: 'React'
                },
                {
                    date: new Date(2024,6,2),
                    duration: 60,
                    event: 'Vue'
                },
                {
                    date: new Date(2024,5,3),
                    duration: 100,
                    event: 'TypeScript'
                },
                {
                    date: new Date(2024,4,4),
                    duration: 90,
                    event: 'Java'
                }
            ]
        }

    }
    public render(): JSX.Element {
        return <Card className='logs'>
            {
                this.state.timeArr.map((logInfo: ILogItem,index)=>{
                    return <LogItem key={index} logItem = {logInfo}></LogItem>
                })
            }
        </Card>;
    }
}

export default Logs;