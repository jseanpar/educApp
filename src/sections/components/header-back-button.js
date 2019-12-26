import React from 'react'
import { Button, Icon } from 'native-base'

function HeaderBackButton ( props ) {
    return (
        <Button onPress = { props.onPress }  transparent><Icon name="arrow-back"/></Button>
    )
}

export default HeaderBackButton