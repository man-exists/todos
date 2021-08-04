import { HStack, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { FaMoon, FaSun, FaUserCircle } from 'react-icons/fa'
import TopIcon from './TopIcon'

function TopButtons() {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <HStack alignSelf='flex-end'>
            <TopIcon
                icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
                title="Toggle Color Mode"
                onClick={toggleColorMode} />
            <TopIcon 
            icon={<FaUserCircle />}
            title="Account" />
        </HStack>
    )
}

export default TopButtons
