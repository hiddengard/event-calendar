import './App.css';
import { ConfigProvider, Layout, theme } from 'antd';
import React, { FC, useEffect, useState } from 'react';

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

    const { defaultAlgorithm, darkAlgorithm } = theme;
    const [isDarkMode, setIsDarkMode] = useState(true);

    return (
        <div className='App'>
            <ConfigProvider
                theme={{
                    algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
                    token: {
                        colorBgBase: isDarkMode ? 'rgb(35 39 47)' : '#fff',
                        colorPrimary: 'rgb(8 126 164)',
                    },
                }}
            >
                <Layout>
                    <Navbar setIsDarkMode={setIsDarkMode} />
                    <Layout.Content>
                        <AppRouter />
                    </Layout.Content>
                </Layout>
            </ConfigProvider>
        </div>
    );
};

export default App;
