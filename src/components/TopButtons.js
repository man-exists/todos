import { HStack, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { FaHome, FaMoon, FaSun, FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import TopIcon from './TopIcon'

function TopButtons() {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <HStack alignSelf='flex-end'>
            <TopIcon
                icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
                title="Toggle Color Mode"
                onClick={toggleColorMode} />
            <Link to="/login">
                <TopIcon
                    icon={<FaUserCircle />}
                    title="Account Page" />
            </Link>
            <Link to="/">
                <TopIcon
                    icon={<FaHome />}
                    title="Home Page" />
            </Link>
        </HStack>
    )
}

export default TopButtons
