import { Image, Heading, Title } from './style/headerImageStyle.js'


const HeaderImage = () => {
    return (
        <Image>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Heading>BLOG</Heading>
                <Title>FINAL REPORT FOR CNPMM</Title>
            </div>
        </Image>
    )
}

export default HeaderImage