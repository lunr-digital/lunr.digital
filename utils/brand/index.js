import get from 'lodash.get';

const brand = (key = '0') => props => {
    const result = get(props, `theme.colors[${props.theme.color}].${key}`);

    if (!result) {
        throw new Error(`color not found!`);
    }

    return result;
};

export default brand;
