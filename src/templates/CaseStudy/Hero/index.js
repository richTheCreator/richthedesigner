import React, { useState } from 'react'
import { Row, Col } from 'react-flexbox-grid'
import {
  Heading4,
  Button as ButtonText,
  Caption
} from '../../../components/Typography'
import { Button, LinkButton } from '../../../components'
import { SectionMax, SectionWrapper } from '../../../components/Containers'
import {
  ProductImg,
  TextContainer,
  Banner,
  StyledFileIcon,
  BaseBorder,
  SelectWrapper
} from './styles'

const formatOptionLabel = ({ value, metric }) => (
  <ButtonText color='black' p={0}>
    {value}
    {metric}
  </ButtonText>
)

const Hero = ({
  title,
  productImage,
  category,
  cbd,
  thc,
  weights,
  coa_link
}) => {
  console.log('coa', coa_link)
  const [weightVal, setWeight] = useState(
    `${weights[0].value} ${weights[0].metric}`
  )

  const mailTo = `mailto:cody@elevatedtrading.com?cc=justin@elevatedtrading.com&subject=Price%20request%20for%3A%20${title}%20-%20${weightVal}&body=Testing`

  const sendEmail = (e) => {
    e.preventDefault()
    location.href = mailTo
  }

  return (
    <SectionWrapper
      bg='black'
      pl={[0, 0, 5, 6]}
      pr={[0, 0, 5, 6]}
      pt={[0, 0, 5, 6]}
      pb={[0, 0, 5, 6]}
    >
      <SectionMax
        style={{ position: 'relative' }}
        justifyContent={['center', 'center', 'flex-end', 'flex-end']}
        m='auto!important'
        p={[0, 4]}
      ></SectionMax>
    </SectionWrapper>
  )
}

export { Hero }
