import React from 'react'
import { SectionWrapper, SectionMax } from '../../../components/Containers'
import { ResumeItem } from './styles'
import { Heading5 } from '../../../components/Typography'

const Resume = ({ resume }) => {
  return (
    <SectionWrapper bg='transparent'>
      <SectionMax
        height={'100%'}
        m='auto!important'
        css={`
          border-bottom: 1px solid ${({ theme }) => theme.colors.text};
        `}
      >
        <Heading5
          mb={5}
          fontWeight={700}
          css={`
            hyphens: auto;
          `}
        >
          {' '}
          ● EXPERIENCE{' '}
        </Heading5>
        {resume.map((res) => {
          return <ResumeItem res={res} />
        })}
      </SectionMax>
    </SectionWrapper>
  )
}

export { Resume }
