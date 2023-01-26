import React, { FC, useEffect, useState } from 'react';
import { Button, Layout, Modal, Row } from 'antd';

import EventCalendar from '../components/EventCalendar';
import EventForm from '../components/EventForm';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { IEvent } from '../models/IEvent';

const Event: FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { fetchGuests, createEvent, fetchEvents } = useActions();
    const { guests, events } = useTypedSelector(state => state.event);
    const { user } = useTypedSelector(state => state.auth);

    useEffect(() => {
        fetchGuests();
        fetchEvents(user.username);
    }, []);

    const addNewEvent = (event: IEvent) => {
        setIsModalOpen(false);
        createEvent(event);
    };

    return (
        <Layout>
            <Row
                justify='center'
                align='middle'
                style={{ minHeight: 'calc(100vh - 64px', maxWidth: '1000px', margin: '0 auto' }}
            >
                <EventCalendar events={events} />
                <Button
                    onClick={() => {
                        setIsModalOpen(true);
                    }}
                >
                    Добавить событие
                </Button>
            </Row>
            <Modal
                title='Добавить событие'
                open={isModalOpen}
                footer={null}
                onCancel={() => {
                    setIsModalOpen(false);
                }}
                bodyStyle={{ padding: '20px 15px 0px' }}
            >
                <EventForm guests={guests} submit={addNewEvent} />
            </Modal>
        </Layout>
    );
};

export default Event;
