import React from 'react';
import styled from 'styled-components';

function Error() {
    return (
        <Text>찾을 수 없는 페이지입니다.</Text>
    );
}

export default Error;

const Text = styled.text`
    font-size: 30px;
`;