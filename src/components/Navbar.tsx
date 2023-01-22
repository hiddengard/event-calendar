import { Button, Layout, Row } from 'antd';
import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { RouteNames } from '../routes';

const Navbar: FC = () => {
    const router = useHistory();
    const { isAuth, user } = useTypedSelector(state => state.auth);
    const { logout } = useActions();

    return (
        <div>
            <Layout.Header>
                <Row style={{ height: '100%' }} justify='end' align='middle'>
                    {isAuth ? (
                        <>
                            <div style={{ color: 'white' }}>{user.username}</div>
                            <Button style={{ marginLeft: '20px' }} onClick={logout} key={'logout'}>
                                Выйти
                            </Button>
                        </>
                    ) : (
                        <Button
                            onClick={() => {
                                router.push(RouteNames.LOGIN);
                            }}
                            key={'login'}
                        >
                            Войти
                        </Button>
                    )}
                </Row>
            </Layout.Header>
        </div>
    );
};

export default Navbar;
