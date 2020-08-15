import styled from 'styled-components'
import { Heading3 } from '../../../components/Typography'
import PreviewCompatibleImage from '../../../components/PreviewCompatibleImage'

export const ValueText = styled(Heading3)`
  border-bottom: 5px solid ${(props) => props.theme.colors.sage};
`

export const ValueContainer = styled.div`
  &:nth-child(1) {
    h3 {
      margin-top: 0px;
    }
  }
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
  maxWidth: '800px',
  width: '100%',
  bottom: '0px',
  right: '0px'
}
