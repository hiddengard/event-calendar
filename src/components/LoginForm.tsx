import { Button, Form, Input } from 'antd';
import React, { FC, useState } from 'react';

import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { rules } from '../utils/rules';

const LoginForm: FC = () => {
    const { error, isLoading } = useTypedSelector(state => state.auth);
    const [username, setUsername] = useState('admin');
    const [password, setPassword] = useState('123');
    const { login } = useActions();

    const submit = () => {
        login(username, password);
    };
    return (
        <Form onFinish={submit} autoComplete='off'>
            {error && <div style={{ color: 'red', textAlign: 'center', marginBottom: '20px' }}>{error}</div>}
            <Form.Item label='Имя пользователя' name='username' rules={[rules.required('Пожалуйста введите имя!')]}>
                <Input
                    placeholder='admin'
                    value={username}
                    onChange={e => {
                        setUsername(e.target.value);
                    }}
                />
            </Form.Item>
            <Form.Item label='Пароль' name='password' rules={[rules.required('Пожалуйста введите пароль!')]}>
                <Input.Password
                    placeholder='123'
                    value={password}
                    onChange={e => {
                        setPassword(e.target.value);
                    }}
                />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type='primary' htmlType='submit' loading={isLoading}>
                    Войти
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;
