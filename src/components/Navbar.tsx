import { Button, Layout, Row, Switch } from 'antd';
import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { BulbOutlined, CloudOutlined } from '@ant-design/icons';

import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { RouteNames } from '../routes';

interface NavbarProps {
    setIsDarkMode: (val: boolean) => void;
}

const Navbar: FC<NavbarProps> = ({ setIsDarkMode }) => {
    const router = useHistory();
    const { isAuth, user } = useTypedSelector(state => state.auth);
    const { logout } = useActions();

    return (
        <div>
            <Layout.Header>
                <Row style={{ height: '100%' }} justify='end' align='middle'>
                    <Switch
                        onChange={checked => {
                            setIsDarkMode(!checked);
                        }}
                        unCheckedChildren={<CloudOutlined />}
                        checkedChildren={<BulbOutlined />}
                        style={{ marginRight: '20px' }}
                    />
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
