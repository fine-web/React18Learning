import React from 'react';
interface ILogDate{
    dateInfo: Date
}
class LogItem extends React.Component<ILogDate,{}>{
    public render(): JSX.Element{
        return <div className="logs">
            <div className="logs-item">
                <div className="logs-date">
                    <div className="month">{this.props.dateInfo.toLocaleString('zh-CN',{month:'long'})}</div>
                    <div className="day">{this.props.dateInfo.toLocaleString('zh-CN',{day:'numeric'})}</div>
                </div>
                <div className="logs-item-desc">
                    <h2>React</h2>
                    <div className="logs-item-time">80分钟</div>
                </div>
            </div>
        </div>;
    }
}

export default LogItem;