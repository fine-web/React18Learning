import React from 'react'
import LogItem from './logItem'

class Logs extends React.Component<{}>{
    constructor(props: {}){
        super(props);
        this.state = {
            timeArr : [
                new Date(2024,7,1),
                new Date(2024,7,2),
                new Date(2024,7,3),
                new Date(2024,7,4),
            ]
        }

    }
    public render(): JSX.Element {
        return <div>
            <LogItem></LogItem>
        </div>
    }
}

export default Logs;