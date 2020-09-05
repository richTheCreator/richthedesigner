import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid'
import { space, height, color, borderWidth } from 'styled-system'
import BackgroundImage from 'gatsby-background-image'
import { Overline, Body2 } from '../Typography'
import { FileIcon } from '../SVG/File'

export const StyledFileIcon = styled(FileIcon)`
  ${space}
  height: 24px;
`
export const Container = styled(Row)`
  ${space}
  border-width: 2px;
  border-style: solid;
  border-color: ${(props) => props.theme.colors.black};
`
