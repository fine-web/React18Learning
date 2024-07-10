import React from 'react'
import LogItem from './logItem'

interface IState{
    timeArr:Array<Date>
}
class Logs extends React.Component<{},IState>{
    constructor(props: {}){
        super(props);
        this.state = {
            timeArr : [
                new Date(2024,7,1),
                new Date(2024,6,2),
                new Date(2024,5,3),
                new Date(2024,4,4),
            ]
        }

    }
    public render(): JSX.Element {
        return <div>
            {
                this.state.timeArr.map((time)=>{
                    return <LogItem dateInfo = {time}></LogItem>
                })
            }
        </div>
    }
}

export default Logs;