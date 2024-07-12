import React from 'react';
import './LogItem.css'
import { ILogItem } from '../../../Types/Logs/ILogItem';
import LogDate from './Date/Date';
import Card from '../../UI/Card/Card';


interface ILogItemProps{
    logItem: ILogItem
}

class LogItem extends React.Component<ILogItemProps>{
    public render(): JSX.Element{
        const {date, duration, event} = this.props.logItem;
        return <Card className="logs-item">
                <LogDate dateInfo = {date}></LogDate>
                <div className="logs-item-desc">
                    <h2>{event}</h2>
                    <div className="logs-item-time">{`${duration}分钟`}</div>
                </div>
        </Card>;
    }
}

export default LogItem;