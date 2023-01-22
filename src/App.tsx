import './App.css';
import { Layout } from 'antd';
import React, { FC, useEffect } from 'react';

import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';
import { useActions } from './hooks/useActions';
import { IUser } from './models/IUser';

const App: FC = () => {
    const { SetUser, SetIsAuth } = useActions();

    useEffect(() => {
        if (localStorage.getItem('auth') ?? '') {
            SetUser({ username: localStorage.getItem('username' || '') } as IUser);
            SetIsAuth(true);
        }
    }, []);

    return (
        <div className='App'>
            <Layout>
                <Navbar />
                <Layout.Content>
                    <AppRouter />
                </Layout.Content>
            </Layout>
        </div>
    );
};

export default App;
