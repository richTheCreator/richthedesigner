import React from 'react'
import { Flex } from 'reflexbox/styled-components'
import { Link } from 'rebass/styled-components'

import { SectionWrapper, SectionMax } from '../../../components/Containers'
import {
  Body2,
  Heading2,
  Heading5,
  Subtitle1
} from '../../../components/Typography'
import styled from 'styled-components'
import { Github } from '../../../components/SVG/Github'
import { LinkedIn } from '../../../components/SVG/LinkedIn'
import { Resume } from '../../../components/SVG/Resume'
import { Email } from '../../../components/SVG/Email'

const Styled_GH = styled(Github)`
  height: 45px;
`
const Styled_LI = styled(LinkedIn)`
  height: 45px;
`
const Styled_Resume = styled(Resume)`
  height: 45px;
`
const Styled_Email = styled(Email)`
  height: 45px;
`

const StyledLink = (props) => (
  <Link
    color='text'
    {...props}
    css={`
      text-decoration: none;
    `}
  />
)
const Contact = ({ contact: { heading, description } }) => {
  return (
    <SectionWrapper mb={'0px'} id='contact'>
      <SectionMax py={9}>
        <Flex
          width={0}
          flexDirection='row'
          flexWrap='wrap'
          justifyContent='space-between'
        >
          <Flex
            width={0}
            flexDirection='column'
            mb={4}
            width={[0, 1 / 2, 1 / 3]}
          >
            <Heading2
              fontWeight={700}
              css={`
                hyphens: auto;
                text-transform: uppercase;
              `}
              color='white'
              mb={4}
            >
              {heading}
            </Heading2>
          </Flex>
          <Flex width={0} flexDirection='column' width={[0, 1 / 2, 2 / 3]}>
            <Subtitle1 color='white' mt={2} mb={8}>
              {description}
            </Subtitle1>
            <Flex flexDirection='row' width={0}>
              <Flex mx={3} flexDirection='column'>
                <StyledLink href='https://www.linkedin.com/in/moralesrichard1/'>
                  <Styled_LI />
                  <Body2 mt={2}>LINKEDIN</Body2>
                </StyledLink>
              </Flex>
              <Flex mx={3} flexDirection='column'>
                <StyledLink href='https://github.com/richTheCreator'>
                  <Styled_GH />
                  <Body2 mt={2}>GITHUB</Body2>
                </StyledLink>
              </Flex>
              <Flex mx={3} flexDirection='column'>
                <StyledLink href='https://standardresume.co/r/richardmorales'>
                  <Styled_Resume />
                  <Body2 mt={2}>RESUME</Body2>
                </StyledLink>
              </Flex>
              <Flex mx={3} flexDirection='column'>
                <StyledLink href='mailto:rmoralesdesigns@gmail.com'>
                  <Styled_Email />
                  <Body2 mt={2}>EMAIL</Body2>
                </StyledLink>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </SectionMax>
    </SectionWrapper>
  )
}

export { Contact }
