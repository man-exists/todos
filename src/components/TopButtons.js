import { useColorMode } from '@chakra-ui/react'
import React from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import TopIcon from './TopIcon'

function TopButtons() {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <React.Fragment>
            <TopIcon
                icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
                title="Toggle Color Mode"
                onClick={toggleColorMode} />
        </React.Fragment>
    )
}

export default TopButtons
