import React from 'react';
class LogItem extends React.Component<{},{}>{
    public render(): JSX.Element{
        return <div className="logs">
            <div className="logs-item">
                <div className="logs-date">
                    <div className="month">三月</div>
                    <div className="day">22</div>
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