import React from 'react';
import './../resources/defaultlayout.css'
import { Button, Dropdown } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { UserOutlined } from "@ant-design/icons";

function DefaultLayout(props) {
    const user = JSON.parse(localStorage.getItem("Resume-user"));
    const navigate = useNavigate();

    const items = [
        {
            key: '1',
            label: (
                <Link to="/home" style={{ textDecoration: 'none' }}>
                    Home
                </Link>
            ),
        },
        {
            key: '2',
            label: (
                <Link to="/profile" style={{ textDecoration: 'none' }}>
                    Profile
                </Link>
            ),
        },
        {
            key: '3',
            label: (
                <span
                    onClick={() => {
                        localStorage.removeItem('Resume-user');
                        navigate('/login');
                    }}
                    style={{ cursor: 'pointer' }}
                >
                    Logout
                </span>
            ),
        },
    ];
    return (
        <div className="layout">
            <div className="header">
                <h1 onClick={() => navigate('/home')} style={{ cursor: 'pointer' }}>Resume Builder</h1>
                <Dropdown
                    menu={{ items }}
                    placement="bottomLeft"
                >
                    <Button icon={<UserOutlined />}>{user.username}</Button>
                </Dropdown>
            </div>
            <div className="content" style={{ overflow: 'scroll', backgroundColor: 'white' }}>{props.children}</div>
        </div>
    )
}

export default DefaultLayout