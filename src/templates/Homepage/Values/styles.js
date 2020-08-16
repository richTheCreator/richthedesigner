import styled from 'styled-components'
import { Heading4 } from '../../../components/Typography'

export const ValueText = styled(Heading4)`
  border-bottom: 5px solid ${(props) => props.theme.colors.sage};
`

export const ValueContainer = styled.div`
  &:nth-child(3) {
    p {
      margin-bottom: 100px;
    }
  }
`

export const peekStyles = {
  position: 'absolute',
  overflow: 'hidden',
  minHeight: '100px',
  maxWidth: '600px',
  width: '100%',
  bottom: '0px',
  right: '-100px'
}
