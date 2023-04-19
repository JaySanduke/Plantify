import React, { useState } from 'react'
import { Outlet, useNavigation } from 'react-router-dom'

//Components
import Header from '../components/headers/header'
import Footer from '../components/footers/footer'
import Loader from '../components/loaders/loader'
import Scrolltotopbutton from '../components/scrolltotop/scrolltotopbutton'

export default function rootLayout() {
    const navigation = useNavigation()

    const [sticked, setSticked] = useState(false)

    function activatenavbar() {
        if (window.scrollY > 100) {
            setSticked(true)
        }
        else {
            setSticked(false)
        }
    };

    const [active, setActive] = useState(false);

    const togglescrollTop = function () {
        window.scrollY > 100 ? setActive(true) : setActive(false);
    }

    window.onscroll = function () {
        activatenavbar();
        togglescrollTop();
    };

    window.onload = function () {
        scrollTo(0, 0);
    };

    return (
        <>
            {navigation.state == "loading" ? <Loader /> : null}
            <Header sticked={sticked} />
            <main id="main">
                <Outlet />
            </main>
            <Scrolltotopbutton active={active} />
            <Footer />
        </>
    )
}
