import get from 'lodash.get';

const theme = key => props => {
    const result = get(props.theme, key);

    if (!result) {
        throw new Error(`${key} not found!`);
    }

    return result;
};

export default theme;
