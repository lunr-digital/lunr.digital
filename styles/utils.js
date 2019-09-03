import { css } from 'styled-components';
import { mediaMin } from '../utils/media';

function createSpacing(props) {
    return Object.values(props.theme.spacing).map(
        (space, i) => `
        .p-${i} {
            padding: ${space} !important;
        }
        .pt-${i} {
            padding-top: ${space} !important;
        }
        .pb-${i} {
            padding-bottom: ${space} !important;
        }
        .pt-${i} {
            padding-top: ${space} !important;
        }
        .py-${i} {
            padding-top: ${space} !important;
            padding-bottom: ${space} !important;
        }
        .px-${i} {
            padding-left: ${space} !important;
            padding-right: ${space} !important;
        }

        .m-${i} {
            margin: ${space} !important;
        }
        .mt-${i} {
            margin-top: ${space} !important;
        }
        .mb-${i} {
            margin-bottom: ${space} !important;
        }
        .mt-${i} {
            margin-top: ${space} !important;
        }
        .my-${i} {
            margin-top: ${space} !important;
            margin-bottom: ${space} !important;
        }
        .mx-${i} {
            margin-left: ${space} !important;
            margin-right: ${space} !important;
        }
        `
    );
}

export default css`
    .tac {
        text-align: center;
    }

    .spacer-y {
        padding-top: 3rem;
        padding-bottom: 2rem;

        ${mediaMin.desktop`
            padding-top: 6rem;
            padding-bottom: 3rem;
        `}
    }

    .responsive-img {
        width: 100%;
        height: auto;
    }

    ${createSpacing};
`;
