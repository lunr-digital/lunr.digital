import styled, { css } from 'styled-components';

import theme from '../../utils/theme';

const errorStyles = css`
    border-color: ${props => props.theme.colors.red[4]} !important;
`;

const baseStyles = css`
    width: 100%;
    display: inline-block;
    font-size: 0.875rem;
    font-family: ${theme('sansSerif')};
    font-weight: inherit;
    outline: none;
    background: #fff;
    -webkit-appearance: none;
    appearance: none;
    color: inherit;
    border-radius: ${theme('borderRadius')};
    padding: ${theme('spacing.2')} ${theme('spacing.3')};
    border: ${theme('borderWidth')} solid ${theme('colors.gray.3')};
    transition: border 0.2s linear;
    line-height: normal;
    /* height: 2.25rem; */
    /* min-height: 2.25rem; */
    vertical-align: middle;
    ${props => props.hasError && errorStyles};

    &:focus {
        border-color: ${props => props.theme.colors[props.theme.color][5]};
    }

    &:disabled {
        border-color: ${theme('colors.gray.4')};
        opacity: 0.3;
        cursor: not-allowed;
    }

    ::placeholder {
        color: ${theme('colors.gray.5')};
        opacity: 1;
    }

    ::-webkit-inner-spin-button,
    ::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;
const Input = styled.input`
    ${baseStyles};

    &:read-only,
    &:read-only + .suffix,
    &:read-only + .prefix {
        display: inline-block;
        border: 0;
        padding: 0;
        background: transparent;
        color: inherit;
        opacity: 1;
        width: 100%;
        white-space: normal;

        &::placeholder {
            opacity: 0;
        }
    }
`;

Input.defaultProps = {
    className: undefined
};

export default Input;
export { baseStyles };
