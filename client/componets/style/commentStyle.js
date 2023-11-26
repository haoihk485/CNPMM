import styled from "@emotion/styled"
import { Box, Typography } from "@mui/material"

export const Component = styled(Box)(
    {
        marginTop: '30px',
        background: '#F5F5F5',
        padding: '10px',
    }
)

export const Container = styled(Box)(
    {
        display: 'flex',
        marginBottom: '5px',
    }
)
export const Name = styled(Typography)(
    {
        fontWeight: 600,
        fontSize: '18px',
        marginRight: '20px',
    }
)
export const StyledDate = styled(Typography)(
    {
        fontSize: '14px',
        color: '#878787',
    }
)