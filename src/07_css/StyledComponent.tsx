import styled, { css, CSSProp } from 'styled-components';

const Box = styled.div`
    /* props로 넣어 준 값을 직접 전달해 줄 수 있습니다. */
    background: ${props => props.color || 'blue'};
    padding: 1rem;
    display: flex;
`;

const sizes = {
    desktop: 1024,
    tablet: 768,
}

type Sizes = typeof sizes;
type Media = {
    [Key in keyof Sizes]: (...args: Parameters<typeof css>) => CSSProp;
};
const media: Media = Object.keys(sizes).reduce((acc, label) => {
    const key = label as keyof Sizes;
    acc[key] = (...args) => css`
      @media (max-width: ${sizes[key] / 16}em) {
        ${css(...args)};
        }
    `;
     
    return acc;
}, {} as Media);

const Button = styled.button<{inverted?: boolean}>`
    background: white;
    color: black;
    border-radius: 4px;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    font-size: 1rem;
    font-weight: 600;
    width: 1024px;
    margin: 0 auto;
    
    ${media.desktop`width: 768px;`}
    ${media.tablet`width: 100%;`}

    &:hover {
        background: rgba(255, 255, 255, 0.9);
    }

    ${props =>
        props.inverted && css`
            background: none;
            border: 2px solid white;
            color: white;
            &:hover {
                background: white;
                color: black;
            }
        `};
    & + button {
        margin-left: 1rem;
    }
`;


const StyledComponent = () => {
    return (
        <Box>
            <Button>안녕하세요</Button>
            <Button inverted={true}>테두리만</Button>
        </Box>
    );
}

export default StyledComponent;