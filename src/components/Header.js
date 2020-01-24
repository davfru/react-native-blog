import React from 'react';

import { Appbar } from 'react-native-paper';

const Header = () => {
    return <>
        <Appbar.Header>
            <Appbar.Content
                title="Blog post"
            />
        </Appbar.Header>
    </>;
};

export default Header;