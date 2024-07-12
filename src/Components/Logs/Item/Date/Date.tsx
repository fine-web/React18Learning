import React from 'react'
import './Date.css'
import Card from '../../../UI/Card/Card'

interface IDateProps{
    dateInfo: Date
}

class LogDate extends React.Component<IDateProps>{
    public render(): JSX.Element{
        const {dateInfo} = this.props
        return <Card className="logs-date">
                <div className="month">{dateInfo.toLocaleString('zh-CN',{month:'long'})}
                </div>
                <div className="day">{dateInfo.toLocaleString('zh-CN',{day:'numeric'})}
                </div>
        </Card>
    }
}

export default LogDate;