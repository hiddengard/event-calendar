import React, { FC, useState } from 'react';
import { Button, Layout, Modal, Row } from 'antd';

import EventCalendar from '../components/EventCalendar';
import EventForm from '../components/EventForm';

const Event: FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <Layout>
            <Row
                justify='center'
                align='middle'
                style={{ minHeight: 'calc(100vh - 64px', maxWidth: '1000px', margin: '0 auto' }}
            >
                <EventCalendar events={[]} />
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
                <EventForm />
            </Modal>
        </Layout>
    );
};

export default Event;
