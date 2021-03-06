import React, {Component} from 'react';
import {BrowserRouter, Switch} from "react-router-dom";
import './App.css'
import {ConfigProvider} from "antd";
import cn from 'antd/es/locale/zh_CN'
import OuterNavigation from "./layout/OuterNavigation";
import InnerNavigation from "./layout/InnerNavigation";
import BackgroundNavigation from "./layout/BackgroundNavigation";

export default class App extends Component {
    render() {
        return (
            <ConfigProvider locale={cn}>
                <BrowserRouter>
                    <Switch>
                        {window.location.pathname.startsWith('/background') ?
                            <BackgroundNavigation/> : (window.location.pathname === '/discussion' || window.location.pathname === '/recommend' || window.location.pathname === '/login' || window.location.pathname === '/register' || window.location.pathname === '/checkemail' || window.location.pathname === '/forgetpassword' || window.location.pathname === '/forgetpasswordcheckemail' || window.location.pathname === '/setpassword') ?
                                <InnerNavigation/> : <OuterNavigation/>}
                    </Switch>
                </BrowserRouter>
            </ConfigProvider>
        )
    }
}
