import React, { FC } from 'react';
import { Calendar, Row } from 'antd';
import { Dayjs } from 'dayjs';

import { IEvent } from '../models/IEvent';
import { formatDate } from '../utils/date';

interface EventCalendarProps {
    events: IEvent[];
}

const EventCalendar: FC<EventCalendarProps> = props => {
    const dateCellRender = (value: Dayjs) => {
        const formattedDate = formatDate(value.toDate());
        const currentDayEvents = props.events.filter(ev => ev.date === formattedDate);
        return (
            <div>
                {currentDayEvents.map((ev, index) => (
                    <Row align='top' style={{ color: 'rgb(20 158 202)', fontWeight: '500' }} key={index}>
                        <div>
                            <span style={{ textDecoration: 'underline' }}>{ev.author}:</span>
                            <br />
                            {ev.description}
                        </div>
                    </Row>
                ))}
            </div>
        );
    };
    return <Calendar dateCellRender={dateCellRender} />;
};

export default EventCalendar;
