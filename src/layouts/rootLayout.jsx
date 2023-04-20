import React, { useState } from 'react'
import { Outlet, useLocation, useNavigation } from 'react-router-dom'

//Components
import Header from '../components/headers/header'
import Footer from '../components/footers/footer'
import Loader from '../components/loaders/loader'
import Scrolltotopbutton from '../components/scrolltotop/scrolltotopbutton'
import Hero from '../components/heros/hero'

export default function rootLayout() {

    const location = useLocation()

    const navigation = useNavigation()
    const [loading, setLoading] = useState(true)

    if (navigation.state == "loading") {
        setLoading(true)
    }
    else {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }

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
            {loading ? <Loader /> : null}
            <Header sticked={sticked} />
            {(location.pathname === "/") ? <Hero /> : null}
            <main id="main" onLoad={() => {
                scrollTo(0, 0)
            }}>
                <Outlet />
            </main>
            <Footer />
            <Scrolltotopbutton active={active} />
        </>
    )
}
