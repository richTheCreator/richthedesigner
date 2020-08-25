import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid'
import { space, borderWidth, color, borderRadius, height } from 'styled-system'
import BackgroundImage from 'gatsby-background-image'
import Select from 'react-select'
import { Body1, Overline } from '../../../components/Typography'
import { FileIcon } from '../../../components/SVG/File'

export const StyledFileIcon = styled(FileIcon)`
  ${space}
  height: 24px;
`

export const HeroContainer = styled(Row)`
  ${space}
  position: relative;
  background-position: center center;
  background-size: cover;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.ivory};
`
export const ProductImg = styled(BackgroundImage)`
  ${borderRadius}
  ${height}
  background-size:cover;
  width: 100%;
  box-shadow: ${(props) => props.theme.shadows.md};
`

export const TextContainer = styled(Col)`
  ${space}
  align-self: center;
  z-index: 1;
`
export const ImageWrapper = styled(Col)`
  ${space}
`
export const SelectWrapper = styled(Select)`
  ${space}
`

export const BaseBorder = styled(Col)`
  ${borderWidth}
  ${space}
  margin: 0px;
  padding: 8px;
  height: fit-content;
  border-style: solid;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-color: ${(props) => props.theme.colors.black};
`
